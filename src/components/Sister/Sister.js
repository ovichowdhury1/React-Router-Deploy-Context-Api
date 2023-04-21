import React from 'react';
import { useContext } from 'react';
import { moneyContext } from '../Grandpa/Grandpa';

const Sister = ({house}) => {
    const [money,setMoeny] = useContext(moneyContext);
    return (
        <div>
            <h1>sister</h1>
            <p>house:{house}</p>
            <p><small>money: {money}</small></p>
            <button onClick={ ()=> setMoeny(money+1000) }>Add 1000</button>
        </div>
    );
};

export default Sister;