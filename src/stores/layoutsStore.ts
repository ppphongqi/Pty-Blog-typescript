import {observable} from 'mobx';

class LayoutStore {
    @observable public status ?: object = {
        'welcome':true ,
    }
}




const layoutStore = new LayoutStore();

export default layoutStore;