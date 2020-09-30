---
title: Mappa 
---

## La prima mappa ##

Iniziamo con il creare l'istanza map.

``` js{1}
const map = L.map('mapid').setView([51.505, -0.09], 13);
```

dove **mapid** è l'id del div verrà disegnata la nostra mappa.

```html
<div id="mapid"></div>
```
È necessario specificare il css del contenitore per visualizzare la mappa

```css
#mapid {
  height: 400px;
}
```

<esempio1></esempio1>
