# WFS-T - Transactional Web Feature Service 


[**Leaflet-WFST**](http://flexberry.github.io/Leaflet-WFST/)

Plugin per per la gestione dei layer **WFS** e **WFS-T**

## Esempio aggiunta su mappa di un layer WFS

<wfslayer></wfslayer>

dove le opzioni da settare per costruire il layer sono:

* **crs**:	Sistema di riferimento es - L.CRS.EPSG3857	
* **showExisting**: default true Caricare le feature esistenti
* **geometryField**: il Campo geometrico da utilizzare
* **url**: WFS server url
* **typeNS**: Name Space
* **typeName**:  Layername
* **typeNSName**: Type namespace name
* **namespaceUri**:	Namespace URI
* **opacity**:	deafult 1 Indica l'opacità del layer
* **style**	: Lo stile che si vuole dare al layer (vedi stile Leaflet)
* **filter**: [**filtro**](http://flexberry.github.io/Leaflet-WFST/#filter) 
* **maxFeatures**: Massimo numero di features che si vuole caricare dal server

## Esempio aggiunta su mappa di un layer WFS-T

<wfs-tlayer></wfs-tlayer>
