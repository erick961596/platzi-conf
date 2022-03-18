import React, {useState} from 'react';
import initialState from '../initialState';
const useInitialSate = () => {

    const [state, setState] = useState(initialState);
    
    const AddToCart = product => {
        setState({
            ...state,
            cart: [...state.cart, product]
        })
    }

    const RemoveFromCart = product => {
        setState({
            ...state,
            cart: state.cart.filter(item => item.id !== product.id)
        })
    }

    const addToBuyer = product => {
        setState({
            ...state,
            buyer: [...state.buyer, product]
        })
    }

    const addNewOrder = order => {
        setState({
            ...state,
            orders: [...state.orders, order]
        })
    }
    return {
        state,
        AddToCart,
        RemoveFromCart,
        addToBuyer,
        addNewOrder
    }
}


export default useInitialSate;