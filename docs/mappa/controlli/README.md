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

## Esempio Zoom [**link**](https://leafletjs.com/reference-1.7.1.html#control-zoom)

Come detto sopra il controllo per la gestione dello zoom della mappa è agggiunto di default nella mappa.
Di seguito vediamo un esempio per poter impostare il controllo dalla posizione di default in altro a sinista in alto a destra.


<zoom-control></zoom-control>

## Esempio Layer Switch (core di Leaflet)
Leaflet permette di avere un gestore di visualizzazione dei layer tramite il controllo [**L.control.layers**](https://mourner.github.io/Leaflet/reference.html#control-layers)

<layers-switch></layers-switch>

## Esempio utilizzando plugin esterno Easy Buttom [**link**](https://github.com/CliffCloud/Leaflet.EasyButton)

<easy-button></easy-button>