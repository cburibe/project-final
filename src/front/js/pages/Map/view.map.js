import React from "react";
import { useEffect } from "react";
import L from "leaflet";
import "./leaflet.css";

const MyMap = ({ lat = -33.4513, long = -70.6653 }) => {
  useEffect(() => {
    loadMap();
  }, []);

  function loadMap() {
    const map = L.map("map").setView([lat, long], 18);
    const marker = L.marker([-33.4358, -70.6411]).addTo(map);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      mapZoom: 18,
      center: true,
    }).addTo(map);

    let marker1 = L.marker([-33.4561691, -70.580058])
      .addTo(map)
      .bindPopup("Centro nacional de entrenamiento olimpico")
      .openPopup();
    let marker2 = L.marker([-33.4470886395349, -70.6291601860465])
      .addTo(map)
      .bindPopup("Centro Deportivo Providencia")
      .openPopup();

    let marker3 = L.marker([-33.459556, -70.662783])
      .addTo(map)
      .bindPopup("Fantasilandia")
      .openPopup();
    let marker5 = L.marker([-33.443018, -70.65387])
      .addTo(map)
      .bindPopup("Palacio de La Moneda")
      .openPopup();

    let marker4 = L.marker([-33.4358, -70.6411])
      .addTo(map)
      .bindPopup("Parque forestal")
      .openPopup();

    centerLeafletMapOnMarker(
      map,
      marker,
      marker1,
      marker2,
      marker3,
      marker4,
      marker5
    );
  }

  function centerLeafletMapOnMarker(map, marker) {
    var latLngs = [marker.getLatLng()];
    var markerBounds = L.latLngBounds(latLngs);
    map.fitBounds(markerBounds);
  }

  return <div id="map"></div>;
};

export default MyMap;
