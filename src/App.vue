<template>
	<div id="app">
		<a-layout class="main">
			<Navbar/>

			<a-layout-content>
				<a-row class="container" type="flex" justify="center" align="middle">
					<a-col :xs="12" :sm="10" :l="8" :xl="6">
						<router-view/>
					</a-col>
					
					<a-back-top/>
				</a-row>
			</a-layout-content>

			<a-layout-footer style="text-align: center; padding: 2em 1em;">
				<span>Ludwig GUERIN ©2020</span> <GdprOpener :gdpr="$refs.gdpr"/> <br/>
				<keep-alive>
					<GdprBanner ref="gdpr"/>
				</keep-alive>
			</a-layout-footer>
		</a-layout>
	</div>
</template>

<script>
	import GdprBanner from "@/components/GdprBanner"
	import GdprOpener from "@/components/GdprOpener"
	import Navbar from "@/components/Navbar"
	
	export default {
		components: {
			GdprBanner,
			GdprOpener,
			Navbar,
		},
	}
</script>

<style lang="scss">
	#app{
		width: 100vw;
		height: 100vh;
		
		overflow-x: hidden;
		overflow-y: auto;
	}
	
	.main, .container{
		min-height: 100%;
		height: 100%;
	}
</style>