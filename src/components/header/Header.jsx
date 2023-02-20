
import React from 'react';
import './header.css';
// import data from '../../assets/data';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';




const Header = ({cartItems}) => {

    return (
        <header>

        <Container>
                <div className="header">
                    <div className="logo">
                        <h2 class="d-flex align-items-center gap-1">
                            <span>
                                <i class="ri-restaurant-line"></i>
                            </span>{" "}
                            <Link to="/">
                                Primal BBQ
                            </Link>
                        </h2>
                    </div>
                        <ul>
                            <li>
                                <Link to="/sign-up" className="signUp">
                                    <h5>Sign Up</h5></Link>{/* Debug how to set up font-awesome icon here for a symbol that looks like a form */}
                            </li>
                        </ul>
                    <div className="header-links">
                        <ul>
                            <li className="header-link-mobile">
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                        <ul>
                            <li className="header-link-mobile">
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                        <ul>
                            <li className="header-link-mobile">
                                <Link to="/">Contact</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <Link to="/cart" className="cart"><i class="ri-shopping-basket-line"></i>
                                <span className="cart-length">
                                    {cartItems.length === 0 ? "" : cartItems.length}
                                </span>
                                                    {/* <i class="fas fa-shopping-cart" /> if this doesn't work, find another solution. */}
                                    {/* <span className="cart-length">
                                        {cartItems.length === 0 ? "" : cartItems.length}
                                    </span> */}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
        </Container>

        </header>
  )
};


export default Header;
