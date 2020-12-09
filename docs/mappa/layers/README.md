# Layers

## Ordinamento dei layer nella mappa

Come in ogni software grafico e GIS l’ordine di rappresentazione dei layer è un elemento fondamentale per la corretta visualizzazione dei loro contenuti.
 
La logica è semplice:

* le basi cartografiche di sfondo (**baselayers**), come ad esempio il layer OpenStreetMap, un DTM etc .. occuperanno la posizione più bassa della pila di layers

* gli strati contenenti elementi poligonali stanno al di sotto di quelli contenenti elementi lineari (**overlay**)

* gli strati con elementi lineari stanno al di sotto di quelli contenenti elementi puntuali (**overlay**)

* gli starti puntuali stanno al di sopra di ogni layer (**overlay**)

* elementi grafici(tooltip, etc ..) al di sopra di tutto


<img src="/corso-leaflet/assets/img/layers_stack.png" title="Pila dei layer"/>


## Map Panes

Leaflet utilizza il concetto di [**Map Panes**](https://leafletjs.com/reference-1.7.1.html#map-pane) per l'ordinamento dei layers su mappa.

**Panes** non sono altro che elementi DOM che sono utlizzati per gestire l'ordine "piramidale" o di "stack" degli elementi all'interno della mappa.

E' possibile recuperare i Panes della mappa tramite i metodi **map.getPane** or **map.getPanes** oppure creare un nuovo pane tramite il metodo **map.createPane**.

Leaflet segue questo ordine:

* TileLayers e GridLayers

* Paths, polylines, GeoJSON layers, etc.. layer vettoriali

* Marker 

* Popups


[**Tutorial Leaflet**](https://leafletjs.com/examples/map-panes/)

<map-panes></map-panes>

## Layer Raster 

I layer Raster gestiti dal core di Leaflet sono:

* Tile Layer [**link**](https://leafletjs.com/reference-1.7.1.html#tilelayer)
* Layer WMS [**link**](https://leafletjs.com/reference-1.7.1.html#tilelayer-wms)
* Image Overlay [**link**](https://leafletjs.com/reference-1.7.1.html#imageoverlay)


### Esempio WMS

<wmslayer></wmslayer>

Se guardiamo bene come viene visualizzato il layer WMS, notiamo che invece di una singola immagine vengono richieste "tile" di 256px per 256px che vanno a comporre il layer WMS.

Questo è dovuto al fatto che **L.tileLayer.WMS** è una sotto classe di **L.tileLayer** e quindi verranno effettuate n richieste di **GetMap** al server composte ognuna da un'immagine di 256px 256px.

Più avanti quando andremo a parlare di Plugins, vediamo come richiedere una singola immagine invece che molte piccole immagini.

## Layer Vettoriali 

In Leaflet ogni oggetto aggiunto alla mappa viene considerato un Layer (Poligoni, Linee, etc ..);

Di seguito le diverse tipologie di geometria che un layer può avere [**link**](https://leafletjs.com/reference-1.7.1.html#path):

* **L.circle** Disegnare un cerchio. Deve essere passato come primo argomento il punto in mappa (latitudine, longitudine) 

* **L.polyline** Disegnare Linee. Deve essere passato come primo argomento un array di coordinate geografiche 
```js
 [[lat1, lon1], [lat2, lon2]]
```

* **L.polygon** Disegnare Poligoni. Deve essere passato come primo argomento un array di coordinate geografiche  (possibile costruire buchi o multipoligoni)

* **L.rectangle** Disegnare rettangoli. Deve essere passato come primo argomento un array contenete i due punti che definiscono i due punti opposti della diagonale.

ed altri ancora.

Tutti i Layers sopra accettano poi un secondo parametro che permette di gestire lo stile del layer.

### Stili

La visualizzazione grafica del layer su mappa è uno degli aspetti importanti nella creazione di una mappa di facile lettura.
Leaflet, come Openlayers, utilizza una colorazione di default (di solito blu)  per visualizzare ogni tipo di layer vettoriale su mappa. 

Per poter distingure elementi di una tipologia rispetto ad un'altra o far capire l'entità di un determinato fenomeno rispetto ad un altro è necessario ricorrere ad una personalizazzione dello stile del layer.

Come secondo argomento nella creazione del layer è possibile passare un oggetto javascript contenete varie opzioni per visualizzare il nostro layer.

L'oggetto passatto sarà utile a costruire lo stile che non è altro a seconda del layer un'estensione della classe astratta [**L.path**](https://leafletjs.com/reference-1.7.1.html#path).

<vector-style></vector-style>

Infine ogni **Layer** è un'estensione della classe base **L.Path** e quindi ne deriva che in ogni momento possiamo settare lo style attraverso la funzione *setStyle*

## Layer GeoJSON

Un altro tipo di layer vettoriale che viene spesso utilizzato nei progetti è scuramente il tipo [**GeoJSON**](https://leafletjs.com/reference-1.7.1.html#geojson)

Come primo argomento si deve passare il dato in formato **GeoJSON**. Come secondo argomento (opzionale) può essere passato un oggetto Javascript.

**Nota**: Leaflet intende i dati GeoJSON in WGS84 (latitudine, longitudine).

<layer-geojson></layer-geojson>

Un'interessante proprietà del layer GeoJSON è la possibilità di personalizzare lo style di ogni feature ad esempio in base alle proprietà della feature stessa.

Passando come secondo argomento un oggetto Javascript contenente la chiave **style** è possibile gestire lo stile. Questa deve essere una funzione che accetta come parametro la feature del geoJSON.

In questo modo possiamo andare a verificare la proprietà specifica della feature e ritornare l'oggetto style (vedi esempio sopra) che deve essere applicato a quel tipo di feature specifica. 

Infine da osservare che **L.geoJSON** accetta come primo argomento i dati in formato GeoJSON.

Se abbiamo bisogno di recuperare i dati da un servizio è necessario fare prima la chiamata al server e poi creare il layer geoJSON

```js
//Esempio con JQuery

$.getJSON("orders.json", function(data) {
    L.geoJson(data, {
      //parametri
    }).addTo(map);
}

````

## Layer UI

In Leaflet oltre ai layers standard **Vettoriali** e **Raster**, esiste una terza categoria di Layer: I **Layer UI** o "Grafici" [**link**](https://leafletjs.com/reference-1.7.1.html#marker)

Sono trattati allo stesso modo degli altri layers e rientrano in questa categoria:

* [**L.marker**](https://leafletjs.com/reference-1.7.1.html#marker) che non è altro che un layer puntuale con la caratteristica di stile del marker
   
* [**L.popup**](https://leafletjs.com/reference-1.7.1.html#popup) per la visualizzazione dei popup su mappa

* [**L.tooltip**](https://leafletjs.com/reference-1.7.1.html#tooltip) Visualizzazione di brevi testi **tooltip** sui vari layer della mappa.
                                                                       

<marker-popup-tooltip></marker-popup-tooltip>


## Concetto di Layer e Feature in Leaflet

A differenza di Openlayers e del mondo GIS, dove esitono concetti di **Layer** e **Feature** e quindi dove ogni layer può contenere una o più features, in Leaflet esite solo il concetto di i **Layer**.

* [**LayerGroup**](https://leafletjs.com/reference-1.7.1.html#layergroup) Questo permette di raggruppare più layers trattandoli come unico layer. In pratica il gruppo diventa il layer contenitore, mentre i layers saranno le features appartinenti al layer.

* [**FeatureGroup**](https://leafletjs.com/reference-1.7.1.html#featuregroup) Estende il concetto di LayerGroup 
    * il metodo **bindPopup** permette di associare il popup a tutti i layer in una volta invece che doverlo associare ad ogni singolo layer( lo stesso vale per il metodo bindTooltip)
    * Gli **Events** (Eventi) sono propagati su ogni layer appartenente al FeatureGroup, così se il gruppo ha un gestore di eventi, verrà gestito per ogni layer (include anche l'evento mouse e eventi custom).
    * Ha l'evento **layeradd** e **layerremove**

Esempio **LayerGroup** e **FeatureGroup**

<layergroup-featuregroup></layergroup-featuregroup>





