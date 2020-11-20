# WFS-T - Transactional Web Feature Service 


[**Leaflet-WFST**](http://flexberry.github.io/Leaflet-WFST/)

Plugin per per la gestione dei layer **WFS** e **WFS-T**

## Esempio aggiunta su mappa di un layer WFS

<wfslayer></wfslayer>

dove le opzioni da settare per costruire il layer sono:

. crs	Sistema di riferimento es - L.CRS.EPSG3857	
. showExisting	true Caricare le feature esistenti
. geometryField	‘Shape’ il campo geometrico
. url	-	WFS url
. typeNS	-	Name Space
. typeName	-   layername
. typeNSName	-	type namespace name
. namespaceUri	-	namespace URI
. opacity	1	opcità del layer
. style	-	lo stile che si vuole dare al layer (style leaflet)
. filter	-	[**filtro**](http://flexberry.github.io/Leaflet-WFST/#filter) 
. maxFeatures	- Massimo numero di features ritornate dal server

## Esempio aggiunta su mappa di un layer WFS-T

<wfs-tlayer></wfs-tlayer>
