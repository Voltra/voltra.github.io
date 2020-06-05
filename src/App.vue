<template>
	<div id="app">
		<a-menu mode="horizontal" id="nav">
			<a-menu-item to="/">Home</a-menu-item> |
			<a-menu-item to="/about">About</a-menu-item>
		</a-menu>

		<router-view/>
	</div>
</template>

<script>
	export default {}
</script>