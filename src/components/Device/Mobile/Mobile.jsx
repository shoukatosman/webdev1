import React from 'react';

const Mobile = (props) => {
    // console.log(props);
    // props.price = 140000;
    // const student = {name: 'Bapparaj'}
    // console.log(student);
    // student.name="Riyaj";
    // console.log(student);
    
    return (
        <div className= "border-2 border-blue-500 m-6 p-5">
            <h1>mobile : {props.price}</h1>
        </div>
    );
};

export default Mobile;