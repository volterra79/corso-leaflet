---
title: Classi di Base
---

## Stuttura Leaflet

Andiamo a vedere come è strutturato il codice **Leaflet** e come è possibile estenderlo per creare nuove funzionalità [**link**](https://leafletjs.com/examples/extending/extending-1-classes.html)

<struttura></struttura>

Per poter comprendere meglio come funziona un plugin e come poter personalizzare la nostra applicazione è necessario conoscere le classi basi di Leaflet. 

## L.Class

Come si è visto dalla struttura del codice **Leaflet** [**L.Class**](https://leafletjs.com/reference-1.7.1.html#class) è la classe padre da cui tutte le altre classi derivano (ad eccezione delle classi riguardandi la gestione del DOM e quelle riguardanti LatLng e Bounds).

In aggiunta al modello classico di eredità supportato da Javascript (prototipale), essa introduce alcuni proprietà speciali per organizzare e svliluppare meglio il codice (**options**, **includes** e **statics** ad esempio).

Capire come estendere  una classe Leaftlet aggiungendo/sostituendo metodi ci permette di poter creare "Oggetti personalizzati" e magari scrivere plugins che faranno al caso nostro.

### Metodi (Eredità):

* **L.Class.extend** : Funzione che prede un oggetto come parametro (attributi e metodi) per **estendere** la classe padre creado una classe figlio con attributi e metodi nuovi. In caso di metodi o attributi comuni, questo non va a redifinire/cambiare glia ttributi della classe padre.
* **L.Class.include** : Come sopra ma la differenza è che se ci sono metodi/attributi in comune, sia tutte le attuali istanze create dalla classe padre che tutte le nuove istanze create dalla classe padre "acquisiranno" da quel momento in poi tali funzione/attributi modificati.
  
  Va a modificare direttamente direttamente i metodi e gli attributi del **prototype** della classe padre.
* **L.Class.initialize** : Nella classe Javascript quando viene istanziata una classe viene chiamto il metodo **constructor**.
    In Leaflet L.Class, il metodo constructor viene chiamato **initialize**.

```js
//creo una classe corso che estende la classe base L.Class

const Corso = L.Class.extend({ 
    initialize: function (nomecorso) {
        this.nomecorso = nomecorso;
        // class constructor
    },
    presentati() {
      console.log(`Ciao a tutti. Io sono il corso `${this.nomecorso}`) // utilizzo le template strings (Javascript)
    }
});

//creo un'instaza della classe corso passangli come parametro il nome del corso
const corso = new Corso("Leaflet");

// Chiamo il metodo presentati che mi restituirà il messaggio

corso.presentati(); //==> restituirà in console il messaggio 'Ciao a tutti. Io sono il corso Leaflet'

```    
    
**Esempio L.extend**

<class-extend></class-extend>

### Attributi:

* **options**:  E' un attributo speciale che permette di avere una configuazione della classe con la quale stabilire dei valori di default:

**Esempio options**

<class-options></class-options>

### Chiamare un metodo della Classe Padre

E' possibile chiamare il metodo della classe padre all'interno della classe figlio mediante la propietà **prototype** (Javascript) della classe Padre.
Un sempio di come è scritta la classe L.FeatureGroup che è una sotto classe di L.LayerGroup:

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

## initHook

Inoltre se vogliamo che la nostra classe compia un'azione durante la fase di inizializzazione questo è possibile farlo tramite il metodo **addInitHook** della Classe.
Questo metodo è utile nel caso in cui volessimo sviluppare un plugin in quanto di permette di intervenire durante l'inizializzazione di una classe di Leaflet.
Se si passa una funzione è importante ricorardi che **this** si riferisce all'istanza della classe a cui abbiamo invocato il metodo ***initHook*


Si possono utilizzare due modi:

1) **Classe.initHook(function(){......})**

```js
L.Map.addInitHook(function() {
    /* <this> si riferisce all'instanza della classe.
     quindi potremmo registrare gli eventi che il nostro plugin utilizzerà per fare qualcosa
     Es:
     this.on('zoommend', ()=>{ fai qualcosa})
    */
});
```

2) **Classe.addInitHook('metodo della classe', parametri)**

```js
  L.Map.initHook('setZoom', 10)
```

## Funzione Factory   
    
Come avrete notato Leaflet ha due possibilità di creare un'istanza di classe.

* Tramite **new** L.NomeClasse
* Tramite la funzione **Factory** associata alla classe L.nomeclasse (in minuscolo)    
