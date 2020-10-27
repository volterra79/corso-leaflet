---
title: Plugins
---
## Che cosa è un plugin ? ##

Come detto nell'introduzione di Leaflet, la libreria è stata pensata e sviluppata per essere più leggera possibile, concentrandosi su un insieme di funzionalità di base semplici da utilizzare.
Per poter estenderne le funzionalità base si ricorre all'utilizzo di plug-in.
Grazie alla numerosa comunità che c'è dietro a Leaflet, ci sono letteralmente centinaia di plugin tra cui scegliere.

## Plugin Aggiungi Mouse coordinate 
Esempio codice del plugin che aggiunge le coordinate della mappa.


```js

// Viene usato il metodo extend per sovrascrivere alcuni metodi della class L.Control

L.Control.MousePosition = L.Control.extend({
  // inizializza l'oggetto options con valori di default per il controllo e latre optioni che servono al controllo
  options: {
    position: 'bottomleft',
    separator: ' : ',
    emptyString: 'Unavailable',
    lngFirst: false,
    numDigits: 5,
    lngFormatter: undefined,
    latFormatter: undefined,
    prefix: ""
  },
  
 //medoto che viene chaimata alla'aggiuta del controllo sulla mappa
  onAdd: function (map) {
    this._container = L.DomUtil.create('div', 'leaflet-control-mouseposition');
    L.DomEvent.disableClickPropagation(this._container);
    // ascolta l'evento 'mousemove' associandogli una callback
    map.on('mousemove', this._onMouseMove, this);
    this._container.innerHTML = this.options.emptyString;
    return this._container;
  },
  
  // medoto chiamta quando il controllo viene rimosso dalla mappa
  onRemove: function(map) {
    map.off('mousemove', this._onMouseMove)
  },

  _onMouseMove: function (e) {
    var lng = this.options.lngFormatter ? this.options.lngFormatter(e.latlng.lng) : L.Util.formatNum(e.latlng.lng, this.options.numDigits);
    var lat = this.options.latFormatter ? this.options.latFormatter(e.latlng.lat) : L.Util.formatNum(e.latlng.lat, this.options.numDigits);
    var value = this.options.lngFirst ? lng + this.options.separator + lat : lat + this.options.separator + lng;
    var prefixAndValue = this.options.prefix + ' ' + value;
    this._container.innerHTML = prefixAndValue; // va a scrivere l'html nel container
  }

});

//megia opzioni della mappa
L.Map.mergeOptions({
    positionControl: false
});

// initHook
L.Map.addInitHook(function () {
    if (this.options.positionControl) {
        this.positionControl = new L.Control.MousePosition();
        this.addControl(this.positionControl);
    }
});

L.control.mousePosition = function(options) {
    return new L.Control.MousePosition(options);
};
```

<controllo-personalizzato-mouseposition></controllo-personalizzato-mouseposition>
