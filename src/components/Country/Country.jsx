import React from "react";

const Country =({country})=> {
    const {name,region,independent, population,flags,area,} = country;
return (
<div className="border-2 p-10 rounded-md border-green-400 relative">
       <img className="h-60 border-2 border-green-600" src={flags?.png} alt="" />
    <h4 className="text-2xl mt-5">Name: {name?.common}</h4>
    <h4 className="text-2xl mt-1">People: {population}</h4>
    <h4 className="text-2xl mt-1">Region: {region}</h4>
    <h4 className="text-2xl mt-1">Independent: {independent}</h4>
    <h4 className="text-2xl mb-5">Area: {area}</h4>
    <button className="btn btn-outline w-full absolute bottom-0 left-0 right-0">See Details</button>
    </div>
);
};
export default Country;

