import React from 'react';

const ProductItem = ({ item, handleAddToCart }) => {
  return (
    <div className="Products-item">
        <img src={item.image} />
      <div className="Product-item-info">
        <h3>
          {item.title}
          <span>{item.price}</span>
        </h3>
        <p>{item.description}</p>
        <button onClick={handleAddToCart(item)} >Comprar</button>
      </div>
    </div>
  );
};

export default ProductItem;
