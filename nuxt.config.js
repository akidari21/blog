export default {
  // mode: "universal",
  target: "static",
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: "ko",
    },
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
      {
        name: "google-site-verification",
        content: "uLfuzR38v1pQBpsmrw2X9sBPzeZOHJjMg-5FKyMf1Gw",
      },
    ],
    link: [
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/favicon/apple-touch-icon.png",
      },
      { rel: "icon", type: "image/x-icon", href: "/favicon/favicon-32x32.png" },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css",
        type: "text/css",
      },
      {
        rel: "stylesheet",
        href:
          "https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400&family=Rajdhani:wght@500&display=swap",
        type: "text/css",
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/flexboxgrid/6.3.1/flexboxgrid.min.css",
        type: "text/css",
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["@/assets/css/pile-of-bones.css", "@/assets/css/custom.css"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/vue-moment"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    "@nuxtjs/dotenv",
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-179863218-1",
        debug: {
          enabled: true,
          sendHitTask: true,
        },
      },
    ],
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxt/content", "@nuxtjs/sitemap"],
  // sitemap
  sitemap: {
    hostname: "https://fuckinfakenews.netlify.app/",
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },
  generate: {
    fallback: "404.html",
  },
};
