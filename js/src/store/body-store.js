import { action, observable, computed, toJS} from 'mobx';

class BodyDataStore {
    //content to be oranize by order of the links
   @observable current = 0;

   content = [
       //One
        "My name is Aaron Long, and I'm a recent Temple University grad in the Philadelphia Area."+
        " I love technology and pushing my understanding of it, either through programming or learning new applications." +
        " Recently I've become obsessed with learning about functional programming, HTTP/2, and websecurity." +
        " However, I often find myself jumping from topic to topic, following where my interest leads me." +
        " I believe strongly in GIS technology, and underutilized capabilties of GIS to fix modern problems." +
        " If you have any quesions, drop me a line.",
        //Two
        " I'm a city person, and I've always admired urban spaces. Here is just a collection of my favorite spots in cities."
    ];


    @computed get getCurrent() {
        return this.content[this.current];
    }

    @computed get index() {
        return this.current;
    }

    @action setCurrent(int) {
        if (int >= this.content.length) return;
        this.current = int;
    }

}

export default BodyDataStore;