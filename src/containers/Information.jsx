import React, {useRef, useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/components/Information.css";

import { AppContext } from '../context/AppContext';
const Information = () => {

    const { state, addToBuyer } = useContext(AppContext);
    const form = useRef(null);
    const history = useNavigate();

    const {cart} = state;

    const handleSubmit = () => {
        
        const formData = new FormData(form.current);
        const buyer = {
            name: formData.get('name'),
            email: formData.get('email'),
            location: formData.get('location'),
            apto: formData.get('apto'),
            ciudad: formData.get('ciudad'),
            country: formData.get('country'),
            zip: formData.get('zip'),
            phone: formData.get('phone'),
            
        }
        console.log(buyer);
        addToBuyer(buyer);
        
        history('/checkout/payment');

    }
    return (
        <div className='Information'>
            <div className='Information-content'>
                <h1>Information</h1>

                <form ref={form}>
                    <label for="name" class="">
                        Name:
                        <input type="text" name="name" class="" placeholder='Name' />
                    </label>
                    <label for="email" class="">
                        <input type="email" name="email"  class="" placeholder='Email' />
                    </label>
                    <label for="location" class="">
                        <input type="text" name="location" class="" placeholder='Location' />
                    </label>
                    <label for="apto" class="">
                        <input type="text" name="apto"  class="" placeholder='Apto' />
                    </label>
                    <label for="ciudad" class="">
                        <input type="text" name="ciudad" class="" placeholder='Ciudad' />
                    </label>
                    <label for="country" class="">
                        <input type="text" name="country"  class="" placeholder='Country' />
                    </label>
                    <label for="zip" class="">
                        <input type="text" name="zip" class="" placeholder='Zip code' />
                    </label>
                    <label for="phone" class="">
                        <input type="text" name="phone"  class="" placeholder='Phone' />
                    </label>
                </form>
            </div>
            <div className='Information-buttons'>
                <Link to="/checkout/">
                <button className='Information-back'>
                    Regresar
                </button>
                </Link>
               
                <button type='button' className='Information-next' onClick={ handleSubmit } >
                    Continuar
                </button>
                
                
            </div>
            <div className='Information-sidebar'>
            <h3>Pedido</h3>
            {
                cart.map (product => (
                    <div key={product.title} className='Information-item'>
                    <div className='Information-element'>
                        <h4>{ product.title}</h4>
                        <span class="">$ {product.price}</span>
                    </div>
                </div>
                )

                )
            }

            </div>
        </div>
    );
}

export default Information;