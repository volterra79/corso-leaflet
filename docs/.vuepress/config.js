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
      {text: 'Introduzione', link: '/introduzione/'},
      {text: 'Mappa', link: '/mappa/'},
      {text: 'Controlli', link: '/controlli/'},
      {text: 'Gis3w', link: 'https://gis3w.it'},
    ],
    sidebar: 'auto'
  }
};