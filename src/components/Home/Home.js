import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import TShirts from '../TShirts/TShirts';
import Cart from '../Cart/Cart';
import './Home.css';
const Home = () => {
    const tshirts = useLoaderData();
    const [cart,setCart]= useState([]);
    const handleAddToCart = tshirt =>{
        const exists = cart.find(ts => ts.id === tshirt.id);
        if (exists) {
            alert('already added');
        }
        else{
            const newCart = [...cart,tshirt];
            setCart(newCart); 
        }
        

    }
    const handleremoveCart = tshirt => {
        const remainning = cart.filter(ts => ts.id !== tshirt.id);
        setCart(remainning);
    }
    return (
        <div className='Home-Container'>
            <div className='tshirt-container'>
                {
                    tshirts.map(tshirt=> <TShirts
                    key={tshirt.id}
                    handleAddToCart={handleAddToCart}
                    
                    tshirt={tshirt}></TShirts>)
                }
            </div>
            <div className='Cart-container'>
                   <Cart handleremoveCart ={handleremoveCart}  cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;