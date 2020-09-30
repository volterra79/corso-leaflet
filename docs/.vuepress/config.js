module.exports = {
  home: true,
  title: 'Corso Leaflet',
  description: 'Corso base Leaflet',
  base: '/corso-leaflet/',
  head: [
    ['script', { src: 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js' }],
    ['style', { src: 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css' }],
  ],
  plugins: ['@vuepress/back-to-top'],
  themeConfig: {
    nav: [
      {text: 'GIS3W', link: 'https://gis3w.it', target: '_blank'},
    ],
    sidebar: [
      {
        title: 'Introduzione',   // required
        path: '/introduzione/',      // optional, link of the title, which should be an absolute path and must exist
      },
      {
        title: 'Mappa',
        path: '/mappa/',
      },
      {
        title: 'Controlli',
        path: '/controlli/',
      },{
        title: 'Leaflet vs OpenLayers',
        path: '/leafletvsopenlayers/'
      },
      {
        title: 'Esempi',
        path: '/esempi/'
      }
    ]
  }
};