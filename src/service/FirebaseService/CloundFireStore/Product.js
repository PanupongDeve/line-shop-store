import {
    Base
} from './Base';


class Product extends Base {
    constructor(name){
        super();
        this.collection = `${name}s`
    }
}

export default Product