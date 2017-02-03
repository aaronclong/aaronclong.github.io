import BodyDataStore from './body-store'
import MapDataStore from './map-store'
import SideBarDataStore from './sidebar-store'

const store = {
    BodyDataStore: new BodyDataStore(),
    MapDataStore: new MapDataStore(),
    SideBarDataStore: new SideBarDataStore()
}

export default store;