import { observable, computed } from 'mobx';

class HeaderDataStore {
    @observable search = "";
    @computed sayHey() { return "Hey"; }
}