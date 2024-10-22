import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons/faTrash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Cart = () => {
    return (
        <>
<h5 className=" text-center my-8 text-2xl text-black">Order Summary</h5>
<div className="ps-6 my-12">

<p className=" pb-6 text-body">Selected Items: 6</p>
<p className=" pb-6 text-body">Total Price: $1140</p>
<p className=" pb-6 text-body">Total Shipping Charge: $5</p>
<p className=" pb-6 text-body">Tax: $114</p>
<h6 className="font-semibold">Grand Total: $1559</h6>
</div>
<div className="p-4">
<button className="bg-secondary block w-full rounded-md text-white p-[13px]">Clear Cart 
<FontAwesomeIcon icon={faTrash} />
</button>
<button className="bg-accent mt-4 block w-full rounded-md text-white p-[13px]">Clear Cart 
<FontAwesomeIcon icon={faArrowRight} /></button>
</div>  
        </>
    );
};

export default Cart;