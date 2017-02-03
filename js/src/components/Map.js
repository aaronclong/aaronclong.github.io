import Flexbox from 'flexbox-react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import React, { Component } from 'react';
import { observer } from 'mobx-react';
import '../sass/Body.sass'

const tile = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

const updateStyle = bool => { 
    let val = bool === true ? 'block' : 'none';
    return( { style: { display: val } } );
 }


@observer
class PlaceMap extends Component {
    render() {
       console.log(this)
       console.log(this.props.store)
       let bool = this.props.store.getCurrentPlace;
       console.log(bool)
       let stylez = updateStyle(bool);
       return(
             <div className="leaflet-container" style={ stylez } >
                <Map
                    center={[39.952583, -75.165222]}
                    zoom={13}
                >
                        <TileLayer
                            attribution={attrib}
                            url={tile}
                        />
                        
                </Map>
              </div> 
              );
    }
}

export default PlaceMap;
