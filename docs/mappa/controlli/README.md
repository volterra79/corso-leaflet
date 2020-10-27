---
title: Controlli 
---

## Che cosa è un controllo

L.Control è un elemento HTML Element che si posiziona all'interno del contenitore div della mappa. Tramite l'interazione con l'elemento dom creato è possibile interagire con la mappa.

Tutti i controllo derivano dalla classe padre [**L.Control**](https://leafletjs.com/reference-1.7.1.html#control) che ha come optione la posizione dove verrà inserito sopra la mappa:
I valori possibili sono:

* 'topleft',
* 'topright',
* 'bottomleft' 
* 'bottomright'

Nella creazione della mappa sono aggiunti di default il controllo di Zoom(+/-) e il controllo Attribution:

Per poterli disattivare e quindi non aver nessun controllo è possibile farlo passando al momento della crazione della mappa l'opzione zoomControl: false e/o attributionControl: false

## Controlli nel core di Leaflet

Leaflet offre alcuni controlli di base da far visualizzare sulla mappa e interagire/visualizzare informazioni da essa:

* **Control.Zoom**: Controllo base con i classici due bottoni **+/-** (zoom in and zoom out) [**link**](https://leafletjs.com/reference-1.7.1.html#control-zoom)
* **Control.Attribution**: Controllo che ti permette di visualizzare informazioni relative a chi appartengono i layers sotto forma di un testo sulla mappa [**link**](https://leafletjs.com/reference-1.7.1.html#control-attribution)
* **Control.Layers**: Controllo base che permette di "accendere/spengere" differenti tipi di layers dai base layers che quelli in overlay sulla mappa [**link**](https://leafletjs.com/reference-1.7.1.html#control-layers) 
* **Control.Scale**: Controllo che permette di visualizzare la scala corrente in (m/km) o in (mi/ft) [**link**](https://leafletjs.com/reference-1.7.1.html#control-scale)
                               
## Esempio Zoom [**link**](https://leafletjs.com/reference-1.7.1.html#control-zoom)

Come detto sopra il controllo per la gestione dello zoom della mappa è agggiunto di default nella mappa.
Di seguito vediamo un esempio per poter impostare il controllo dalla posizione di default in altro a sinista in alto a destra.

<zoom-control></zoom-control>

## Esempio Layer Switch (core di Leaflet)
Leaflet permette di avere un gestore di visualizzazione dei layer tramite il controllo [**L.control.layers**](https://mourner.github.io/Leaflet/reference.html#control-layers)

<layers-switch></layers-switch>

## Esempio utilizzando plugin esterno Easy Buttom [**link**](https://github.com/CliffCloud/Leaflet.EasyButton)

<easy-button></easy-button>