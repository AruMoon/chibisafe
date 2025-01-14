const { response } = require('express');
const Route = require('../../structures/Route');
const Util = require('../../utils/Util');

class filesGET extends Route {
	constructor() {
		super('/admin/file/:id', 'get', { adminOnly: true });
	}

	async run(req, res, db) {
		const { id } = req.params;
		if (!id) return res.status(400).json({ message: 'Invalid file ID supplied' });

		let file = await db.table('files').where({ id }).first();
		file = Util.constructFilePublicLink(req, file);

		if (file.userId) {
			const user = await db.table('users')
				.select('id', 'username', 'enabled', 'createdAt', 'editedAt', 'apiKeyEditedAt', 'isAdmin')
				.where({ id: file.userId })
				.first();
			const filesFromUser = await db.table('files').where({ userId: user.id }).select('id');
			user.fileCount = filesFromUser.length;

			return res.json({
				message: 'Successfully retrieved file',
				file,
				user
			})
		}
		else return res.json({
			message: 'Successfully retrieved file',
			file
		})
	}
}

module.exports = filesGET;
