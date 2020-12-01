# WMS Plugin - Single Tile e richiesta GetFeatureInfo

[**leaflet.wms**](https://github.com/heigeo/leaflet.wms)

## Single Tile WMS (Image)

Prima di introdurre l'esempio sulla **GetFeatureInfo** andiamo a vedere come richiedere una singola immagine da un servizio WMS.

Abbiamo visto come visualizzare immagini da un server WMS quando abbiamo parlato dei layer Raster. Ma come abbiamo visto l'oggetto ** L.tileLayer.WMS** fa chiamate **GetMap** ma richiedendo immagini da 256px 256px;

Grazie al plugin possiamo richiedere una singola immagine che va a ricoprire l'intero Bounding Box della mappa.

Andiamo a vedere quali sono le principali caratteristiche offerte dal plugin:

* **Single-tile** : Come abbiamo visto è possibile richiedere una singola tile ( o immagine) che ogni volta si aggirna ad ogni "spostamento" della mappa

* Utilizzare una stessa sorgente (WMS server) per creare più layer **L.WMS.Source**

  ```js
  // Usa singola immagine di default (uses L.WMS.Overlay)
  const source = L.WMS.source("http://example.com/mapserv", {
      'transparent': true
  });
  
  const layer1 = source.getLayer("layer1");
  const layer2 = source.getLayer("layer2")
  
  map.addLayer(layer1);
  map.addLayer(layer2);
  
  // Se voglio richiedere immagini a tile (Oppure uuso  L.WMS.TileLayer)
  const sourcewmsTiled = L.WMS.source("http://example.com/mapserv", {
      'transparent': true,
      'tiled': true // specifico che deve essere tilata
  });
  sourcewmsTiled.getLayer("layer1").addTo(map);
  sourcewmsTiled.getLayer("layer2").addTo(map);
  
  ```
  Inoltre grazie al metodo **addSubLayer** e **removeSubLayer** è possibile aggiungere e togliere a nostro piacimento layers dalla sorgente (utile ad esempio nell'accensione e spegnimento dei layer nella TOC)

* Possibilità di effetuare richieste **GetFeatureInfo**
 

## GetfeatureInfo

Esempio GetFeatureInfo per un layer WMS sviluppato con plugin:

<getfeatureinfo-plugin></getfeatureinfo-plugin>

oppure fatto custom da noi:

<getfeatureinfo></getfeatureinfo>

