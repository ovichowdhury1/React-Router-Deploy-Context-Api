import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Aunty from '../Aunty/Aunty';
import Uncle from '../Uncle/Uncle';
import './grandpa.css';

export const RingContext = createContext('matir ring');
export const moneyContext = createContext(500);
const Grandpa = () => {

     const [house,setHouse] = useState(1);
     const [money,setMoney] = useState(500);
    
    return (
       <RingContext.Provider value={[house,setHouse]}>
            <moneyContext.Provider value={[money,setMoney]}>
                    <div className='grandpa'>
                            <h2>Grandpa</h2>
                            <p><small>House: {house}</small></p>
                            <section className='flex'>
                                <Father house={house} ></Father>
                            
                                <Uncle house={house}></Uncle>
                                <Aunty house={house}></Aunty>
                            </section>
                    </div>
            </moneyContext.Provider>
       </RingContext.Provider>
    );
};

export default Grandpa;