import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { GetCartItems } from '../../ducks/cart';


const getAmoutProductInCart = (cart) => {
  let sum_amount = 0;
  cart.forEach(c => {
    sum_amount = sum_amount + c.amount
  });
  console.log('sum_amount', sum_amount)
  return sum_amount;
}

class CartCounter extends Component {
  render() {
    return (
      <Link to="/cart" className="cart" aria-live="polite">
         <span className="cart-name" aria-hidden="true">
           Cart (
         </span>
         {/* <span className="hide-content">The cart contains </span> */}
         <span className="">{getAmoutProductInCart(this.props.cart)}</span>
         {/* <span className="hide-content">items.</span> */}
         <span className="cart-name" aria-hidden="true">
           )
         </span>
       </Link>
    );
  }
}

// class CartCounter extends Component {
//   componentDidMount() {
//     this.props.GetCartItems();
//   }

//   render() {
//     let quantity = 0;

//     if (this.props.cart.fetched === true) {
//       var items = this.props.cart.cart.data;

//       quantity = items.reduce((sum, item) => sum + item.quantity, 0);
//     }

//     return (
//       <Link to="/cart" className="cart" aria-live="polite">
//         <span className="cart-name" aria-hidden="true">
//           Cart (
//         </span>
//         <span className="hide-content">The cart contains </span>
//         <span className="cart-count">{quantity}</span>
//         <span className="hide-content">items.</span>
//         <span className="cart-name" aria-hidden="true">
//           )
//         </span>
//       </Link>
//     );
//   }
// }

const mapStateToProps = (state) => {
  return {
    cart: state.productsCarts.cart
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      GetCartItems
    },
    dispatch
  );

export default connect(mapStateToProps)(CartCounter);
