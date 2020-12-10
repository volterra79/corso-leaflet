(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{392:function(a,t,e){"use strict";e.r(t);var s=e(25),n=Object(s.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"qual-e-la-scelta-piu-veloce-per-inziare-a-sviluppare"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#qual-e-la-scelta-piu-veloce-per-inziare-a-sviluppare"}},[a._v("#")]),a._v(" Qual'è la scelta più veloce per inziare a sviluppare")]),a._v(" "),e("p",[e("strong",[a._v("Leaflet")])]),a._v(" "),e("p",[a._v("Se abbiamo bisogno di costruire un'applicazione WebGis che richiede funzionalità di base "),e("strong",[a._v("Leaflet")]),a._v(" è la scelta giusta.")]),a._v(" "),e("p",[e("strong",[a._v("Leaflet")]),a._v("  permette di visualizzare diversi tipi di layer, zoomare e muoversi nella mappa e le sue API sono semplici da capire e facili da usare.")]),a._v(" "),e("p",[a._v("Una volta però che si decide di andare "),e("em",[e("strong",[a._v("oltre")])]),a._v(" alle funzioni base, dobbiamo ricorrere ai "),e("strong",[a._v("Plugins")]),a._v(" e qui le cose si complicano richiedendo anche di creare delle funzionalità personalizzate che  non sempre sono facili da sviluppare.")]),a._v(" "),e("p",[e("strong",[a._v("Openlayers")])]),a._v(" "),e("p",[a._v("Per applicazione WebGis che necessitano di funzionalità avanzate( esempio lavorare con proiezioni diverse da quelle standard EPSG:4326, EPSG:3857) la scelta cadrà su "),e("strong",[a._v("Openlayers")]),a._v(".")]),a._v(" "),e("p",[a._v("OpenLayers ha un'ampia API che permette di sviluppare tutte le cose che si possono fare con Leaflet più altre di tipo avanzato.")]),a._v(" "),e("p",[a._v("Un Esempio su tutti: se la tua applicazione necessita di supportare layers con diverse proiezioni, "),e("strong",[a._v("OpenLayers")]),a._v(" lo permette in modo semplice.")]),a._v(" "),e("p",[a._v("Una cosa da dire è che OL, avendo un'API complessa, la curva di apprendimento sarà più lenta ma sicuramente permetterà di costruire applicazione più complesse e robuste.")]),a._v(" "),e("h2",{attrs:{id:"struttura-del-codice"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#struttura-del-codice"}},[a._v("#")]),a._v(" Struttura del codice")]),a._v(" "),e("p",[a._v("In generale "),e("strong",[a._v("Leaflet")]),a._v(' si può considerare una libreria più di "alto livello" rispetto a OpenLayers. Questo significa che in '),e("strong",[a._v("Leaflet")]),a._v(" molte cose sono delegate alla liberia internamente, lasciando l'utente di scrivere meno codice.")]),a._v(" "),e("p",[e("strong",[a._v("Openlayers")]),a._v(' invece ha una struttura più "gerarchica" e "modulare" in modo tale ogni sua parte sia adibita ad una specifica funzione.')]),a._v(" "),e("p",[a._v("Lo possiamo vedere dal seguente codice:")]),a._v(" "),e("p",[e("strong",[a._v("Leaflet")])]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[a._v(" ")]),e("div",{staticClass:"highlighted"},[a._v(" ")]),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" center "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("41.122132")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("14.167849")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// in EPSG:4326 ")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" map "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ol"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Map")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    target"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'map'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    layers"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token constant"}},[a._v("L")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("tileLayer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("foo"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'bar'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" attribution"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>\'')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    center"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    zoom"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[e("strong",[a._v("Openlayers")])]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[a._v(" ")]),e("div",{staticClass:"highlighted"},[a._v(" ")]),e("div",{staticClass:"highlighted"},[a._v(" ")]),e("div",{staticClass:"highlighted"},[a._v(" ")]),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" center "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("41.122132")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("14.167849")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// in EPSG:4326 ")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("const")]),a._v(" map "),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ol"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Map")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    target"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'map'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    layers"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ol"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("layer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Tile")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        source"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ol"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("source"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("OSM")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    view"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ol"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("View")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      center"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" ol"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("proj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("transform")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("center"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'EPSG:4326'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'EPSG:3857'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      zoom"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),e("p",[a._v("Come possiamo vedere dal codice evidenziato sopra, "),e("strong",[a._v("Leaflet")]),a._v(" non ha il concetto di oggetto View e quindi viene gestito internamente dalla classe L.Map.")]),a._v(" "),e("p",[e("strong",[a._v("Openlayers")]),a._v(' invece separa la Mappa dall View (che è il cuore della gestione geografica della mappa). In questo modo ogni oggetto è "specializzato" così da permettere all\'utente un maggior controllo.')]),a._v(" "),e("h2",{attrs:{id:"supporto-di-vari-formati-di-dati-gis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#supporto-di-vari-formati-di-dati-gis"}},[a._v("#")]),a._v(" Supporto di vari formati di dati GIS")]),a._v(" "),e("p",[e("strong",[a._v("Leaflet")])]),a._v(" "),e("p",[a._v("Il core di Leaflet supporta solo il formato "),e("strong",[a._v("GeoJSON")]),a._v(". Per gli altri formati dobbiamo ricorrere a plugins esterni come  CSV, WKT, TopoJSON, GPX e altri.")]),a._v(" "),e("p",[e("strong",[a._v("Openlayers")])]),a._v(" "),e("p",[a._v("OpenLayers supporta "),e("strong",[a._v("GeoJSON")]),a._v(", "),e("strong",[a._v("KML")]),a._v(", "),e("strong",[a._v("GML")]),a._v(" e tutti i formati standard.")]),a._v(" "),e("h2",{attrs:{id:"proiezioni"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#proiezioni"}},[a._v("#")]),a._v(" Proiezioni")]),a._v(" "),e("p",[e("strong",[a._v("Leaflet")]),a._v(" usa come sistema di proiezione per la mappa "),e("strong",[a._v("ESPG:3857")]),a._v(" e tutto ciò che riguarda le coordinate in "),e("strong",[a._v("LatLon")]),a._v(" gradi (centro mappa, bounds, etc..).")]),a._v(" "),e("p",[e("strong",[a._v("Openlayers")]),a._v(" utilizza di default "),e("strong",[a._v("EPSG:3857")]),a._v(" sia per mappa e sia per le coordinate che riguardano la mappa. Inoltre a differenza di "),e("strong",[a._v("Leaflet")]),a._v(" le coordinate geografiche seguono lo standar GIS "),e("strong",[a._v("Longitudine/Latitudine")]),a._v(".")]),a._v(" "),e("h3",{attrs:{id:"proiezioni-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#proiezioni-2"}},[a._v("#")]),a._v(" Proiezioni")]),a._v(" "),e("p",[e("strong",[a._v("Leaflet")])]),a._v(" "),e("ul",[e("li",[e("p",[a._v("Necessita di un plugin esterno "),e("strong",[a._v("Proj4leaflet")]),a._v(" per utilizzare proiezioni diverse da quelle standard")])]),a._v(" "),e("li",[e("p",[a._v("Può utilizzare un Sistema di riferimento alla volta. Non è possibile avere Layer in un sistema di riferimento diverso da quello della mappa")])]),a._v(" "),e("li",[e("p",[a._v("la trasformazione tra coordinate di un sistema di riferimento ad un altro non è gestita dalla libreria se non tramite i metodi "),e("strong",[a._v("project")]),a._v(" e "),e("strong",[a._v("unproject")]),a._v(" del sistema di riferimento\ne coordinate geografiche. Per trasformare le coordinate tra sistemi di riferimento dobbiamo utilizzare la libreria "),e("a",{attrs:{href:"http://proj4js.org/",target:"_blank",rel:"noopener noreferrer"}},[e("strong",[a._v("proj4s")]),e("OutboundLink")],1),a._v(" per fare conversioni")]),a._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[a._v("proj4")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'EPSG:3045'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),e("span",{pre:!0,attrs:{class:"token string"}},[a._v("'EPSG:4326'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("429482.6500978756")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4552418.298212856")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// restituisce [14.159999999999998, 41.11999999999998] Longitudine/Latitudine")]),a._v("\n")])])])])]),a._v(" "),e("p",[e("strong",[a._v("Openlayers")])]),a._v(" "),e("ul",[e("li",[e("p",[a._v("Necessita della libreria "),e("strong",[a._v("proj4j")]),a._v(" per aggiungere nuove proiezioni da quelle standard ma si integra alla perfezione con la liberia OL")])]),a._v(" "),e("li",[e("p",[a._v("Possiamo utilizzare layers con diversi Sistemi di Riferimento tra loro e la libreria pensa alla riproiezione")])]),a._v(" "),e("li",[e("p",[a._v("La trasformazione di coordinate da un sistema di riferimento all'altro è semplice utlizzando il metodo statico "),e("strong",[a._v("ol.proj.transform(coordinates, ProiezioneCoordinate, ProiezioneFinale)")])])])]),a._v(" "),e("h2",{attrs:{id:"handler-vs-interaction"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#handler-vs-interaction"}},[a._v("#")]),a._v(" Handler vs Interaction")]),a._v(" "),e("p",[e("strong",[a._v("Leaflet")]),a._v(" ha il concetto di "),e("strong",[a._v("Handler")]),a._v(" come funzione (e non elemento grafico) che ha lo scopo di reagire al cambiamento di stato della mappa")]),a._v(" "),e("p",[e("strong",[a._v("Openlayer")]),a._v(" ha il concetto di "),e("strong",[a._v("Interaction")]),a._v(" che ha lo stesso significato di Leaflet. Gestisce (senza elemento grafico) il cambiamento di stato della mappa")]),a._v(" "),e("h2",{attrs:{id:"layer-e-feature"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#layer-e-feature"}},[a._v("#")]),a._v(" Layer e Feature")]),a._v(" "),e("p",[a._v("Come già detto, in Leaflet tutti gli elementi della mappa sono considerato "),e("strong",[a._v("Layer")]),a._v(".")]),a._v(" "),e("p",[a._v("In "),e("strong",[a._v("OpenLayers")]),a._v(" invece c'è ben chiara e netta la distinzione tra oggetto "),e("strong",[a._v("Layer")]),a._v(" e "),e("strong",[a._v("Feature")]),a._v(". Ogni classe ha i propri metodi e attributi.")]),a._v(" "),e("h2",{attrs:{id:"conclusione"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#conclusione"}},[a._v("#")]),a._v(" Conclusione")]),a._v(" "),e("p",[a._v("In conclusione non esiste una vera e propria risposta su quale libreria scegliere tra "),e("strong",[a._v("Leaflet")]),a._v(" e "),e("strong",[a._v("OpenLayers")]),a._v(".")]),a._v(" "),e("p",[a._v("Come scritto sopra, se la mappa e le sue funzionalità sono semplice e abbiamo bisogno di sviluppare un'applicazione in modo veloce, con pochi dati, Leaflet sarà la scelta giusta.")]),a._v(" "),e("p",[a._v("Nel caso in cui state pensando di sviluppare un'applicazione più complessa e che richiede tante funzionalità, tanti layers da gestire e pensate di aggiungere delle funzionalità personalizzate, OpenLayers sarà la scelta giusta.")]),a._v(" "),e("p",[a._v("Sotto è riportato un link aluni esempi di sviluppo fatte con "),e("strong",[a._v("Leaflet")]),a._v(" e sia con "),e("strong",[a._v("Openlayers")])]),a._v(" "),e("p",[a._v("Questo "),e("a",{attrs:{href:"https://astuntechnology.github.io/osgis-ol3-leaflet/index.html",target:"_blank",rel:"noopener noreferrer"}},[e("strong",[a._v("link")]),e("OutboundLink")],1),a._v(" potete vede alcuni esempi scritti in OpenLayer che in Leaflet")]),a._v(" "),e("p",[e("strong",[a._v("Nota importante")]),a._v(": Qualsiasi sarà la vostra scelta, la cosa fondamentale è conscere almeno le basi del linguaggio "),e("strong",[a._v("Javascript")])])])}),[],!1,null,null,null);t.default=n.exports}}]);