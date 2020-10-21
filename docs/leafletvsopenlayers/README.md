---
title: Leaflet vs Openlayers 
---
## Qual'è la scelta più veloce per inziare a sviluppare

**Leaflet**

Se abbiamo bisogno di costruire un'applicazione WebGis che richeiede funzionalità di base **Leaflet** è la scelta giusta.
**Leaflet**  permette di visualizzare diversi tipi di layer, zoomare e muoversi nella mappa e le sue API sono semplici da capire e facili da usare.
Una volta però che si decide di andare ***oltre*** alle funzioni base, dobbiamo ricorrere ai **Plugins** e qui le cose si complicano richiedendo anche di creare delle funzionalità personalizzate che  non sempre sono facili da sviluppare.

**Openlayers**

Per applicazione WebGis che necessitano di funzionalità avanzate( esempio lavorare con proiezioni diverse da quelle standard EPSG:4326, EPSG:3857) la scelta cadrà su **Openlayers**.
OpenLayers ha una vasta e complessa API che permette di sviluppare tutte le cose che si possono fare con Leaflet più altre di tipo avanzato.
Un sempio su tutti: se la tua applicazione necessita di supportare layers con diverse proiezioni,  **OpenLayers** te o permette in modo semplice.
Una cosa da dire è che OL, avendo un'API complessa, la curva di apprendimento per prendere dimsitechezza conil codice sarà più lenta, ma sicuramente permetterà di costruire applicazione più complesse e robuste.
Altra cosa che può mettere in confusione se uno ha già esperienza con altre librerie di gestione mappe, che le coordinate in OpenLayers non sono in formato LatLon, ma in LonLat che è il modo corretto dal punto di vista GIS.

## Supporto di vari formati di dati GIS

**Leaflet**

Il core di Leaflet supporta soloil formato GeoJSON. Per gli altri formati dobbiamo ricorrere a plugins esterni come  CSV, WKT, TopoJSON, GPX e altri.

**Openlayers**

OpenLayers supporta GeoJSON, GeoRSS, KML, GML, e tutti i dati standard  gli standard OGC come WMS o WFS.

## Esempio di codice

Creare una mappa con OSM

**Leaflet**

```js

const center = [41.122132, 14.167849]; // in EPSG:4326 
const map = new ol.Map({
    target: 'map',
    layers: [
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {foo: 'bar', attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>'})
    ],
    center,
    zoom: 6
});

```

**Openlayers**

```js
const center = [41.122132, 14.167849]; // in EPSG:4326 
const map = new ol.Map({
    target: 'map',
    layers: [
      new ol.layer.Tile({
        source: new ol.source.OSM()
      })
    ],
    view: new ol.View({
      center: ol.proj.transform(center, 'EPSG:4326', 'EPSG:3857'),
      zoom: 6
    })
});
```

Since Leaflet is a higher level API than OpenLayers 3, it usually takes less JavaScript code to get it up and running. Once you want to deviate from the standard functionality that Leaflet provides, however, it is likely that you will end up writing a lot of code unless there is a plug-in that meets your exact needs. On the other hand, OpenLayers 3 is a lower level API which requires more JavaScript coding to initialize and set up the map. This can be convenient when you have customized and complex requirements, as the API allows more control over the map and your data.

## Conclusione

In conclusione non è una vera e propria risposta su cosa scelgiere tra **Leaflet** e **Openalyers**.
Come scritto sopra, se la mappa e le sue funzionalità sono semplice e dove sviluppare un'applicazione veloce, con pochi dati, Leaflet sarà la scelta giusta.
Nel caso in cui dovrete pensare ad un'applicazione più complessa, che richiede tante funzionalità, tanti layers da gestire e pensate di aggiungere delle funzionalità personalizzate, Openlayers sarà la scelta giusta.

Sotto è riportato un link aluni esempi di sviluppo fatte con **Leaflet** e sia con **Openlayers**

Un'ultima cosa. Qualsisiasi sarà la vostra scelta, una cosa sarà importante, come per tutte le librerie/frameweork ch userere. Dovete conoscere bene il **Javascript**


Questo [**link**](https://astuntechnology.github.io/osgis-ol3-leaflet/index.html) potete vede alcuni esempi scritti in OL che in Leaflet