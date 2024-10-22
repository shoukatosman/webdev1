import "./App.css";


function App() {
 return (
        <div>
            <Person></Person>
            <h1 className="">My Core Concept React App</h1> 
            <section>Section</section>
            <a href="www.google.com"></a>
            <Person good="ali"></Person>
            <Person></Person>
        </div>
    );
}

export default App;

function Person (props){
    // console.log(props);
    const {good} = props;
    return(
        <div>
            <h2>Person Name:{good} </h2>
        </div>
    );
}
