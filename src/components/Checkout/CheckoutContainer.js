import React, { Component } from 'react';
import CheckoutForm from './CheckoutForm';
import CartHeader from '../Cart/CartHeader';
import MobileNav from '../global/Mobile/MobileNav';
import Loading from '../global/Loading';
import { connect } from 'react-redux';

function mapStateToProps(state) {
  return state;
}

class CheckoutContainer extends Component {
  componentWillMount() {
    const script = document.createElement('script');

    script.src = '../../js/production.min.js';
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    console.log('props', this.props);
    if (this.props.payments.processing === false) {
      return (
        <div>
          <CartHeader />
          <CheckoutForm history={this.props.history} cart={this.props.productsCarts.cart} />
        </div>
      );
    } else {
      return (
        <div>
          <CartHeader />
          <Loading />
        </div>
      );
    }
  }
}

export default connect(mapStateToProps)(CheckoutContainer);
