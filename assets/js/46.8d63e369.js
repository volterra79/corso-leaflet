(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{402:function(t,a,s){"use strict";s.r(a);var e=s(25),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"wms-plugin-single-tile-e-richiesta-getfeatureinfo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wms-plugin-single-tile-e-richiesta-getfeatureinfo"}},[t._v("#")]),t._v(" WMS Plugin - Single Tile e richiesta GetFeatureInfo")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/heigeo/leaflet.wms",target:"_blank",rel:"noopener noreferrer"}},[s("strong",[t._v("leaflet.wms")]),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"single-tile-wms-image"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#single-tile-wms-image"}},[t._v("#")]),t._v(" Single Tile WMS (Image)")]),t._v(" "),s("p",[t._v("Prima di addentrarci nell'esempio della "),s("strong",[t._v("GetFeatureInfo")]),t._v(" andiamo a vedere come richiedere una singola immagine (tile) da un servizio WMS tramite il Bounding Box della mappa.")]),t._v(" "),s("p",[t._v("Abbiamo visto nel capitolo dei layer Rastercome richiedere un layer WMS. Abbiamo imparato che l'oggetto ** L.tileLayer.WMS** fa multi chiamate "),s("strong",[t._v("GetMap")]),t._v(" richiedendo immagini da 256px 256px che coprono l'intera area di mappa;")]),t._v(" "),s("p",[t._v("Grazie a questo plugin possiamo andare a richiedere una singola immagine invece di tante piccole tiles.")]),t._v(" "),s("p",[t._v("Andiamo a vedere quali sono le principali caratteristiche offerte dal plugin:")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("Single-tile")]),t._v(' : Come abbiamo visto è possibile richiedere una singola tile ( o immagine) che ogni volta si aggirna ad ogni "spostamento" della mappa')])]),t._v(" "),s("li",[s("p",[t._v("Utilizzare una stessa sorgente (WMS server) per creare più layer "),s("strong",[t._v("L.WMS.Source")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Usa singola immagine di default (uses L.WMS.Overlay)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" source "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WMS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("source")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://example.com/mapserv"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'transparent'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" layer1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"layer1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" layer2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" source"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"layer2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addLayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("layer1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addLayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("layer2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Se voglio richiedere immagini a tile (Oppure uuso  L.WMS.TileLayer)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" sourcewmsTiled "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("L")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("WMS")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("source")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"http://example.com/mapserv"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'transparent'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'tiled'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// specifico che deve essere tilata")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsourcewmsTiled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"layer1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nsourcewmsTiled"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getLayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"layer2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addTo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("map"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("p",[t._v("Inoltre grazie al metodo "),s("strong",[t._v("addSubLayer")]),t._v(" e "),s("strong",[t._v("removeSubLayer")]),t._v(" è possibile aggiungere e togliere a nostro piacimento layers dalla sorgente (utile ad esempio nell'accensione e spegnimento dei layer nella TOC)")])]),t._v(" "),s("li",[s("p",[t._v("Possibilità di effetuare richieste "),s("strong",[t._v("GetFeatureInfo")])])])]),t._v(" "),s("h2",{attrs:{id:"getfeatureinfo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getfeatureinfo"}},[t._v("#")]),t._v(" GetfeatureInfo")]),t._v(" "),s("p",[t._v("Esempio GetFeatureInfo per un layer WMS sviluppato con plugin:")]),t._v(" "),s("getfeatureinfo-plugin"),t._v(" "),s("p",[t._v("oppure fatto custom da noi:")]),t._v(" "),s("p",[s("getfeatureinfo")],1)],1)}),[],!1,null,null,null);a.default=n.exports}}]);