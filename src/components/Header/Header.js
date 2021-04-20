import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import UserContext from '../../UserContext';
import './Header.css';

const Header = () => {
    const [user,setUser] =  useContext(UserContext); 

    console.log(user);

    return (

        <header>
        <div className="container">
            <div className="navbar">
                 <div className="logo__img--box">
                     <img className="logo" src="https://i.ibb.co/VM6FNzf/Chaldal-com-logo.png" alt=""/>
                 </div>
               <nav className="navbar__nav">
                        <Link className="nav__link"  to="/">Home</Link>
                        <Link className="nav__link" to="/">Orders</Link>
                        <Link className="nav__link" to="/product">Admin</Link>
                        <Link className="nav__link" to="/">Deals</Link>
                        {/* <Link className="btn__primary" to="/">Login</Link> */}

                        {
                          user.email ? <Link className="nav__link" to="/">{user.name}</Link>
                          :
                         <Link className="btn__primary" to="/login">Login</Link>
                        }

                        {/* {
                            !user.isLoggedIn && <Link className="btn__primary" to="/login">Login</Link>
                        }
                        {
                            user.isLoggedIn && <Link className="nav__link" to="/">{user.name}</Link>
                            
                        } */}
                        
               </nav>
            </div>
        </div>
    </header>
    );
};

export default Header;