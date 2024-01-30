// Product.js
import React from 'react';
import { useParams } from 'react-router-dom';
import all_product from '../Components/Assests/all_product';
import IndividualItem from '../Components/IndividualItemPage/IndividualItem';

function Product() {
  const { productId } = useParams();

  // Find the product with the matching ID
  const selectedProduct = all_product.find((product) => product.id === Number(productId));

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  const { category, name, image, old_price, new_price } = selectedProduct;

  return (
    <div>
      <IndividualItem product={selectedProduct} id={productId} category={category} name={name} image={image} old_price={old_price} new_price={new_price}/>
    </div>
  );
}

export default Product;









