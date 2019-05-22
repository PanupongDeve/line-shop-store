const ADD_CART = 'product_add_cart';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';

const initialState = {
    cart: []
};

export default (state = initialState, action) => {
    switch (action.type) {
      case ADD_CART:
        return { ...state, cart: action.value };
      case REMOVE_PRODUCT:
          return { ...state, cart: action.value };
      default:
        return { ...state };
    }
  };

export const addCart = (cart) => dispatch => {
    dispatch({
        type: ADD_CART,
        value: cart
    })
}

export const removeProduct = (products, product) => dispatch => {
  let newProducts = products.filter((p) => !(p.documentId === product.documentId));
  dispatch({
    type: REMOVE_PRODUCT,
    value: newProducts
  })
}