import React from 'react';
import Products from '../components/Products';
import initialState from "../initialState";

import Seo from '../components/Seo';

const Home = () => {
    return (
        <>
            <Seo>
                title ="Shop"
                description ="Platzi conf merch"
               image ="https://platzi.com/static/images/platzi-conf-logo.png" 
              
            </Seo>
       <Products />
        </>
    );
}

export default Home;