import { action, observable, computed, toJS} from 'mobx';

class BodyDataStore {
    @observable content = [];

}

const bodyDatastore = new BodyDataStore();
export default bodyDatastore;