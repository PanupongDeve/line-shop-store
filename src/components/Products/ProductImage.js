import React from 'react';

const ProductImage = props => {
  return (
    <img
    alt={props.product.title}
    src={props.product.product_image_url}
    style={{ background: props.background }}
  />
  );
};

export default ProductImage;
