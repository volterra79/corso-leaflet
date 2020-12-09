# Proiezioni Personalizzate

Per lavorare con projezioni diverse da quella utilizzata da Leaflet bisogna ricorre all'utilizzo del plugin [**Proj4Leflet**](http://www.liedman.net/Proj4Leaflet/)

Un articolo interessante per capire meglio tile e le proiezioni locali [**link**](http://www.liedman.net/2012/07/02/local-projections-in-a-world-of-spherical-mercator/)

Il plugin **Proj4leafleft** offre la possibilità di:

* Supportare le più comuni Sistemi di Proiezione 

* Estendere Leaflet con il supporto TMS anche per le proiezioni locali

* Utilizzare dati GeoJSON con coordinate diverse dal sistema WGS84 (lat/lon)

* Aggiungere un **Image Overlays** con i Bounds impostati non solo con LatLng ma anche con coordinate proiettate

### Esempio - WMS Proiezione EPSG:3045

<proiezione-custom></proiezione-custom>

### Esempio - GeoJson in EPSG:3045

<geojson3045></geojson3045>