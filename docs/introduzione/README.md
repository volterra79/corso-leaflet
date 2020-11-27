---
title: Introduzione 
---
## Che cosa è Leaflet.js ##

Leaflet è una libreria JavaScript open source  che permette in modo semplice di pubblicare mappe interattive all’interno di una pagina web.

Le sue principali doti sono: 

* Leggero 
* Versatile e facile da usare (ha una buona documentazione).
* Orientato più sulla parte di grafica che sulla parte funzionale avanzata.
* Esistono molti plugins che ne estendono le funzionalità.

Il suo sito ufficiale [**leaflet.com**](https://leafletjs.com) contiene la documentazione, tutorial ed esempi pratici da cui prendere spunto per inziare a sviluppare.

Il suo motto è:
 
 **"Leaflet doesn't try to do everything for everyone. Instead it focuses on making the basic things work perfectly."**

## Preparazione ambiente di lavoro ##

Creare il file index.html con la seguente struttura

``` html{7-19,21,24,26}
<!DOCTYPE html>
<html>
    <head>
	    <title>Corso - Leaflet</title>
	    <meta charset="utf-8" />
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            html, body { 
              height: 100%;
            }
           
            body { 
              margin:0;
            }
            
            #map { 
             height:100%;
            }
        </style>    

        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/>
    </head>
    <body>
        <div id="map"></div>

        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
       
        <script>
            // codice nostro andrà qui
        </script>
    </body>
</html>
```

dove

**CSS** Stile

Stile per poter visulizzare la mappa all'interno della nostra pagina (da cambiare a seconda delle esigenze)

```css
 <style>
    html, body { 
        height: 100%;
    }
           
    body { 
        margin:0;
    }    
       
    #map { 
        height:100%;
    }
  </style>    
```
Style css di Leafleft

``` css
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
 integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
 crossorigin=""/>
```

**JS** Javascript

```js
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
 integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
 crossorigin=""></script>
```

**Elemento DOM** (elemento DOM che Leaflef userà per creare il componente mappa)

``` html
    <div id="map"></div>
```
