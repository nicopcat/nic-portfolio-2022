const path = require('path')

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    faviconSVG: 'img/icons/favicon.svg',
    favicon32: 'img/icons/favicon-32x32.png',
    favicon16: 'img/icons/favicon-16x16.png',
    appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
    maskIcon: 'img/icons/safari-pinned-tab.svg',
    msTileImage: 'img/icons/msapplication-icon-144x144.png'
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.join(__dirname, './src'),
        '@views': path.join(__dirname, './src/views'),
        '@components': path.join(__dirname, './src/components'),
        '@utils': path.join(__dirname, './src/utils'),
        '@assets': path.join(__dirname, './src/assets')
      }
    }
  }
})
