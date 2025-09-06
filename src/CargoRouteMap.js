import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function CargoRouteMap() {
  return (
    <MapContainer
      center={[48.5, 95]}
      zoom={4}
      style={{ width: "100%", height: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://osm.org/copyright">OSM</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {/* Тут весь код с маршрутами, точками складов и переходов */}
    </MapContainer>
  );
}
