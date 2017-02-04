import { observer } from 'mobx-react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import React, { Component } from 'react';
import Store from '../store/Singleton';
import '../sass/Body.sass'

const tile = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attrib = 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors';

const empty_map = () => {
    return(<div className="the-map"><h1>What's up</h1></div>)

}


const map = center => {
    return(
            <div className="leaflet-container" >
                <Map
                    center={ center }
                    zoom={13}
                >
                  { empty_map() }
                        <TileLayer
                            attribution={attrib}
                            url={tile}
                        />
                        
                </Map>
            </div> 
          );
}

@observer
class PlaceMap extends Component {
    constructor() {
        super();
        this.state = { visible: false }
    }

    componentDidMount() {
        this.setState({ visible: this.props.store.getVisible });
    }

    render() {
       const center = this.props.store.getCurrentPlace;
       let showMap = map(center);
       if (this.state.visible === true) showMap= map(center); 
             console.log("Render, Render" + showMap)
       return (
           <div className="the-map">
               { showMap }
           </div>
       );
    }
}

export default PlaceMap;
