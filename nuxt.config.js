export default {
  mode: 'universal',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ATC Online Academy',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'assets/css/plugins/icofont.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'assets/css/plugins/flaticon.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'assets/css/plugins/font-awesome.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'assets/css/plugins/animate.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'assets/css/plugins/swiper-bundle.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'assets/css/plugins/magnific-popup.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'assets/css/plugins/nice-select.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'assets/css/plugins/apexcharts.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'assets/css/plugins/jqvmap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/style.css' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com'},

    ],
    
    script: [
      { src: 'assets/js/vendor/jquery-3.5.1.min.js', type: 'text/javascript', body: true, defer: true },
      { src: 'assets/js/vendor/modernizr-3.11.2.min.js', type: 'text/javascript', body: true, defer: true },
      { src: 'assets/js/plugins/popper.min.js', type: 'text/javascript', body: true, defer: true },
      { src: 'assets/js/plugins/bootstrap.min.js', type: 'text/javascript', body: true, defer: true },
      { src: 'assets/js/plugins/swiper-bundle.min.js', type: 'text/javascript', body: true, defer: true },
      { src: 'assets/js/plugins/jquery.magnific-popup.min.js', type: 'text/javascript', body: true, defer: true },
      { src: 'assets/js/plugins/video-playlist.js', type: 'text/javascript', body: true, defer: true },
      { src: 'assets/js/plugins/jquery.nice-select.min.js', type: 'text/javascript', body: true, defer: true },
      { src: 'assets/js/plugins/ajax-contact.js', type: 'text/javascript', body: true, defer: true },
      { src: 'assets/js/plugins.min.js', type: 'text/javascript', body: true, defer: true },
      { src: 'assets/js/counter.js', type: 'text/javascript', body: true, defer: true },
      { src: 'assets/js/main.js', type: 'text/javascript', body: true, defer: true },
      { src: 'assets/js/footer.js', type: 'text/javascript', body: true, defer: true },
      { src: 'https://unpkg.com/swiper@7/swiper-bundle.min.js', type: 'text/javascript', body: true, defer: true },
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js', type: 'text/javascript', body: true, defer: true},
      
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    standalone: true,
  }
}
