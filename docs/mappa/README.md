# Mappa 

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat.

## Creare una mappa ##

Iniziamo con il creare l'istanza map.

``` js{2,3}
const map = L.map('map', {
    center: [43.39706523932025, 10.86822509765625],
    zoom:10
});;
```

dove **map** è l'id del div verrà disegnata la nostra mappa.

```html
<div id="map"></div>
```
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

<esempio-mappa></esempio-mappa>

## Aggiungere un Layer OSM ##

Ora la mappa è vuota. Sarà necessario aggiunger un layer

<esempio-osm></esempio-osm>

## Map Panes [**link**](https://leafletjs.com/reference-1.7.1.html#map-pane)

Leaflet ha il concetto di Map Panes per la visualizzaione degli elementi in mappa.
**Panes** non sono altro che elementi DOM che sono utlizzazi per gestire l'ordine "piramidale" o di "stack" dei layers su mappa.



