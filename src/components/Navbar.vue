<template>
	<a-layout-header class="nav">		
		<a-page-header  class="nav__header" ref="header" :backIcon="false">
			<router-link :to="{name: 'Home'}" class="nav__title" slot="title">
				<a-avatar v-bind="avatar"/> Ludwig
			</router-link>
			
			<a-menu class="menu" slot="extra" mode="horizontal" @click="onClick" :selectedKeys="selectedKeys">
				<a-menu-item v-for="route in routes" :key="extractKey(route)">
					<a-icon :type="extractIcon(route)"/> {{ extractTitle(route) }}
				</a-menu-item>
			</a-menu>
		</a-page-header>
	</a-layout-header>
</template>

<script>
	export default {
		mounted(){
			/*Object.keys(this.avatar)
			.forEach(key => {
				this.$refs.header.$children[0].$props[key] = this.avatar[key];
			});*/
			
			//TODO: Notify library authors of broken avatar
		},
		data(){
			return {
				avatar: {
					src: "/img/voltra.png",
					alt: "Logo",
					size: "large",
				}
			};
		},
		computed: {
			routes(){
				return this.$router
					.options.routes
					.filter(route => this.isNavRoute(route));
			},
			selectedKeys(){
				return [
					this.extractKey(this.$route),
				];
			}
		},
		methods: {
			isNavRoute(route){
				return !!route
						&& "meta" in route
						&& "nav" in  route.meta
						&& "icon" in route.meta.nav
						&& "title" in route.meta.nav
						&& route.meta.nav;
			},
			extractKey(route){
				return route.name;
			},
			extractIcon(route){
				return route.meta.nav.icon;
			},
			extractTitle(route){
				return route.meta.nav.title;
			},
			onClick({ key }){
				if(key === this.extractKey(this.$route))
					return;
				
				this.$router.push({
					name: key,
				});
			},
		}
	}
</script>

<style lang="scss">
	@import "~@/scss/settings";
	
	.logo{
		text-align: center;
	}
	
	.menu{		
		&, & > *:first-child ~ .ant-menu-item{
			border-top-left-radius: 1em;
		}
		
		&, & > *:last-child ~ .ant-menu-item{
			border-top-right-radius: 1em;
		}
	}
	
	.nav{
		padding: 0 !important;
		height: auto !important;

		@include mq($until: md){
			&__title{
				margin: 0;
			}
		}

		@include mq($from: md){
			&__header > *{
				display: flex;
				justify-content: space-between;
				align-items: center;

				& > *{
					float: none;
				}
			}
		}
	}
</style>
