import React from 'react';
import '../App.css';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const iceCoord = [64.963051, -19.020836];

const EarthquakeMap = (props) => {
  return(
    <div>
      <div className='data'>
        <MapContainer center={iceCoord} zoom={6} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
          {props.earthquakes.length > 0 &&
            props.earthquakes.map((e, index) => (
              <Marker
                key={index}
                position={[
                  e.latitude,
                  e.longitude
                ]}
              >
                <Popup>
                  <div><strong>{e.humanReadableLocation}</strong></div>
                  <br />
                  <div><i>Size: {e.size}</i></div>
                  <div><i>Quality: {e.quality}</i></div>
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default EarthquakeMap;