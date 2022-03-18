import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import {MdShoppingCart, MdDeleteOutline } from "react-icons/md";
import "../styles/components/Header.css";

import { AppContext } from '../context/AppContext';

const Header = () => {
  const { state } = useContext(AppContext);
  
  const { cart } = state;
    return (
        
        <div className="Header">
           <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
    Platzi
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/">
              Home
          </Link>
        </li>
        {
          cart.length > 0 && (
          <li className="nav-item">
                    <Link to="/checkout">
                         <MdShoppingCart size="1rem" /> {cart.length}  
                    </Link>
          </li>
          )
        }
        

      </ul>
      
    </div>
  </div>
</nav>
            
            </div>
    );
}

export default Header;

