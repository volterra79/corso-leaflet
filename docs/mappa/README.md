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
La funzione "factory" (vedremo più tardi che cosa è) [**L.map**](https://leafletjs.com/reference-1.7.1.html#map-example) ha due parametri:

1) Il primo può essere una **Stringa** contenente l'*id* dell'elemento (come abbiamo fatto sopra) oppure un elemento HTML.

   Nel nostro esempio abbiamo utilizzato il l'*id* 
   
   ```html
   <div id="map"></div>
   ``` 
   E' stato usato id **map** ma può essere usato qualsiasi altro valore 
   
2) Un secondo parametro (opzionale) deve essere un oggetto Javascript (chiave/valore) [**link**](https://leafletjs.com/reference-1.7.1.html#map-option)
   
   Nell'esempio sopra abbiamo passato il valore dello **zoom** e il **centro mappa** 


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




