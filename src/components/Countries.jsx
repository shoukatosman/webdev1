import React, { useEffect, useState } from "react";
import Country from "./Country/Country";

const Countries=()=> {
        const [countries, setCountries] = useState([]);
        
        useEffect(()=> {
        fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => setCountries(data));
        }, []);

        console.log(countries);
        

    return(
    <div> 
      <h1 className="font-semibold text-center my-7 text-4xl underline text-gray-900">See all Countries made by N242-1</h1>

      <div className="grid grid-cols-4 gap-6 mx-20">
      {countries.map((country)=>(
       <Country key={country.name.common} country={country}
       ></Country>
    ))}
      </div>
    </div>
    );
};
export default Countries;