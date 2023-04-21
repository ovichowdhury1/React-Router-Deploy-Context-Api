import React from 'react';
import './Cart.css'

const Cart = ({cart,handleremoveCart}) => {
          let message;
          if(cart.length === 0){
             message = <p>Pleased Added one more item</p>
          }
          else if(cart.length === 1){
            message = <div>
                    <h1>Amr jonno ekta </h1>
                    <p>tomar jonno ekta </p>
                    <p><small>tahar jonno ekta </small></p> 
                </div>
          }
          else{
            message = <p>Thanks for buying</p>
          }
    return (
        <div>
            <h3 className={cart.length === 2 ? `orange`: `purple`}>Order Summary: </h3>
            <h4 className={`bold ${cart.length===2 ? 'tomato': 'yellow'}`}>Order Quantity:{cart.length}</h4>
            {
                cart.map(tshirt => <p
                key={tshirt.id}
                >
                    {tshirt.name}
                    <button onClick={() => handleremoveCart(tshirt)}>X</button>

                </p>)
            }
            {
                message
            }
            {cart.length===3 ? <p>Kina holo</p> : <p>Kino Kino</p>}
            <p>and operator</p>
            {cart.length === 2 && <h1>double</h1>}
            {cart.length === 4 || <h1>4 ta na </h1>}
           
        </div>
    );
};

export default Cart;