---
title: Proiezioni
---

## Lavorare con le Proiezioni

Prima di addentrarci sui layer cartografici prendiamoci del tempo per capire bene come funzionano i Sistemi di Riferimento in Leaflet.
Diciamo da subito che Leaflet, di per sé, conosce solo le caratteristiche dei principali SR globali:

* **L.CRS.EPSG3857** (EPSG:3857) - Spherical Mercator (usato da OSM esempio)
* **L.CRS.EPSG4326** (EPSG:4326) - WGS84 (Google map)
* **L.CRS.EPSG3395** (EPSG:3395) - World Mercator; Leggermente diverso da Spherical Mercator e usato rararmente;

Di default la mappa è impostata in **L.CRS.EPSG3857** mentre il centro della mappa deve essere impostato in **Latitudine** e **Longitudine** (gradi sempre).

Se volgiamo utilizzari Sistemi di riferimento Custorm dobbiamo ricorre ad un plugin esterno.

A differenza di **Openlayers**, il quale gestisce layer con diverse proiezioni nella stessa mappa, **Leaflet** si può lavorare con una proiezione alla volta.

## Metodi utili dell'oggetto CRS

L'oggetto CRS possiede metodi utili: 

* **latLngToPoint**(*LatLng* latlng, *Number* zoom) - ritorna un oggetto "Point"	

  Prende come input le coordinate geografiche e lo zoom, restituendo le coordinate in pixel (utile per generare la richiesta delle tile).
  
* **pointToLatLng**(*Point* point, *Number* zoom) - Ritorna un oggetto **LatLng**	

  Inverso del metodo **latLngToPoint**. Dal pixel per un dato zoom restituisce le coordinate geografiche.
  
* **project**(*LatLng* latlng) - Ritorna un oggetto	**L.Point**	

  Date le coordinate geografiche, restituisce le corrispondenti coordinate in unità del CRS (e.g. metri per EPSG:3857, per passarle ad esemipo ad un servizion WMS).
  
* **unproject**(*Point* point) - Ritorna un oggetto **L.LatLng**	

  Fa l'inverso di **project**. Date le coordinate proiettate, ritorna le corrispondenti coordinate in LatLng.
  
* **getProjectedBounds**(*Number* zoom)	- Ritorna un oggetto **L.Bounds**	

  Dato un livello di zoom ci resituisce il numero dei pixel (bound) necessari a coprire l'intera area del sistema di proiezione.
  (es. L.CRS.EPSG3857.getProjectedBounds(0) - resituisce 256 256 corrispondente ad una tile)



## Proiezioni Personalizzate

Per lavorare con projezioni diverse da quella utilizzata da Leaflet bisogna ricorre all'utilizzo di una libreria esterna [**Proj4Leflet**](http://www.liedman.net/Proj4Leaflet/)

Un articolo interessante per capire meglio tile e le proiezioni locali [**link**](http://www.liedman.net/2012/07/02/local-projections-in-a-world-of-spherical-mercator/)

Il plugin **Proj4leafleft** offre la possibilità di:

* Supportare le più comuni Sistemi di Proiezione 
* Estendere Leaflet con il supporto TMS anche per le proiezioni locali
* Utilizzare dati GeoJSON con coordinate diverse dal sistema WGS84 (lat/lon)
* Aggiungere un **Image Overlays** con i bounds impostati non solo con LatLng ma anche con coordinate proiettate

### Esempio - WMS Proiezione EPSG:3045

<proiezione-custom></proiezione-custom>

### Esempio - GeoJson in EPSG:3045

<geojson3045></geojson3045>