## Eventi

La mappa e tutti gli oggetti che inseriamo in essa emettono un gran numero di eventi.
 
Al caricamento di un layer, al cambio di una qualsiasi proprietà di un oggetto, al cambio di posizione, zoom, rotazione della mappa oppure al click, drag del mouse o semplicemente alla pressione di un tasto della tastiera, e in tante altre occasioni, vengono emessi eventi, che portano con sé un carico di informazioni utili ad essere intercettati, filtrati e gestiti in modo da poter eseguire qualsiasi azione a valle della loro emissione.

Alcuni eventi vengono generati internamente da Leaflet, ad esempio quando viene inserito un nuovo layer o quando si stanno caricando i dati da una sorgente. Altri invece sono eventi generati dal browser, come il click del mouse sulla mappa, che vengono intercettati da Leaftlet, arricchiti di informazioni e rilanciati in modo da poter essere gestiti a valle dai listener, che sono metodi/funzioni che possiamo registrare su un dato evento e che verranno eseguiti ogni volta che si presenterà quell’evento.

Cominciamo con un esempio: usiamo gli eventi generati dal movimento del mouse sulla mappa per ottenere, e mostrare, le coordinate geografiche della posizione istantanea del mouse.


## Esempio: Eventi su mappa

Come possiamo vedere dalla documentazione  [**link**](https://leafletjs.com/reference-1.7.1.html#map-event), la mappa internamente emette vari tipi di eventi che possiamo gestire per i nostri scopi.

Di seguito possiamo vedere un esempio riguardante l'evento mappa **moveend**

<moveend></moveend>

