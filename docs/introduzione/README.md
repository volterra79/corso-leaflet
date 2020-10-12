---
title: Introduzione 
---
## Che cosa è Leaflet.js ##

Leaflet è una libreria JavaScript open source  che permette in modo semplice di pubblicare delle mappe interattive all’interno di una pagina web che mobile.

Le sue principali doti sono: 

* Leggero 
* Versatile e facile da usare (ha delle API ben documentate) 
* Esistono molti plugins che ne estendono le funzionalità.

Inoltre il suo sito ufficiale [**leaflet.com**](https://leafletjs.com) è ricchissimo di documentazione, tutorial ed esempi pratici già realizzati.

## Preparazione ambiente di lavoro ##

Creare ul file index.html con la seguente struttura

``` html{7,11,13}
<!DOCTYPE html>
<html>
    <head>
	    <title>Corso - Leaflet</title>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/>
    </head>
    
    <body>
        <div id="mapid" style="width: 600px; height: 400px;"></div>

        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>

        <script>
            // codice nostro andrà qui
        </script>

    </body>
</html>
```

dove

CSS (style Leaflet)

``` css
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
 integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
 crossorigin=""/>
```

JS (Codice javascript)

```js
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
 integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
 crossorigin=""></script>
```
Elemento DOM (elemento contenitore della mappa)

``` html
    <div id="mapid" style="width: 600px; height: 400px;"></div>
```

