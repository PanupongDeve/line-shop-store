import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import CartCounter from './CartCounter';
import { AppTitle } from '../../config';

const CartHeader = props => {
  let headerText;

  if (props.location.pathname.includes('cart')) {
    headerText = 'Shopping Cart';
  } else if (props.location.pathname.includes('checkout')) {
    headerText = 'Checkout';
  } else if (props.location.pathname.includes('order-confirmation')) {
    headerText = 'Order Confirmation';
  }

  return (
    <header className="push">
      <div className="nav-container">
        <nav className="primary-nav">
          <Link to="/">Products</Link>
          {/* <Link to="styles">Styles</Link> */}
        </nav>
       <h1>{AppTitle}</h1>
        <nav className="secondary-nav">
          <CartCounter />
        </nav>
      </div>
      <div className="header-container smaller">
       
      </div>
    </header>
  );
};

export default withRouter(CartHeader);
