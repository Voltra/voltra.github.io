<i18n lang="yaml">
fr:
  homeLabel: Accueil
  projectsLabel: Projets
  cvLabel: CV
  contactLabel: Me Contacter

en:
  homeLabel: Home
  projectsLabel: Projects
  cvLabel: CV
  contactLabel: Get in touch
</i18n>

<template>
	<ALayoutHeader class="nav">
		<APageHeader class="nav__header" ref="header" :backIcon="false">
			<template #title>
				<NuxtLink :to="$route_('index')" class="nav__title">
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
	import { asSequence } from "sequency";

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
						title: this.$t('homeLabel'),
						icon: "home",
						key: "index",
					},
					{
						title: this.$t('projectsLabel'),
						icon: "project",
						key: "projets",
					},
					{
						title: this.$t('cvLabel'),
						icon: "file-text",
						key: "cv",
					},
					{
						title: this.$t('contactLabel'),
						icon: "notification",
						key: "contact",
					},
				],
			};
		},
		computed: {
			selectedKeys(){
				const routeKey = this.extractKey(this.$route);

				return asSequence(this.routes)
					.map(this.extractKey)
					.filter(key => key === routeKey)
					.toArray();
			},
		},
		methods: {
			extractKey(route){
				return route.key ?? this.getRouteBaseName(route);
			},
			onClick({ key }){
				if(key === this.extractKey(this.$route))
					return;

				this.$router.push(this.$route_(key));
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
