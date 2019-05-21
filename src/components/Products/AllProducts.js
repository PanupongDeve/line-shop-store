import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductImage from './ProductImage';
import { product, category } from '../../service/FirebaseService/CloundFireStore/model';

class AllProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  async componentWillMount() {
    await product.subscribe(this.handleReviceProducts);
  }

  handleReviceProducts = async products => {
    products = await product.includOptionalField(products, 'category',category)
    this.setState({ products });
  };

  render() {
    const { products } = this.state;
    console.log('products', this.state.products);
    if (products.length === 0) {
      return (
        <main role="main" id="container" className="main-container push">
          <section className="products">
            <div className="content">
              <p>You do not have any products</p>
            </div>
          </section>
        </main>
      );
    }
    return (
      <main role="main" id="container" className="main-container push">
        <section className="products">
          <div className="content">
            <div className="product-list">
              {products.map((product, index) => {
                let background = '#d9d9d9';
                return (
                  <a
                    className="product-item"
                    href={'/product/' + product.documentId}
                    key={index}>
                    <div
                      className="product-image"
                      style={{ background: background }}>
                      <ProductImage product={product}  background={background} />
                    </div>
                    <div className="overlay">
                      <div
                        className="overlay-background"
                        style={{ background: '#aaaaaa' }}
                      />
                      <div className="overlay-content">
                        <div className="title">{product.title} / {product.unit} </div>
                        <div className="title">{product.category.title}</div>
                        <div className="price">
                            {product.price} บาท
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    );
  }
}

// const isThereACurrencyPrice = product => {
//   try {
//     return (
//       <div className="price">
//         {product.meta.display_price.with_tax.amount / 100}
//       </div>
//     );
//   } catch (e) {
//     return <div className="price">Price not available</div>;
//   }
// };

// const AllProducts = props => {
//   if (props.css !== null && props.products.products.data.length > 0) {
//     let test = [];
//     var products = props.products.products;
//     const tests = product.getAll();
//     tests.then(value => {
//       test = value;
//     })
//     console.log('products', test);
//     return (
//       <main role="main" id="container" className="main-container push">
//         <section className="products">
//           <div className="content">
//             <div className="product-list">
//               {products.data.map(function(product) {
//                 let background;
//                 if (product.background_colour) {
//                   background = product.background_colour;
//                 } else {
//                   background = '#d9d9d9';
//                 }

//                 return (
//                   <a
//                     className="product-item"
//                     href={'/product/' + product.id}
//                     key={product.id}>
//                     <div
//                       className="product-image"
//                       style={{ background: background }}>
//                       <ProductImage product={product} products={products} />
//                     </div>
//                     <div className="overlay">
//                       <div
//                         className="overlay-background"
//                         style={{ background: '#aaaaaa' }}
//                       />
//                       <div className="overlay-content">
//                         <div className="title">{product.name}</div>
//                         {isThereACurrencyPrice(product)}
//                       </div>
//                     </div>
//                   </a>
//                 );
//               })}
//             </div>
//           </div>
//         </section>
//       </main>
//     );
//   }

//   return (
//     <main role="main" id="container" className="main-container push">
//       <section className="products">
//         <div className="content">
//           <p>You do not have any products</p>
//         </div>
//       </section>
//     </main>
//   );
// };

// const mapStateToProps = ({ products }) => ({
//   products
// });

export default AllProducts;
