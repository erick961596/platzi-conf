import React, {useContext} from 'react';
import { AppContext } from '../context/AppContext';
import "../styles/components/Success.css";

import Map from '../components/Map';

import useGoogleAddress from '../hooks/useGoogleAddress';

const Success = () => {

    const { state, addNewOrder } = useContext(AppContext);
    const { cart, buyer } = state;
    const  address  = useGoogleAddress(buyer[0]['location']);

  
    return (
        <div className='Success'>
            <div className='Success-content'>
                <h3> {buyer[0]['name']}  Gracias por tu pedido</h3>
                <span class="">Tu pedido llegara en 4 dias</span>
                <div className='Success-map'>
                    
                        <Map address={address}/>
                    
                    
                    
                </div>
            </div>
        </div>
    );
}

export default Success;