# Mappa 

Una volta impostato la struttura base, iniziamo a lavorare con la libreria **Leaflet** creando l'elemento base: la **MAPPA**.

## Creare una mappa ##

Iniziamo con il creare l'oggetto (istanza) map.

``` js{2,3}
const map = L.map('map', {
    center: [43.39706523932025, 10.86822509765625],
    zoom:10
});;
```
La funzione "factory" (vedremo più tardi che cosa è) [**L.map**](https://leafletjs.com/reference-1.7.1.html#map-example) accetta due parametri:

1) Il primo può essere una **Stringa** contenente l'*id* dell'elemento (come abbiamo fatto sopra) oppure un elemento HTML.

   Nel nostro esempio abbiamo utilizzato il l'*id* 
   
   ```html
   <div id="map"></div>
   ``` 
   E' stato usato id **map** ma può essere usato qualsiasi altro valore 
   
2) Un secondo parametro (opzionale) deve essere un oggetto Javascript (chiave/valore) [**link**](https://leafletjs.com/reference-1.7.1.html#map-option)
   
   Nell'esempio sopra abbiamo passato il valore dello **zoom** e il **centro mappa** (questo necessariamente in latitudine e longitudine)


È necessario specificare il css del contenitore per visualizzare la mappa

```css
html { 
  height: 100%;
}

body { 
  height: 100%;
  margin:0;
}

#map { 
 height:100%;
}

```

Ecco il risultato:

<esempio-mappa></esempio-mappa>

## Aggiungere il primo Layer - OSM ##

Nell'esempio precedente abbiamo creato il contentiore "mappa" vuoto. Ora è necessario aggiungere un layer per poter visulizzare le informazioni geografiche all'interno della mappa. 

Aggiungiamo alla mappa il layer di OpenStreetmap (OSM)

<esempio-osm></esempio-osm>

## Metodi utili dell'oggetto mappa

Come si può vedere dalla documentazione [**link**](https://leafletjs.com/reference-1.7.1.html#map-methods-for-modifying-map-state), l'oggetto mappa possiede una serie di metodi (funzioni) che possono essere utili per il cambio di "Stato" della mappa che ottene informazioni utili.

I principali metodi sono:

* **setView**(*LatLng* center, *Number* zoom, *Zoom/pan options* options?)	- Ritorna l'oggetto mappa	

  Serve per settare il centro e lo zoom della mappa, con possibilità di settare delle opzioni di animazione.

* **setZoom**(*Number* zoom, *Zoom/pan options* options?) - Ritorna	l'oggetto mappa	

  Setta lo zoom della mappa

* **zoomIn**(*Number* delta?, *Zoom options* options?) - Ritorna l'oggetto mappa	

  Incrementa lo zoom della mappa di un delta (zoomDelta by default).

* **zoomOut**(*Number* delta?, *Zoom options* options?)	- Ritorna l'oggetto mappa	

  Decrementa lo zoom della mappa di un delta (zoomDelta by default).

* **fitBounds**(*LatLngBounds* bounds, *fitBounds options* options?) - Ritorna l'oggetto mappa		

  Sets a map view that contains the given geographical bounds with the maximum zoom level possible.

* **getCenter()** - Ritorna	l'ogetto **L.LatLng**	

  Ritorna il centro della mappa

* **getZoom()**	- Ritorna un intero	

  Ritorna l'attuale livello di zoom della mappa

* **getBounds()**- Ritorna l'ogetto **L.LatLngBounds**	

  Ritorna il bound in coordinate geografiche dell'attuale mappa (utile per fare poi le richieste ad esempio di **L.imageOverlay** che necessita il bounds)

* **getSize()** - Ritorna un oggetto **L.Point**	

  Ritorna il size (larghezza e altezza in pixel) dell'elemento DOM  contenente la mappa 
  
* **project**(*LatLng* latlng, *Number* zoom) - Restituisce un **L.Point**	

  restituisce la coordinate del pixel relativa al CRS di origine.

* **unproject**(*Point* point, *Number* zoom) - Restituisce	l'oggetto **L.LatLng**	

  Inverso del metodo **project**

* **distance**(*LatLng* latlng1, *LatLng* latlng2)	- Restituisce un numero	

  Ritorna la distanza tra due punti geografici in accordo al CRS della mappa. di Default questa misura è data in metri.
  
* **addControl**(*Control* control) - Restituisce la mappa
  
  Aggiunge alla mappa il controllo
  
* **addLayer**(*Layer* layer) - Ritorna la mappa
	
    Aggiunge il layer alla mappa
    
* **eachLayer**(*Function* fn, *Object* context?) - Ritorna l'oggetto mappa
	
    Itera su tutti i layer dalla mappa, Opzionalmento può essere passato il contesto della funzione (il this)
    
    ```js
      map.eachLayer(function(layer){
        layer.bindPopup('Hello');
      });
    ```