import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from "../containers/Home";
import Checkout from "../containers/Checkout";
import  NotFound  from "../containers/NotFound";
import Information from "../containers/Information";
import Payment from "../containers/Payment";
import Success from "../containers/Success";
import Layout from '../components/Layout';


import AppProvider from "../context/AppContext";



const App = () => {
    return(
        <AppProvider>
<BrowserRouter>
        <Layout>
        <Routes>
                <Route path="/" element={ <Home/>} />
                <Route path="/checkout" element={<Checkout/>} />
                <Route path="/checkout/information" element={<Information/>} />
                <Route path="/checkout/payment" element={<Payment/>} />
                <Route path="/checkout/success" element={<Success/>} />
                
                <Route path='*' element={<NotFound/>} />
              </Routes> 
        </Layout>
            
        </BrowserRouter>
        </AppProvider>
        
    );
}

export default App;