import { action, observable, computed, toJS} from 'mobx';

class BodyDataStore {
    //content to be oranize by order of the links
    @observable content = [
        "My name is Aaron Long, and I'm a recent Temple University grad in the Philadelphia Area."+
        " I love technology and pushing my understanding of it, either through programming or learning new applications." +
        " Recently I've become obsessed with learning about HTTP/2 and websecurity." +
        " However, I often find myself jumping from topic to topic, following where my interest leads me." +
        " I believe strongly in GIS technology, and underutilized capabilties of GIS to fix modern problems." +
        " If you have any quesions, drop me a line", 
    ];

}

export default BodyDataStore;
//export default bodyDatastore;