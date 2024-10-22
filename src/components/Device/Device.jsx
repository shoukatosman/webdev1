import React from 'react';
import Mobile from './Mobile/Mobile';
import Television from '../Television/Television';

const Device = () => {
    const price = 150000;
    return (
        <div className= "border-2 border-blue-500 m-6 p-5">
            <h1>Hellow devices</h1>
            <Mobile price = {price}></Mobile>
            <Television></Television>
        </div>
    );
};

export default Device;