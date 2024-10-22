import React, { useEffect, useState } from 'react';


const Products = () => {

const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch(" ")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div>
          Products{products?.length}
        </div>
    );
};

export default Products;


