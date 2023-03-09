import React, {useEffect, useState} from 'react';
import MyRoutes from '../components/Routes/Routes.jsx';
import data from '../assets/data/data.js';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/header/Header';
// import HeroSlider from '../components/hero-slider/HeroSlider';
// import PopularMenu from '../components/popular-menu/PopularMenu';
// import ChooseUs from '../components/choose-us/ChooseUs';
import Footer from '../components/footer/footer';
// import Cart from '../components/cart/Cart';

const Home = () => {
    const { productItems } = data;
    const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist) {
        setCartItems(cartItems.map((item) => item.id === product.id 
          ? {...ProductExist, quantity: ProductExist.quantity + 1}
          : item));
          localStorage.setItem('cartItems', JSON.stringify(cartItems));
      } else {
        setCartItems([...cartItems, {...product, quantity: 1}]);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
      };
    };

    const handleRemoveProduct = (product) => {
      const ProductExist = cartItems.find((item) => item.id === product.id);
        if(ProductExist.quantity === 1) {
          setCartItems(cartItems.filter((item) => item.id !== product.id));   
          localStorage.setItem('cartItems', JSON.stringify(cartItems));

        } else {
          setCartItems(
              cartItems.map((item) => 
              item.id === product.id 
              ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
              : item
              )
          );
          localStorage.setItem('cartItems', JSON.stringify(cartItems));

        }
    };

    const handleCartClearance = () => {
      setCartItems([]);
      localStorage.removeItem('cartItems', JSON.stringify(cartItems));
    };

    useEffect(() => {
      setCartItems(
        localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : []
      );
    }, []);

  return (
    <div>
      <Router>
            <Header cartItems={cartItems}/>
            <MyRoutes 
              productItems={productItems} 
              cartItems={cartItems} 
              handleAddProduct={handleAddProduct}
              handleRemoveProduct={handleRemoveProduct}
              handleCartClearance={handleCartClearance}
          />
          {/* <Footer /> */}
      </Router>
    </div>
  );
};

export default Home;
