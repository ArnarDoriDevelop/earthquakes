import React from 'react';
import '../App.css';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const iceCoord = [64.963051, -19.020836];

const Test3 = (props) => {
  return(
    <div>
      EarthquakeMap container
      <MapContainer center={iceCoord} zoom={6} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      </MapContainer>
      adfadf
    </div>
  );
};

export default Test3;