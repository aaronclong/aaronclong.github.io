import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import React, { Component } from 'react';
import '../sass/Body.sass'

const tile = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

const map = () => {
               return( <Map
                    center={[39.952583, -75.165222]}
                    zoom={13}
             >
                    <TileLayer
                        attribution={attrib}
                        url={tile}
                    />
                    <Marker position={[39.952473,-75.164106]}>
                        <Popup>
                            <span>A pretty CSS3 popup.<br/>Easily customizable.</span>
                        </Popup>
                    </Marker>
                    <p>Hello</p>
</Map>);
}
export default map;
