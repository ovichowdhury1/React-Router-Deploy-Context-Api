import React from 'react';
import './TShirts.css'
const TShirts = ({tshirt,handleAddToCart}) => {
     const  {picture,name,price}= tshirt;

    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>Price: {price}</h4>
            <button onClick={() => handleAddToCart(tshirt)}>Buy This</button>
        </div>
    );
};

export default TShirts;