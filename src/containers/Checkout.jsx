import React, {useContext, useMemo} from 'react';
import { Link } from 'react-router-dom';
import {MdShoppingCart, MdDeleteOutline } from "react-icons/md";
import "../styles/components/Checkout.css";

import { AppContext } from '../context/AppContext';


const Checkout = () => {

    const { state, RemoveFromCart } = useContext(AppContext);
    const {cart} = state;

    const quantity = useMemo(() => {
        return cart.length;
    }, [cart]);

    const handleRemoveFromCart = product => ()=> {
        RemoveFromCart(product);
    }

    const handledSumTotal = useMemo(() => {
        // const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        // return cart.reduce(reducer, 0);
        return cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);


    }, [cart]);
   
    return (
        <div className='Checkout'>
            <div className="Checkout-content">
            <h3> {cart.length >0?"Lista de pedido" :"No hay pedidos"} </h3>
            {
                cart.map (product => (
                <div className="Checkout-element">
                    <h4 className="">{ product.title} </h4>
                    <span className="">{ product.price}</span>
                    <div>
                <button type='button' className="Checkout-button" onClick={handleRemoveFromCart(product)} > <MdDeleteOutline />  </button>
                </div>
                </div>
                        
                ))
            }   
            {
                cart.length > 0 && (
                    <div className="Checkout-item">
                    <div className="Checkout-sidebar">
                    <h3> {`Precio total: ${handledSumTotal}` } </h3>
                    <Link to="/checkout/information">
                    
                    <button type='button' className="Checkout-button">Continua</button>
                    </Link>
                </div>
                </div>
                )
            }


            
            </div>
            
        </div>
    );
}

export default Checkout;