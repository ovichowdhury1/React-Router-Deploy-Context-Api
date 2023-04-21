import React from 'react';
import Friend from '../friend/Friend';

const Cousin = ({house}) => {
    return (
        <div>
            <h1>Cousin</h1>
            <p>house: {house}</p>
            <section>
                <Friend></Friend>
            </section>
        </div>
    );
};

export default Cousin;