---
title: Proiezioni
---

## Lavorare con le Proiezioni

Prima di addentrarci sui layer cartografici prendiamoci del tempo per capire bene come funzionano i Sistemi di Riferimento in Leaflet.
Diciamo da subito che Leaflet, di per sé, conosce solo le caratteristiche dei due principali SR globali: EPSG:3857 - Google Mercator - (quello di default alla creazione di una mappa) e EPSG:4326 - WGS84 -.
Di default la mappa è impostata in EPSG:3857 mentre il il centro della mappa deve essere impostato in Lat e Long (gradi).
Se volgiamo utilizzari Sistemi di riferimento Custorm dobbiamo ricorre ad un plugin esterno

## Proiezioni custom

Per lavorare con projezioni diverse da quella utilizzata da Leaflet bisogna ricorre all'utilizzo di una libreria esterna [**Proj4Leflet**](http://www.liedman.net/Proj4Leaflet/)

### Esempio - Proiezione EPSG: 3003

<proiezione-custom></proiezione-custom>