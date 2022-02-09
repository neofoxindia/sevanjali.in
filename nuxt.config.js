export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: false,

    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'sevanjali',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'},
            {hid: 'description', name: 'description', content: ''},
            {name: 'format-detection', content: 'telephone=no'},
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/images/loader.png'},
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Open+Sans:wght@300;400&family=Oswald:wght@300;400&display=swap'
            },
            {rel: 'stylesheet', href: '/css/bootstrap.min.css'},
            {rel: 'stylesheet', href: '/css/style.css'},
        ],
        script: [
            {src: '/js/jquery.min.js'},
            {src: '/js/bootstrap.bundle.min.js'},
            // {src: '/js/swiper.min.js'},
            // {src: '/js/progresscircle.js'},
            // {src: '/js/main.js'},
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],
    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},
    router: {},
    generate: {
        dir: 'docs'
    }
}
