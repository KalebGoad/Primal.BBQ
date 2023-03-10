import React from 'react';
import "./Cart.css";



const Cart = ({
    cartItems,
    handleAddProduct,
    handleRemoveProduct,
    handleCartClearance
}) => {
    // const itemTotal = cartItems.map((item) => item.quantity * item.price);
    const totalPrice = cartItems.reduce(
        (price, item) => price + item.quantity * item.price,
        0
    );

    

    return (
        <div className="cart-items">
            <h2 className="cart-items-header">Cart Items</h2>
            <div className="clear-cart">
                {cartItems.length >= 1 && (
                    <button className="clear-cart-button" onClick={handleCartClearance}>
                        Clear Cart
                    </button>
                )}
            </div>

            {cartItems.length === 0 && (
                <div className="cart-items-empty"> No items are added.</div>
            )}
            <div>
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-items-list">
                        <img
                            className="cart-items-image"
                            src={item.image}
                            alt={item.name}
                        />
                        <div className="cart-items-name">
                            {item.name}
                        </div>
                        <div className="cart-items-function">
                                <button
                                    className="cart-items-add"
                                    onClick={() => handleAddProduct(item)}
                                >
                                    +
                                </button>
                                    <div className="item-quantity">
                                        {item.quantity}
                                    </div>
                                <button
                                    className="cart-items-remove"
                                    onClick={() => handleRemoveProduct(item)}
                                >
                                    -
                                </button>
                        </div>
                        
                            <div 
                            className="cart-items-price">
                            ${item.price}
                            </div>
                            {/* <div className="item-total">
                            $ {itemTotal.toFixed(2)}
                            </div> */}
                    </div>
                    
                ))}
            </div>

            <div className="cart-items-total-price-name">
                Total Price:
                <div className="cart-items-total-price"> ${totalPrice.toFixed(2)}</div>  
                {/* Not complete, need to learn the math portion that allows for rounding to nearest hundreths (two decimal places). 0.00. */}
            </div>
        </div>
    );
};

export default Cart;