const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const DotEnv = require("dotenv-webpack");
const {
  asSequence
} = require("sequency");

/**
 * Retrieve the value of an environment variable
 * @param {string} name - The name of the environment variable to retrieve
 * @returns {string}
 */
const env = name => process.env[name];

/**
 * Transform a relative URI to an absolute URL in the current working directory
 * @param {string} uri - The relative URI
 * @returns {string}
 */
const here = (uri = "") => path.resolve(__dirname, uri);

const primary = env("PRIMARY_COLOR");
// const favicon = "favicon.ico";
const projectName = env("PROJECT_NAME");
const baseURL = env("BASE_URL");

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  generate: {
    dir: "docs",
    subFolders: false,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'voltra.github.io',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/clipboard',
    '@/plugins/localStorage',
    '@/plugins/json',
    { src: "@/plugins/gdpr", mode: "client", },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
  ],

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      name: env("PWA_NAME"),
      lang: "fr",
      themeColor: primary,
      msTileColor: primary,
      manifestOptions: {
        start_url: "/",
        short_name: projectName,
        display: "standalone",
        orientation: "portrait",
        background_color: primary,
      },
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: [
      "vue-gdpr-guard",
    ],
  },
};
