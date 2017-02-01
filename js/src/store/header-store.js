'use strict';

import { action, observable, computed, toJS} from 'mobx';

class HeaderDataStore {

    /**
     * Array contains Javascript Object Literatals
     *  containing
     *    id: integer
     *    name: string
     *    active: boolean
     */
    @observable navLinks = [
        { 
          id: 0,
          name: "About Me",
          active: true
        }
    ];
    
    /** @param{function} how to conver the links */
    getLinks(func) {
        return this.navLinks.map(i => func(toJS(i))); 
    }

    @action setActive(id) {
      this.navLinks.forEach(e => {
          if (id >= this.navLinks.length) return;
          if(e.id == id) {
              e.active = true;
              return;
          }
          e.active = false;
      })
    }
}

const headerStore = new HeaderDataStore();


//Data Store Singelton 
export default headerStore;