---
title: Tipi base
---

In Leafleft ci sono alcuni tipi di base che vengono utilizzati dalle altri classi:

* **LatLng** [**link**](https://leafletjs.com/reference-1.7.1.html#latlng): Rappresenta un punto di coordinate geografiche (**Latitudine** e **Longitudine**).
    
  ```js 
    const latlng = L.latLng(50.5, 30.5);
    map.panTo(latlng);
  ```  
           
* **LatLngBounds**: Rappresenta il Bounding Box. Necessita dei due punti situati sulla diagonale del rettangolo (lower-left/upper-right o viceversa)

  ```js
    const corner1 = L.latLng(40.712, -74.227);
    const corner2 = L.latLng(40.774, -74.125);
    const bounds = L.latLngBounds(corner1, corner2);
  ```
                  
* **Point**: Rappresenta un punto con x e y coordinate in pixel e non in coordinate geografiche.

  ```js
    const point = L.point(200, 300);
    map.panBy(point)
  ```  

* **Bounds**: Rappresenta un'area rettangolare espressa in coordinate pixel.

  ```js
    const punto1 = L.point(10, 10);
    const punto2 = L.point(40, 60);
    const rettangolo = L.bounds(punto1, punto2);
  ```

* **Icon**: Rappresenta un icona da utilizzare ad esempio nella creazione del marker.

  ```js
    const Icona = L.icon({
      iconUrl: 'my-icon.png',
      iconSize: [38, 95],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      shadowUrl: 'my-icon-shadow.png',
      shadowSize: [68, 95],
      shadowAnchor: [22, 94]
    });
      
    L.marker([50.505, 30.57], {icon: Icona}).addTo(map);
  ```

* **DivIcon**: Rappresenta un'icona leggera per markers che usa un semplice **div** invece che un'immagine. Eredita dalla classe **Icon** ma ignora il parametro **iconUrl** e l'opzione **shadow**.

   ```js
    const IconaDiv = L.divIcon({className: 'icona-div'});
    // da settare .icona-div styles in CSS
    
    L.marker([50.505, 30.57], {icon: IconaDiv}).addTo(map);
   ```


