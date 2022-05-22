<template>
	<ALayoutHeader class="nav">
		<APageHeader class="nav__header" ref="header" :backIcon="false">
			<template #title>
				<NuxtLink to="/" class="nav__title">
					<a-avatar v-bind="avatar"/>
					Ludwig
				</NuxtLink>
			</template>

			<template #extra>
				<AMenu class="menu" mode="horizontal" @click="onClick" :selectedKeys="selectedKeys">
					<AMenuItem v-for="route in routes" :key="extractKey(route)">
						<AIcon :type="route.icon"/>
						{{ route.title }}
					</AMenuItem>
				</AMenu>
			</template>
		</APageHeader>
	</ALayoutHeader>
</template>

<script>
	export default {
		data() {
			return {
				avatar: {
					src: "/img/voltra.png",
					alt: "Logo",
					size: "large",
				},
				routes: [
					{
						title: "Accueil",
						icon: "home",
						key: "index",
					},
					{
						title: "Projets",
						icon: "project",
						key: "projets",
					},
					{
						title: "CV",
						icon: "file-text",
						key: "cv",
					},
					{
						title: "Me Contacter",
						icon: "notification",
						key: "contact",
					},
				],
			};
		},
		computed: {
			selectedKeys(){
				return [
					this.extractKey(this.$route),
				];
			},
		},
		methods: {
			extractKey(route){
				return route.key ?? route.name;
			},
			onClick({ key }){
				if(key === this.extractKey(this.$route))
					return;

				this.$router.push({
					name: key,
				});
			},
		}
	};
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
