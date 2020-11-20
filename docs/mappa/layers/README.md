# Layers

## Ordinamento dei layer nella mappa

Come in ogni software grafico e GIS l’ordine di rappresentazione dei layer è un elemento fondamentale per la corretta visualizzazione dei loro contenuti. La logica è semplice:

* le basi cartografiche di sfondo, come ad esempio uno strato OpenStreetMap o l’ombreggiatura di un DTM, stanno nella posizione più bassa della pila di layers
* gli strati contenenti elementi poligonali stanno al di sotto di quelli contenenti elementi lineari
* gli strati con elementi lineari stanno al di sotto di quelli contenenti elementi puntuali.

<img src="/corso-leaflet/assets/img/layers_stack.png" title="Pila dei layer"/>

## Layer Raster 

I layer Raster gestiti dal core di Leaflet sono:

* Tile Layer [**link**](https://leafletjs.com/reference-1.7.1.html#tilelayer)
* Layer WMS [**link**](https://leafletjs.com/reference-1.7.1.html#tilelayer-wms)
* Image Overlay [**link**](https://leafletjs.com/reference-1.7.1.html#imageoverlay)

Un layer raster lo abbiamo gà utilizzato nella creazione della mappa e nell'aggiunta del primo layer OSM

### Esempio WMS

<wmslayer></wmslayer>

## Layer Vettoriali

In Leaflet ogni oggetto aggiunto alla mappa viene considerato un Layer (Poligoni, Cerchi, Popup etc ..);
Di seguito le diverse tipologie di geometria che un layer può avere:

* **L.circle** Disegnare un cerchio. Deve essere passato come primo argomento il punto in mappa (lat, lon) 

* **L.polyline** Disegnare Linee. Deve essere passato come primo argomento un array di coordinate

* **L.polygon** Disegnare Poligoni. Deve essere passato come primo argomento un array di 

* **L.rectangle** Disegnare rettangoli. Deve essere passato come primo argomento un array contenete i due punti che definiscono i due punti opposti della diagonale.

ed altri che al momento non interessano.

Tutti i Layers sopra accettano poi un secondo parametro un oggetto contenente le opzione sullo stile del layer

### Stili

La visualizzazione grafica del layer su mappa è uno degli aspetti importanti nella creazione di una mappa di facile lettura.
Leafleft, come Openlayers, utilizza una colorazione di default (di solito blu)  per visualizzare ogni tipologia di layer vettoriale su mappa. 
Per poter distingure elementi di una tipologia rispetto ad un'altra o far capire l'entità di un determinato fenomeno rispetto ad un altro è necessario ricorrere ad una personalizazzione dello stile del layer.
Come secondo argomento nella creazione del layer è possibile passare un oggetto javascript contenete varie opzioni per visualizzare il nostro layer.
L'oggetto passatto sarà utile a costruire l'oggetto stile che non è altro a seconda del layer un'estensione della classe astratta [**L.path**](https://leafletjs.com/reference-1.7.1.html#path).

Inoltre ogni Layer è un'estensione della classe base **L.path** e quindi ne deriva che in ogni momento possiamo settare lo style attraverso la funzione *setStyle*

## Layer GeoJSON

Un'altra tipologia di layer vettoriale che ricorre nei progetti è scuramente il tipo [**GeoJSON**](https://leafletjs.com/reference-1.7.1.html#geojson)
Come primo argomento si deve passare il dato in formato **geoJSON**. Come secondo argomento (opzionale) può essere passato un oggetto Javascript.

<layer-geojson></layer-geojson>

Un'interessante proprietà del layer GeoJSON è la possibilità di personalizzare lo style di ogni feature ad esempio in base alle proprietà della feature stessa.
Passando il secondo argomento quando si costruisce il layer, e come chiavae passiamo **style**, questa deve essere una funzione che accetta come parametro la feature del geoJSON.
In questo modo possiamo andare a verificare la proprietà specifica della feature e ritornare l'oggetto style (vedi sopra) che deve essere aplicato a quel tipo di feature specifica.  


## Layer UI

In Leaflet altro ai layers standard Vettoriali e Raster, esiste una terza categoria di Layer: I Layer UI o "Grafici" [**link**](https://leafletjs.com/reference-1.7.1.html#marker)
Sono trattati allo stesso mdo degli altr Layers e rientrano in questa categoria:

* **L.marker** che non è altro che un layer puntuale con la caratteristica ddi stile del marker (Esempio: ```js L.marker([50.5, 30.5]).addTo(map);```)
* **L.popup** per la visualizzazione dei popup su mappa
* **L.tooltip** Visualizzazione dei tooltip (o informazioni rapide)

## Concetto di Layer e Feature in Leaflet

A differenza di Openlayers e del mondo GIS, dove esitono concetti di **Layer** e **Feature** e quindi dove ogni layer può contenere una o più features, in Leaflet esite solo il concetto di i **Layer**.

* [**LayerGroup**](https://leafletjs.com/reference-1.7.1.html#layergroup) Questo permette di raggruppare più layers trattandoli come unico layer. In pratica il gruppo diventa il layer contenitore, mentre i layers saranno le features appartinenti al layer.

* [**FeatureGroup**](https://leafletjs.com/reference-1.7.1.html#featuregroup) Estende il concetto di LayerGroup 
    * il metodo **bindPopup** permette di associare il popup a tutti i layer in una volta invece che doverlo associare ad ogni singolo layer( lo stesso vale per il metodo bindTooltip)
    * Gli **Events** (Eventi) sono propagati su ogni layer appartenente al FeatureGroup, così se il gruppo ha un gestore di eventi, verrà gestito per ogni layer (include anche l'evento mouse e eventi custom).
    * Ha l'evento **layeradd** e **layerremove**

Esempio **LayerGroup** e **FeatureGroup**

<layergroup-featuregroup></layergroup-featuregroup>





