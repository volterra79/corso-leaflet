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
      {
        text: 'GIS3W', link: 'https://gis3w.it', target: '_blank'
      },
    ],
    sidebar: [
      {
        title: 'Introduzione',
        path: '/introduzione/'
      },
      {
        title: 'Mappa',
        path: '/mappa/',
        collapsable: false,
        children: [
          '/mappa/layers/',
          '/mappa/projections/',
          '/mappa/controlli/',
          '/mappa/eventi/',
          '/mappa/popup/'
         ]
      },
      {
        title: 'Plugins',
        path: '/plugins/',
        collapsable: false,
        children: [
          '/plugins/editing/',
          '/plugins/wfst/'
        ]
      },
      {
        title: 'Leaflet vs OpenLayers',
        path: '/leafletvsopenlayers/'
      },
      {
        title: 'Esempi',
        path: '/esempi/',
        collapsable: false
      },
    ]
  }
};