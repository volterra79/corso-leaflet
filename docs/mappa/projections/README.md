---
title: Proiezioni
---

## Lavorare con le Proiezioni

**Leaflet** gestisce solo i principali Sistemi di Proiezione:

* **L.CRS.EPSG3857** (EPSG:3857) - Spherical Mercator (utilizzata di default dalla mappa se non specificato diversamente)

* **L.CRS.EPSG4326** (EPSG:4326) - WGS84 (Google Map)

* **L.CRS.EPSG3395** (EPSG:3395) - World Mercator; Leggermente diverso da Spherical Mercator e usato raramente;


La Mappa di default utilizza la **EPSG:3857** ma il centro della mappa deve essere impostato in **Latitudine** e **Longitudine** (coordinate geografiche).

Se vogliamo utilizzare Sistemi di riferimento diversi da quelli previsti dal core di **Leaflet** dobbiamo ricorre ad un plugin esterno.

A differenza di **Openlayers**, il quale gestisce layer con diverse proiezioni nella stessa mappa, con **Leaflet** si può lavorare con una proiezione alla volta (o quasi).

## Metodi utili dell'oggetto CRS

L'oggetto**L.CRS** possiede metodi utili: 

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

Quando affronteremo l'argomento plugins vedremo come lavorare con le Proiezioni Personalizzate.