const url = (uri = "") => `${process.env.NUXT_ENV_BASE_URL}${uri}`;
const logo = url(`/${process.env.NUXT_ENV_OG_IMAGE_URI}`);

const description = "Site officiel de Ludwig GUERIN, aka Voltra the dev";

export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: "static",
	loading: "~/components/Loader.vue",
	loadingIndicator: "~/components/Loader.vue",
	router: {
		mode: "hash",
	},

	i18n: {
		vueI18nLoader: true,
		vueI18n: {
			fallbackLocale: "fr",
		},
		langDir: "~/lang/",
		strategy: "prefix_except_default",
		detectBrowserLanguage: {
			useCookie: true,
			cookieKey: "i18n_redirected",
			redirectOn: "root",
		},
		defaultLocale: "fr",
		locales: [
			{
				name: "English",
				code: "en",
				iso: "en-US",
				file: "en.json",
			},
			{
				name: "Français",
				code: "fr",
				iso: "fr-FR",
				file: "fr.json",
				isCatchallLocale: true,
			},
		],
	},

	sitemap: {
		hostname: process.env.NUXT_ENV_BASE_URL,
	},

	pwa: {
		meta: {
			theme_color: "#0087B3",
		},
		manifest: {
			name: process.env.NUXT_ENV_PROJECT_NAME,
			short_name: process.env.NUXT_ENV_PROJECT_NAME,
			description: process.env.NUXT_ENV_PROJECT_DESCRIPTION,
			publicPath: process.env.NUXT_ENV_BASE_URL,
			background_color: "#f0f2f5",
		},
		workbox: {
			enabled: true,
		},
	},

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		titleTemplate: "%s | Ludwig GUERIN",
		htmlAttrs: {
			lang: "en",
			prefix: "og: http://ogp.me/ns#",
		},
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{ hid: "description", name: "description", content: "" },
			{ name: "format-detection", content: "telephone=no" },

			//static
			{
				property: "og:type",
				content: "Website",
			},
			{
				property: "og:site_name",
				content: "Ludwig GUERIN",
			},
			{
				property: "og:image",
				content: logo,
			},
			{
				property: "twitter:card",
				content: "summary",
			},
			{
				property: "twitter:image",
				content: logo,
			},

			//dynamic
			{
				hid: "og:title",
				property: "og:title",
				content: "Ludwig GUERIN",
				template: "%s",
			},
			{
				hid: "og:description",
				property: "og:description",
				content: description,
			},
			{
				hid: "description",
				property: "og:description",
				content: description,
			},
			{
				hid: "keywords",
				property: "keywords",
				content: "",
			},
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
		],
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		// { src: "ant-design-vue/dist/antd.less", lang: "less" },
		"~/scss/loader.css",
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
		"@/plugins/antd-ui",
		"@/plugins/jsonld",
		{
			src: "@/plugins/gdpr",
			mode: "client",
			ssr: false,
		},
		"@/plugins/konami",
		// {
		// 	src: "@/plugins/floating-window",
		// 	mode: "client",
		// 	ssr: false,
		// },
		"@/plugins/clipboard",
		"@/plugins/route",
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		"@nuxtjs/i18n",
		"@nuxtjs/sitemap",
		"@nuxtjs/pwa",
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
		loaders: {
			less: {
				lessOptions: {
					javascriptEnabled: true,
				},
			},
		},
	},
};
