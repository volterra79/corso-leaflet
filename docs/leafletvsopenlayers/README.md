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

## Struttura del codice

In generale **Leaflet** si può considerare una libreria più di "alto livello" rispetto a Openlayers. Questo significa che in **Leaflet** molte cose sono delegate alla liberia internamente, lassciando l'utente di scrivere meno codice.

**Openlayers** invece ha una struttura più "gerarchica" e "modulare" in modo tale da scomporre le varie parti che compongono la libreria in modo tale che ognuna faccia solo un compito specifico

Lo possiamo vedere dal seguente codice:

**Leaflet**

```js{7,8}
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

```js{9,10,11,12}
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
Come possiamo vedere dal codice evidenziato sopra, **Leaflet** non ha il concetto di oggetto View e quindi viene gestito internamente dalla classe L.Map. 

**Openlayers** invece separa la Mappa dall View (che è il cuore della gestione geografica della mappa). In questo modo ogni oggetto è "specializzato" così da permettere all'utente un maggior controllo.

## Supporto di vari formati di dati GIS

**Leaflet**

Il core di Leaflet supporta solo il formato **GeoJSON**. Per gli altri formati dobbiamo ricorrere a plugins esterni come  CSV, WKT, TopoJSON, GPX e altri.

**Openlayers**

OpenLayers supporta **GeoJSON**, **KML**, **GML** e tutti i formati standard.

## Proiezioni

**Leaflet** usa come sistema di proiezione per la mappa **ESPG:3857** e tutto ciò che riguarda le coordinate in **LatLon** gradi (centro mappa, bounds, etc..).

**Openlayers** utilizza di default **EPSG:3857** per la mappa e per le coordinate he riguardano la mappa lo stesso sistema di riferimento. Inoltre a differenza di **Leaflet** le coordinate geografiche seguono lo standar GIS **Longitudine/Latitudine**.

### Proiezioni 

**Leaflet**
 
* Necessita di un plugin esterno **Proj4leaflet** per utilizzare proiezioni diverse da quelle standard

* Può utilizzare un Sistema di riferimento alla volta. Non è possibile avere Layer in un sistema di riferimento diverso da quello della mappa

* la traformazione tra coordinate di un sistema di riferimento ad un altro non è gestita dalla libreria. Dobbiamo utilizzare la libreria [**proj4s**](http://proj4js.org/) per fare conversioni
  
  ```js
  proj4('EPSG:3045','EPSG:4326', [429482.6500978756, 4552418.298212856]) // restituisce [14.159999999999998, 41.11999999999998] Longitudine/Latitudine
  ```

**Openlayers** 

* Necessita della libreria **proj4j** per aggiungere nuove proiezioni da quelle standard ma si integra alla perfezione con la liberia OL

* Possiamo utilizzare layers con diversi Sistemi di reiferimento tra loro e la libreria pensa alla riproiezione

* La trasformazione di coordinate da un sistema di riferimento all'altro è semplice utlizzando il metodo statico **ol.proj.transform(coordinates, ProiezioneCoordinate, ProiezioneFinale)**


## Handler vs Interaction

**Leaflet** ha il concetto di **Handler** come funzione (e non elemento grafico) che ha lo scopo di reagire al cambiamento di stato della mappa

**Openlayer** ha il concetto di **Interaction** che h lo stesso significato di Leaflet. Gestisce (senza elemento grafico) il cambiamento di stato della mappa
 

## Layer e Feature

Come già detto, in Leaflet tutti gli elementi della mappa sono considerato **Layer**.

In **OpenLayers** invece c'è ben chiara e netta la distizione tra oggetto **Layer** e **Feature**. Ogni classe ha i propri metodi e attributi.

## Conclusione

In conclusione non è una vera e propria risposta su cosa scelgiere tra **Leaflet** e **Openalyers**.
Come scritto sopra, se la mappa e le sue funzionalità sono semplice e dove sviluppare un'applicazione veloce, con pochi dati, Leaflet sarà la scelta giusta.
Nel caso in cui dovrete pensare ad un'applicazione più complessa, che richiede tante funzionalità, tanti layers da gestire e pensate di aggiungere delle funzionalità personalizzate, Openlayers sarà la scelta giusta.

Sotto è riportato un link aluni esempi di sviluppo fatte con **Leaflet** e sia con **Openlayers**

Un'ultima cosa. Qualsisiasi sarà la vostra scelta, una cosa sarà importante, come per tutte le librerie/frameweork ch userere. Dovete conoscere bene il **Javascript**


Questo [**link**](https://astuntechnology.github.io/osgis-ol3-leaflet/index.html) potete vede alcuni esempi scritti in OpenLayer che in Leaflet