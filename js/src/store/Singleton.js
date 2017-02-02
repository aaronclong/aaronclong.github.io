import BodyDataStore from './body-store'
import SideBarDataStore from './sidebar-store'

const store = {
    BodyDataStore: new BodyDataStore(),
    SideBarDataStore: new SideBarDataStore()
}

export default store;