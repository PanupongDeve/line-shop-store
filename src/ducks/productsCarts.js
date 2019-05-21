const ADD_CART = 'product_add_cart';
const GET_CART = 'porudct_get_cart';

const initialState = {
    cart: []
};

export default (state = initialState, action) => {
    switch (action.type) {
      case ADD_CART:
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