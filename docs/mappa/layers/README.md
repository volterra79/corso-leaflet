# Layers

## Ordinamento dei layer nella mappa

Come in ogni software grafico e GIS l’ordine di rappresentazione dei layer è un elemento fondamentale per la corretta visualizzazione dei loro contenuti. La logica è semplice:

* le basi cartografiche di sfondo, come ad esempio uno strato OpenStreetMap o l’ombreggiatura di un DTM, stanno nella posizione più bassa della pila di layers
* gli strati contenenti elementi poligonali stanno al di sotto di quelli contenenti elementi lineari
* gli strati con elementi lineari stanno al di sotto di quelli contenenti elementi puntuali.

<img src="/assets/img/layers_stack.png" title="Pila dei layer"/>

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

A differenza di Openlayers e del mondo GIS, dove esitono concetti come Layer e Feature e quindi dove ogni layer può contenere più features, in Leaflet esistono i layers

* [**LayerGroup**](https://leafletjs.com/reference-1.7.1.html#layergroup) Questo permette di raggruppare più layers trattandoli come unico layer
* [**FeatureGroup**](https://leafletjs.com/reference-1.7.1.html#featuregroup) Estende il concetto di LayerGroup 
    * il metodo **bindPopup** permette di associare il popup a tutti i layer in una volta invece che doverlo associare ad ogni singolo layer( lo stesso vale per il metodo bindTooltip)
    * Gli Events (Eventi) sono propagati su ogni layer appartenente al FeatureGroup, così se il gruppo ha un gestore di eventi, verrà gestito per ogni layer (include anche l'evento mouse e eventi custom).
    * Ha l'evento layeradd e layerremove

LayerGroup
FeatureGroup

<layergroup-featuregroup></layergroup-featuregroup>

Un'altra tipologia di layer vettoriale che ricorre nei progetti è scuramente il tipo [**GeoJSON**](https://leafletjs.com/reference-1.7.1.html#geojson)

Esempio


## Layer GeoJSON

<layer-geojson></layer-geojson>