import { action, observable, computed } from 'mobx';

class BodyDataStore {
    //content to be oranize by order of the links
   @observable current = 0;

   content = [
       //One
        "My name is Aaron Long, and I'm a recent Temple University grad in the Philadelphia Area." +
        " I love technology and pushing my understanding of it, either through programming or learning new applications." +
        " Recently I've become obsessed with learning about functional paradigms, HTTP/2, and websecurity." +
        " However, I often find myself jumping from topic to topic, following where my interests lead me." +
        " I believe strongly in GIS technology, and the underutilized capabilties of GIS to fix modern problems." +
        " If you have any quesions, drop me a [line](mailto:aaron.long.c@gmail.com). ",
        //Two
        "I've been building websites since broadband arrived at my house as a kid." +
        " I've found myself coming back and forth to web development, simple hacking, and other geeky-things since then." +
        " During college, I've truly attempted to hone my skills and developed a proficiency in the following languages.\n\n"
        +"+ Java 8\n"+
        "+ Python 2.7/3.5\n"+
        "+ SQL\n" +
        "  + MySQL\n" +
        "  + Postgres\n" +
        "+ NodeJS\n" +
        "+ ES6 JavaScript\n" +
        "+ ReactJS\n" +
        "+ CSS\n" +
        "+ HTML\n" +
        "\nI am currently building up my portfolio and exploring my interest, " +
        "here are a few that I am a little proud of.\n" +
        "- ### [Socket.io Experiment](https://github.com/aaronclong/react-polling)\n" +
        "- ### [Volunteer Generator](https://github.com/aaronclong/volunteer-generator)\n",

        "When I'm not pounding away at my keyboard, I generally find myself reading, watching youtube, urban exploring, and feeding my coffee addiction." +
        "\n\nP.S. I love GIFs!!!\n\n" +
        "![Cats Being Cats](https://i.imgur.com/sXDYnDe.gif)"

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