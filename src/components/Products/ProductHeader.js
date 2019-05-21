import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartCounter from '../Cart/CartCounter';
import { AppTitle } from '../../config';

class ProductHeader extends Component {
  componentWillMount() {
    const script = document.createElement('script');

    script.src = '../../js/production.min.js';
    script.async = false;

    document.body.appendChild(script);
  }

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
            <h1>Product details for {this.props.product.title}</h1>
          </div>
        </div>
      </header>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(ProductHeader);
