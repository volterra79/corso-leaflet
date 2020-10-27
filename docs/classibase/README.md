---
title: Classi di Base
---

## Stuttura Leaflet

Andiamo a vedere come è strutturato il codice Leaflet e come è possibile estenderlo per creare nuove funzionalità [**link**](https://leafletjs.com/examples/extending/extending-1-classes.html)

<struttura></struttura>

Per poter comprendedre meglio come funziona un plugin e come poter personalizzare la nostra applicazione è necessario conoscere le classi basi di Leaflet: 

## Class [**link**](https://leafletjs.com/reference-1.7.1.html#class)

In pratica è la classe base da cui tutte le altre classi derivano.
In aggiunta al modello classico di eredità supportato da javascript, essa introduce alune proprià/metodi speciali per organizzare e svliluppare meglio il codice (options, includes e statics ad esempio)
Esempio:

```js
//creo una classe corso che estende la classe base L.Class

const Corso = L.Class.extend({ 
    initialize: function (nomecorso) {
        this.nomecorso = greeter;
        // class constructor
    },
    presentati() {
      alert(`Ciao a tutti. Io sono il corso `${this.nomecorso}`) // utilizzo le template strings (Javascript)
    }
});

//creo un'instaza della classe corso passangli come parametro il nome del corso
const corso = new Corso("Leaflet");

// Chiamo il metodo presentati che mi restituirà il messaggio
corso.presentati();

```
### Funzioni (Eredità):

* **L.Class.extend** : Funzione che prede un oggetto come parametro (attributi e metodi) per **estendere** la classe padre creado una classe figlio con attributi e metodi nuovi. Ritorna una classe da instanziare
* **L.Class.include** : Funzione che accetta sempre un oggetto javascript come sopra ma che può intervenire in runtime per aggiungere/mergiare i metodi della classe così che tutte le classi e le istanze "acquisiranno".
* **L.Class.initialize** : Nella classe Javascript quando viene istanziata una classe viene chaimato sempre il metodo **constructor**.
    In Leaflet’s L.Class, il metodo costructor viene chiamato **initialize**.
    
    
**Esempio extend**

<class-extend></class-extend>

Inoltre se vogliamo che la nostra classe compia un'azione durante la fase di inizializzazione questo è possibile farlo tramite il metodo **addInitHook** della Classe.
Questo metodo è utile nel caso in cui volessimo sviluppare un plugin in quanto di permette di intervenire durante l'inizializzazione di una classe di Leaflet

```js
Classe.addInitHook(function () {
    //fai qualcosa
});

//oppure

 Classe.addInitHook('metodo della classe', parametri)

```
**Esempio include**

<class-include></class-include>
 

### Attributi:

* **options**:  E' un attributo speciale che permette di avere una configuazione della classe con il quale stabilire dei valori di default della classe:

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

## Funzione Factory   
    
Come avrete notato Leaflet ha due possibilità di creare un'istanza di classe.

* Tramite **new** L.NomeClasse
* Tramite la funzione **Factory** associata alla classe L.nomeclasse (in minuscolo)    
