import React, { useContext, useMemo } from 'react';
import '../styles/components/Payment.css';
import { Link, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

import { PayPalButton } from 'react-paypal-button-v2';

import config from '../config/index';

const Payment = ( ) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const history = useNavigate();
  const paypalOptions= {
      clientId: config.clientIdPaypal,
        currency:'USD',
        env:'sandbox',
        intent:'capture'
        
  }

  const buttonStyles ={
    label: 'Pay with PayPal',
    size: 'responsive',
    shape: 'rect',
  }

  const handledSumTotal = useMemo(() => {
    // const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    // return cart.reduce(reducer, 0);
    return cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0);


}, [cart]);


const handledPaymentSuccess = (details,data) => {
     console.log('Payment Success', details, data);
    if(details.status ==='COMPLETED'){
        alert(`Payment Successful: ${data.paymentID}`);
        const newOrder ={
            paymentID: data.paymentID,
            cart: cart,
            total: handledSumTotal,
            buyer,
            payment:data
        }
        addNewOrder(newOrder);
        history('/checkout/success');
    }
}

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3 className="">Resumen de pedido</h3>

        {cart.map((product) => (
          <div className="Payment-product" key={product.id}>
            <div className="Payment-productData">
              <h4>{product.title}</h4>
              <p>Cantidad: {product.count}</p>
              <p>Precio: ${product.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="Paypal">
        <PayPalButton
        paypalOptions={paypalOptions}
        buttonStyles={buttonStyles}
        amount={handledSumTotal}
          // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
         
          onSuccess={ (details, data) =>{
            console.log('Payment Success', details, data);
            handledPaymentSuccess(details,data);
           
          }


          }
          
          
        
         
        />
      </div>
    </div>
  );
};

export default Payment;


