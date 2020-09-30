---
title: Introduzione 
---
## Che cosa è Leaflet.js ##

Le interazioni sono oggetti che permettono di gestire gli eventi generati dal browser, ad es. al click del mouse sulla mappa o al movimento della rotella del mouse, e di trasformarli in azioni eseguite sulla mappa.
Di base, se non definito altrimenti, ad una mappa vengono associate le seguenti interazioni:

* pan della mappa con il tasto sinistro del mouse premuto e il trascinamento del mouse, traslazione/rotazione con SHIFT+ALT premuto e movimento mouse 
* zoom in / zoom out al movimento della rotella del mouse
* zoom ad estensione rettangolare con il tasto Shift della tastiera e, contemporaneamente, click e trascinamento del mouse
* (device touch) zoom e rotazione della mappa col pinch delle dita

OL contiene già molte interazioni di base che possono essere estese, configurate e modificate per i propri scopi specifici.

## Preparazione ambiente di lavoro ##

I controlli sono elementi visuali con i quali si possono attivare/disattivare le interazioni. Come per le interazioni, OL contiene già alcuni controlli predefiniti.

Quando viene istanziato `ol.Map` vengono automaticamente creati i seguenti controlli:

* pulsanti zoom in/zoom out
* (device touch) pulsante per il ripristino della rotazione a nord a seguito di una rotazione della mappa tramite pinch



