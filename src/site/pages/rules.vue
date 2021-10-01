<template>
	<!-- eslint-disable max-len -->
	<div class="container has-text-left">
		<h2 class="subtitle">
			You are not permitted to
		</h2>
		<ol>
			<li>Upload child pornography, viruses/malware, entire episodes of anime, or full length episodes of TV shows, heavy gore, sexualized depictions of minors, bestiality and sexual violence</li>
			<li>Breach or otherwise circumvent any security or authentication measures</li>
			<li>Violate the privacy or infringe the rights of others</li>
			<li>Violate the law in any way, including storing, publishing or sharing material that's fraudulent, defamatory, or misleading</li>
			<li>Send altered, deceptive or false source-identifying information, including "spoofing" or "phishing"</li>
			<li>Publish materials that contain extreme acts of violence or terrorist activity, including terror propaganda</li>
		</ol>
		<h4 class="pt-5">
			Any files can be reviewed by an admin at any time
		</h4>
	</div>
</template>

<script>
export default {
	name: 'Rules',
	data() {
		return {};
	},
	head() {
		return {
			title: 'Rules'
		};
	}
};
</script>

<style lang="scss" scoped>
	li {
		padding-bottom: 1rem;
		font-size: 18px;
	}
	h2 {
		font-size: 32px;
	}
	h4 {
		font-size: 22px;
	}
</style>
