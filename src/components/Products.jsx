import React, {useContext} from 'react';
import ProductItem from './ProductItem';

import  "../styles/components/Products.css"
import {AppContext} from '../context/AppContext';

const Products = () => {
    const {state, AddToCart} = useContext(AppContext);
    
    const {products} = state;

    const handleAddToCart = product => ()=> {
        AddToCart(product);
    }

    return (
        <div className="Products">
            <div className="Products-items">
                {
                    products.map(product => (
                        <ProductItem key={product.id} item={product} handleAddToCart={handleAddToCart} />
                    ))
                }
                </div>
        </div>
    );
}

export default Products;