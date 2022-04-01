import React from "react";
import { useEffect } from "react";
import L from "leaflet";
import "./leaflet.css";

const MyMapSwim = ({ lat = -33.4513, long = -70.6653 }) => {
  useEffect(() => {
    loadMap();
  }, []);

  function loadMap() {
    const map3 = L.map("map3").setView([lat, long], 12);
    const marker = L.marker([-32.969389, -71.545027]).addTo(map3);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      mapZoom: 12,
      center: true,
    }).addTo(map3);

    let marker1 = L.marker([-32.969389, -71.545027])
      .addTo(map3)
      .bindPopup("Reñaca")
      .openPopup();

    centerLeafletMapOnMarker(map3, marker, marker1);
  }

  function centerLeafletMapOnMarker(map, marker) {
    var latLngs = [marker.getLatLng()];
    var markerBounds = L.latLngBounds(latLngs);
    map.fitBounds(markerBounds);
  }

  return <div id="map3"></div>;
};

export default MyMapSwim;
