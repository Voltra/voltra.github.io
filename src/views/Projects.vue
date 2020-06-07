<template>
	<!-- TODO: check how @octokit/rest works (pagination) -->
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
	import { Octokit } from "@octokit/rest"

	const octokit = new Octokit({
		userAgent: "voltra.github.io vX.Y.Z"
	});

	export default {}
</script>
