import React from 'react';
import './Home.css';
import Product from './Product'
import Banner from '../src/images/banner.png'

const Home = () => {
  return (
    <div className="home">
   <img className='home_img'
   src= {Banner} 
   alt=""/>
    <div className="home_row">
    <Product 
    id='12345'
    title='Acer Predator Helios 300 Gaming Laptop.'
    price={11.69}
    rating={5}
    image='https://images-na.ssl-images-amazon.com/images/I/71k45hZkLmL._AC_SX679_.jpg'
    />
    <Product 
    id='12345'
    title= 'Echo Dot (3rd Gen) - Smart speaker'
    price={11.69}
    rating={5}
    image='https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY218_.jpg'
    />
    </div>

    <div className="home_row">
    <Product 
    id='12345'
    title='HalfSun Fitness Tracker, Activity Tracker.'
    price={11.69}
    rating={5}
    image='https://m.media-amazon.com/images/I/51yb--paKZL._AC_UL320_.jpg'
    />
    <Product 
    id='12345'
    title='Product'
    price={11.69}
    rating={5}
    image='https://m.media-amazon.com/images/I/6182S7MYC2L._AC_UY218_.jpg'
    />
    <Product 
    id='12345'
    title='Product'
    price={11.69}
    rating={5}
    image='https://m.media-amazon.com/images/I/71fwbMm1NBL._AC_UL320_.jpg'
    />
    </div>

    <div className="home_row">
    <Product 
    id='12345'
    title='Product'
    price={11.69}
    rating={5}
    image='https://m.media-amazon.com/images/I/71fwbMm1NBL._AC_UL320_.jpg'
    />

    </div>
   
    </div>

    
  );
}

export default Home;
