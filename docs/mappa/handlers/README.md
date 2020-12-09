---
title: Handlers
---

## Che cosa è un Handler

**Handler** è stato introdotto nella versione Leaflet 1.0, e il loro scopo è quello di processare un evento che si verifica su un elemento DOM del browser (come il click, dblclick or mousewheel) cambiandone lo **stato**.

Per maggiori informazioni vai alla [**documentazione**](https://leafletjs.com/examples/extending/extending-3-controls.html)

Handlers sono relativamente semplici da gestire e creare. Necessitano di due metodi:

* **addHooks**  che viene chiamato quando l'handler viene abilitato 

* **removeHooks**  viene chiamato quando l'handler viene disabilitato 

Gli hooks sopra sono chiamati quando viene lanciato il metodo dell'istanza **enable()** o **disable()**.

Infine il metodo **endabled()** restituisce lo stato dell'handler, informandoci se è al momento abilitato o disabilitato.

E' spesso legato con la mappa tramite il metodo map.addHandler(nomeHandler, classe handler da istanziare)
 
<handler></handler>
 
