---
title: Controlli 
---

## Che cosa è un controllo

Un controllo (**L.Control**) è un elemento HTML, quindi grafico, che si posiziona all'interno del contenitore della mappa.
 
Tramite l'interazione con il controllo creato è possibile interagire con la mappa.

Tutti i controllo derivano dalla classe padre [**L.Control**](https://leafletjs.com/reference-1.7.1.html#control) che ha come opzione la posizione dove verrà inserito sopra la mappa:
I valori possibili sono:

* **'topleft'**,
* **'topright'**,
* **'bottomleft'** 
* **'bottomright'**

Nella creazione della mappa sono aggiunti di default il controllo di **Zoom(+/-)** e il controllo **Attribution**.

Per poterli disattivare e quindi non aver nessun controllo è possibile farlo passando al momento della crazione della mappa l'opzione **zoomControl: false** e/o **attributionControl: false**.

## Controlli di base Leaflet

Leaflet offre alcuni controlli di base da far visualizzare sulla mappa e interagire/visualizzare informazioni da essa:

* **Control.Zoom**: Controllo base con i classici due bottoni **+/-** (zoom in and zoom out) [**link**](https://leafletjs.com/reference-1.7.1.html#control-zoom)
* **Control.Attribution**: Controllo che ti permette di visualizzare informazioni relative a chi appartengono i layers sotto forma di un testo sulla mappa [**link**](https://leafletjs.com/reference-1.7.1.html#control-attribution)
* **Control.Layers**: Controllo base che permette di "accendere/spengere" differenti tipi di layers dai base layers che quelli in overlay sulla mappa [**link**](https://leafletjs.com/reference-1.7.1.html#control-layers) 
* **Control.Scale**: Controllo che permette di visualizzare la scala corrente in (m/km) o in (mi/ft) [**link**](https://leafletjs.com/reference-1.7.1.html#control-scale)
                               
## Esempio Zoom [**link**](https://leafletjs.com/reference-1.7.1.html#control-zoom)

Come detto sopra il controllo per la gestione dello zoom è agggiunto di default nella mappa.

Di seguito vediamo un esempio per poter impostare il controllo dalla posizione di default che è in alto a sinista in posizione in alto a destra.

<zoom-control></zoom-control>

## Esempio Layer Switch (core di Leaflet)
Leaflet permette di avere un gestore di visualizzazione dei layer tramite il controllo [**L.control.layers**](https://mourner.github.io/Leaflet/reference.html#control-layers)

<layers-switch></layers-switch>

## Esempio di creazione di un controllo personalizzato

Se leggiamo bene la documentazione riferita alla classe base **L.Control** leggiamo:

Ogni controllo **estende** (poi vedremo meglio quando affronteremo l'argomento plugin) la classe base  **L.Control** e deve implementare  i seguenti metodi:

* **onAdd(map)**: metodo che accetta come parametro l'nstanza mappa  e deve ritornare l'elemento DOM relativo al controllo.
 
  Ricevendo come parametro l'instanza mappa è possibile associare diversi comportamenti a seconda degli eventi che la mappa scatena.
 
  Questo metodo viene chiamato quando si esegue il comando **control.addTo(map)** o **map.addControl(control)**

* **onRemove(map)**: Metodo opzionale. Deve contenere il codice che "ripulisce" tutti i listeners aggiunti nall'interno del metodo **onAdd**.
 
  Viene chiamato quando si esegue la funzione **control.remove()** o **map.removeControl(controllo)**


<control-showcenter></control-showcenter>

## Esempio utilizzando plugin esterno Easy Buttom [**link**](https://github.com/CliffCloud/Leaflet.EasyButton)

Se non vogliamo costruire noi un controllo personalizzato andando ad estendere la classe base **L.Control**, possiamo utilizzare il plugin **Easy Button**

<easy-button></easy-button>