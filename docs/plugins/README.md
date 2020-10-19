---
title: Plugins
---
## Che cosa è un plugin ? ##

Come detto nell'introduzione di Leaflet, la libreria è stata pensata e sviluppata per essere più leggera possibile, concentrandosi su un insieme di funzionalità di base semplici da utilizzare.
Per poter estenderne le funzionalità base si ricorre all'utilizzo di plug-in.
Grazie alla numerosa comunità che c'è dietro a Leaflet, ci sono letteralmente centinaia di plugin tra cui scegliere.

## Come estendere Leaflet

Andiamo a vedere come è strutturato il codice Leaflet e come è possibile estenderlo per creare nuove funzionalità [**link**](https://leafletjs.com/examples/extending/extending-1-classes.html)

<struttura></struttura>

Alcuni concetti utili per capire come estendere una classe del core di Leaflet e creare qualcosa di personalizzato:

* **L.Class.extend** : Funzione che prede un oggetto come parametro e ma ad **estendere** la classe padre creado una classe figlio con attributi e metodi nuovi 
* **L.Class.include** : Funzione ch accetta sempre un oggetto javascript come sopra ma che può redefinire un metodo o attributo già presente nella Classe padre
* **L.Class.initialize** : Nella classe Javascript quando viene istanziata una classe viene chaimato sempre il metodo **constructor**.
    In Leaflet’s L.Class, il metodo costructo viene chiamato **initialize**.
    Esempio:
    
    ```js{8,10}
    const MiaClasse = L.Class.extend({
        
            options: {
                width: 1,
                height: 1
            },
        
            initialize: function(name, options) {
                this.name = name;
                L.setOptions(this, options);
            }
            
        });
        
        const miaistanza = new MiaClasse('Red', {width: 10});
        console.log(miaistanza.options.width) => 10;
        console.log(miaistanza.options.height) => 1
        
    ``` 
Inoltre se vogliamo che la nostra classe faccia qualcosa prima di chiamare il    

### Chiamare un metodo della Classe Padre

Calling a method of a parent class is achieved by reaching into the prototype of the parent class and using Function.call(…). This can be seen, for example, in the code for L.FeatureGroup:

Esempio:

```js{4,8}
L.FeatureGroup = L.LayerGroup.extend({

    addLayer: function (layer) {
        L.LayerGroup.prototype.addLayer.call(this, layer);
    },
    
    removeLayer: function (layer) {
        L.LayerGroup.prototype.removeLayer.call(this, layer);
    }
});

```

    
Come avrete notato Leaflet ha due possibilità di creare un'istanza di classe.

* Tramite **new** L.NomeClasse
* Tramite la funzione **Factory** associata alla classe L.nomeclasse (in minuscolo)    

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
