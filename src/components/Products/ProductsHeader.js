import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartCounter from '../Cart/CartCounter';
import { AppTitle } from '../../config';

class ProductsHeader extends Component {
  render() {
    
    return (
      <header className="push">
        <div className="nav-container">
          <nav className="primary-nav">
            <Link to="/">Products</Link>
            {/* <Link to="/styles">Styles</Link> */}
          </nav>
          <h1>{AppTitle}</h1>
          <nav className="secondary-nav">
            <CartCounter />
          </nav>
        </div>
        <div className="header-container hide-content">
          <div className="content">
            <h1>Products listing</h1>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ProductsHeader);
