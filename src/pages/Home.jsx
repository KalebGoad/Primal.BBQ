import React, {useState} from 'react';
import MyRoutes from '../components/Routes/Routes.jsx';
import data from '../assets/data/data.js';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/header/Header';
// import HeroSlider from '../components/hero-slider/HeroSlider';
// import PopularMenu from '../components/popular-menu/PopularMenu';
// import ChooseUs from '../components/choose-us/ChooseUs';
// import Footer from '../components/footer/footer';
// import Cart from '../components/cart/Cart';

const Home = () => {
    const { productItems } = data;
    const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if(ProductExist) {
        setCartItems(cartItems.map((item) => item.id === product.id 
          ? {...ProductExist, quantity: ProductExist.quantity + 1}
          : item)
        );
      } else {
        setCartItems([...cartItems, {...product, quantity: 1}]);
      };
    };

    const handleRemoveProduct = (product) => {
      const ProductExist = cartItems.find((item) => item.id === product.id);
        if(ProductExist) {
          setCartItems(cartItems.filter((item) => item.id !== product.id));
        } else {
          setCartItems(
            cartItems(
              cartItems.map((item) => 
              item.id === product.id 
              ? { ...productItems, quantity: ProductExist.quantity - 1 }
              :item)
            )
          );
        }
        // somthing is up with this remove product. It removes everything while the add function works normally. Need to find route cause. Looks like the wording is different, perhaps making it the same will fix.
        

    };

    const handleCartClearance = () => {
      setCartItems([]);
    }

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
      </Router>
    </div>
  );
};

export default Home;
