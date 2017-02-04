import { action, observable, computed, toJS } from 'mobx';

const points = [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [39.952473,-75.164106]
            },
            "properties": {
                "name": "City Hall, Philadelphia"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [39.986855,-75.196442]
            },
            "properties": {
                "name": "Fairmount Park, Philadelphia"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [39.9328907,-75.165178]
            },
            "properties": {
                "name": "Passyunk Square, Philadelphia"
            }
        }
    ],

   getPoints = () => points;


class MapDataStore {

    /** Determined wether Map component is visible or not */
    @observable visible = false;

    places = getPoints();
    
    @computed get getVisible() { 
        return this.visible; 
    }

    @action turnVisible() {
        window.console.log(this.visible);
        this.visible = this.visible ? false : true;
        window.console.log(this.visible);
    }

    /** Managed Places */
    @observable currentPlace = 0;

    @computed get getCurrentPlace() {
        return this.places[this.currentPlace]['geometry']['coordinates'];
    }

    @action setCurrentPlace(i) {
        if (i >= this.places.length) return;
        this.currentPlace = i;
    }
    
    /**
     * All the places to be marked on the Map
     * Array index with geoJSON objects
     * http://geojson.org/
     */

    @computed get getPoints() {
        return this.currentPlace.map(p => toJS(p));
    }

}

export default MapDataStore;