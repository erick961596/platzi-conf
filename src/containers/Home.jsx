import React from 'react';
import Products from '../components/Products';
import initialState from "../initialState";

import Seo from '../components/Seo';

const Home = () => {
    return (
        <>
            <Seo>
                <title>Platzi conf - merch</title>
                <meta name="description" content="Platzi conf merch" />
                <meta name="image" content="https://platzi.com/static/images/platzi-conf-logo.png" />
                <meta name="keywords" content="platzi, conf, merch" />
                <meta property="og:title" content="Platzi conf - merch" />
                <meta property="og:description" content="Platzi conf merch" />
                <meta property="og:image" content="https://platzi.com/static/images/platzi-conf-logo.png" />
                <meta property="og:url" content="https://platzi.com/conf-merch" />
                
            </Seo>
       <Products />
        </>
    );
}

export default Home;