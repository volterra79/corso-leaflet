module.exports = {
  home: true,
  title: 'Corso Leaflet',
  base: '/corso-leaflet/',
  head: [
    ['script', { src: 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js' }],
    ['style', { src: 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.css' }],
  ],
  plugins: [
    'demo-block'
  ],
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
      },
      {
        title: 'Esempi',
        path: '/esempi/'
      },
      {
        title: 'Leaflet vs OpenLayers',
        path: '/leafletvsopenlayers/'
      }
    ]
  }
};