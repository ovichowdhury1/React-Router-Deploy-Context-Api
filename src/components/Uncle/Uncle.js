import React, { useContext } from 'react';
import { moneyContext } from '../Grandpa/Grandpa';

const Uncle = ({house}) => {
    const [money,setMoney] = useContext(moneyContext);
    return (
        <div>
            <h1>Uncle</h1>
            <p>house : {house}</p>
            <p><small>money: {money}</small></p>
        </div>
    );
};

export default Uncle;