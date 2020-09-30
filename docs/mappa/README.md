---
title: Mappa 
---

## La prima mappa ##

Iniziamo con il creare l'istanza map.

``` js{1}
const map = L.map('map').setView([51.505, -0.09], 13);
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

<esempio1></esempio1>
