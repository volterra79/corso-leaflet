# Layers

## Ordinamento dei layer nella mappa

Come in ogni software grafico e GIS l’ordine di rappresentazione dei layer è un elemento fondamentale per la corretta visualizzazione dei loro contenuti. La logica è semplice:

* le basi cartografiche di sfondo, come ad esempio uno strato OpenStreetMap o l’ombreggiatura di un DTM, stanno nella posizione più bassa della pila di layers
* gli strati contenenti elementi poligonali stanno al di sotto di quelli contenenti elementi lineari
* gli strati con elementi lineari stanno al di sotto di quelli contenenti elementi puntuali.

<img src="/assets/img/layers_stack.png" title="Pila dei layer"/>

## Layer Raster

### Esempio WMS

<wmslayer></wmslayer>


## Layer Vettoriali

### Esempio WFS

<wfslayer></wfslayer>

