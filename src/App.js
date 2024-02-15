import React, { useState } from 'react';
import './App.css';
import Product from './Product';
import Cart from './Cart';

import Img1 from './img/bag 3.jpeg';
import Img2 from './img/bag 4.jpeg';
import Img3 from './img/bag.jpeg';
import Img4 from './img/bag2.jpeg';
import Img5 from './img/bottle.jpeg';
import Img6 from './img/br1.jpeg';
import Img7 from './img/br2.jpeg';
import Img8 from './img/br3.jpeg';
import Img9 from './img/cup.jpg';
import Img10 from './img/dress.jpg';
import Img12 from './img/dress3.jpeg';
import Img13 from './img/k3.jpeg';
import Img14 from './img/kurta.jpeg';
import Img15 from './img/kurta2.jpeg';
import Img16 from './img/nck.jpeg';


function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product, quantity: 1 }]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems(cartItems.map(item => item.id === productId ? { ...item, quantity: newQuantity } : item));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping Cart</h1>
      </header>
      <div className="content">
      <div className='product-heading'>
          <h2>Products</h2>
          </div>
        <div className="product-list">
          
          <Product id={1} name="Backpack" img={Img1} price={10} addToCart={addToCart} />
          <Product id={2} name="Vanity Bag" img={Img2}  price={20} addToCart={addToCart} />
          <Product id={3} name="Bag" img={Img3}  price={45} addToCart={addToCart} />
          
          <Product id={1} name="Stylish women bag" img={Img4} price={15} addToCart={addToCart} />
          <Product id={2} name="Water Bottle" img={Img5}  price={5} addToCart={addToCart} />
          <Product id={3} name="Necklace" img={Img6}  price={10} addToCart={addToCart} />

          <Product id={1} name="Gold Bracelet" img={Img7} price={15} addToCart={addToCart} />
          <Product id={2} name="Bracelet" img={Img8}  price={20} addToCart={addToCart} />
          <Product id={3} name="cup" img={Img9}  price={5} addToCart={addToCart} />

          <Product id={1} name="Dress" img={Img10} price={15} addToCart={addToCart} />
         
          <Product id={3} name="Gown" img={Img12}  price={15} addToCart={addToCart} />
          <Product id={3} name="kurta" img={Img13}  price={10} addToCart={addToCart} />

          <Product id={1} name="Stylish kurta" img={Img14} price={25} addToCart={addToCart} />
          <Product id={2} name="Kurta-Men" img={Img15}  price={20} addToCart={addToCart} />
          <Product id={3} name="Partywear Necklace" img={Img16}  price={30} addToCart={addToCart} />
        </div>
        <div className="cart">
          <h2>Cart</h2>
          <Cart items={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
        </div>
      </div>
    </div>
  );
}
export default App;