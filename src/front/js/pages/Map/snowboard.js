import React from "react";
import { useEffect } from "react";
import L from "leaflet";
import "./leaflet.css";

const MyMapsnow = ({ lat = -33.4513, long = -70.6653 }) => {
  useEffect(() => {
    loadMap();
  }, []);

  function loadMap() {
    const map2 = L.map("map2").setView([lat, long], 12);
    const marker = L.marker([-38.407747636551456, -71.55097029919503]).addTo(
      map2
    );

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      mapZoom: 12,
      center: true,
    }).addTo(map2);

    let marker1 = L.marker([-38.407747636551456, -71.55097029919503])
      .addTo(map2)
      .bindPopup("Centro de ski Corralco")
      .openPopup();

    centerLeafletMapOnMarker(map2, marker, marker1);
  }

  function centerLeafletMapOnMarker(map, marker) {
    var latLngs = [marker.getLatLng()];
    var markerBounds = L.latLngBounds(latLngs);
    map.fitBounds(markerBounds);
  }

  return <div id="map2"></div>;
};

export default MyMapsnow;
