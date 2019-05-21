import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SingleProduct from './SingleProduct';
import CartHeader from '../Cart/CartHeader';
import ProductHeader from './ProductHeader';
import Loading from '../global/Loading';
import MobileNav from '../global/Mobile/MobileNav';

import { GetProducts } from '../../ducks/products';

import {
  product
} from '../../service/FirebaseService/CloundFireStore/model';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      loading: true
    }
  }

  async componentWillMount() {
    const { documentId} = this.props.match.params;
    let data = await product.getById(documentId);
    this.setState({ 
      product: data,
      loading: false
   });
  }

  render() {
    if (this.state.loading) {
      return (
            <div>
              {/* <MobileNav /> */}
              <CartHeader />
              <Loading />
            </div>
          );
    }
    return (
      <div>
          {/* <MobileNav /> */}
                 <ProductHeader product={this.state.product} />
                 <SingleProduct  product={this.state.product} history={this.props.history} />
               </div>
    );
  }
}




// class Product extends Component {
//   componentDidMount() {
//     const { fetched } = this.props;

//     if (!fetched) {
//       this.props.GetProducts();
//     }
//   }

//   render() {
//     const { products } = this.props;

//     if (products) {
//       return (
//         <div>
//           <MobileNav />
//           <ProductHeader />
//           <SingleProduct />
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <MobileNav />
//           <CartHeader />
//           <Loading />
//         </div>
//       );
//     }
//   }
// }

// const mapStateToProps = ({ products: { fetched, products } }) => ({
//   fetched,
//   products
// });

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(
//     {
//       GetProducts
//     },
//     dispatch
//   );

export default Product;
