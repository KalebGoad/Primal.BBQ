import React from 'react'
// import ProductCard from '../product-card/ProductCard';
// import PopularMenu from '../popular-menu/PopularMenu';
import MyProducts from '../products/products';
import Signup from '../sign-up/SignUp';
import Cart from '../cart/Cart';
import { Routes, Route } from 'react-router-dom';

const MyRoutes = ({ 
    productItems,
    cartItems, 
    handleAddProduct, 
    handleRemoveProduct,
    handleCartClearance 
  }) => {
    return (
      <div>
        <Routes>
          <Route path="/" exact 
            element={<MyProducts 
            productItems={productItems}   
            handleAddProduct={handleAddProduct}  
            />}  />
          <Route path="/cart" exact
                  element={<Cart 
                  cartItems={cartItems} 
                  handleAddProduct={handleAddProduct} 
                  handleRemoveProduct={handleRemoveProduct}
                  handleCartClearance={handleCartClearance} 
                  />} />
          <Route path="/sign-up" exact
                element={<Signup />} />
        </Routes>  
      </div>
    )
};

export default MyRoutes;