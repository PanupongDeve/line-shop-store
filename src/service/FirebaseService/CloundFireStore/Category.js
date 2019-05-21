import {
    Base
} from './Base';


class Category extends Base {
    constructor(name){
        super();
        this.collection = `${name}`
    }
}

export default Category;