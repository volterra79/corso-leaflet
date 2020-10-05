---
title: Mappa 
---

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

## Aggiungere un Layer ##

Ora la mappa è vuota. Saraà necessario aggiunger un layer

<esempio-osm></esempio-osm>
