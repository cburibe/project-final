import React from "react";
import { useEffect } from "react";
import L from "leaflet";
import "./leaflet.css";

const MyMap = ({ lat = -33.4513, long = -70.6653 }) => {
  useEffect(() => {
    loadMap();
  }, []);

  function loadMap() {
    const map = L.map("map").setView([lat, long], 13);
    const marker = L.marker([-0, -0]).addTo(map);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      mapZoom: 13,
      center: true,
    }).addTo(map);

    marker
      .setLatLng([-33.4561691, -70.580058])
      .addTo(map)
      .bindPopup("Centro nacional de entrenamiento olimpico");

    let marker1 = L.marker([-33.4561691, -70.580058])
      .addTo(map)
      .bindPopup("Centro nacional de entrenamiento olimpico")
      .openPopup();
    let marker2 = L.marker([-33.4470886395349, -70.6291601860465])
      .addTo(map)
      .bindPopup("Centro Deportivo Providencia")
      .openPopup();

    centerLeafletMapOnMarker(map, marker, marker1, marker2);
  }

  function centerLeafletMapOnMarker(map, marker) {
    var latLngs = [marker.getLatLng()];
    var markerBounds = L.latLngBounds(latLngs);
    map.fitBounds(markerBounds);
  }

  return <div id="map"></div>;
};

export default MyMap;
