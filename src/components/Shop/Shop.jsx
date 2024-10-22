
import React from 'react';
import Cart from './Cart/Cart';
import Products from './Products/Products';

const Shop = () => {
    return (
        <div className="flex">
         <div className= "product w-4/5 bg-green-800">
            <Products></Products>
         </div>
    
         <div className="cart w-1/5 bg-primary">
         <Cart></Cart>
         </div>
        </div>
    );
};

export default Shop;


