<template>
	<div id="app">
		<a-layout class="main">
			<Navbar/>

			<a-layout-content style="display: flex">
				<a-row class="container" type="flex" justify="center" align="middle">
					<a-col :xs="11" :sm="10" :l="8" :xl="6">
						<router-view/>
					</a-col>
					
					<a-back-top/>
				</a-row>
			</a-layout-content>

			<a-layout-footer class="footer">
				<span class="foot">Ludwig GUERIN &copy;2020<GdprOpener class="opener" :gdpr="$refs.gdpr"/></span><br/>
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
	@import "~@/scss/settings.scss";
	
	#app{
		width: 100%;
		height: 100vh;
	}
	
	.main{
		min-height: 100vh !important;
	}

	.container{
		min-height: 100%;
	}
	
	.foot{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
	.footer{
		text-align: center;
		padding: 0 1em !important;

		padding-top: 1em !important;
	}
	
	.opener{
		margin-left: 1em;
	}
</style>
