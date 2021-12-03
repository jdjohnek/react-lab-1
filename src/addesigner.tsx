import { useState } from "react";

function Addesigner( ) {


const [flavor, setFlavor] = useState("chocolate");
const [color, setColor] = useState(true);
const [fontSize, setFontSize] = useState(44)
    return (
        <div className="adDesigner">
        <div >
        <h1>Ad Designer</h1>
        

        <div className= { ' box ' + (color?'light':'dark') }>
            <h3>Vote for</h3>
        <h4 style= {{fontSize}}>{flavor}</h4> 
        </div>


        <div className="Designertwo">
            <h2>What to Support</h2>
            <button onClick= { ()=> setFlavor("Chocolate") } disabled= {flavor==='Chocolate'}>Chocolate</button>
            <button onClick= { ()=> setFlavor("Vanilla") } disabled= {flavor==='Vanilla'}>Vanilla</button>
            <button onClick= { ()=> setFlavor("Strawberry") } disabled= {flavor==='Strawberry'}>Strawberry</button>
        </div>

        <div>
            <h2>Color Theme</h2>
            <button onClick= { () => setColor(true)} >Light</button>
            <button onClick= { () => setColor(false)}>Dark</button>
        </div>

        <div>
            <h2>Font Size</h2>
            <button onClick= { () => setFontSize(prevCount => prevCount - 1)}>Down</button>
            {fontSize}
            <button onClick= { () => setFontSize(prevCount => prevCount + 1)}>Up</button>
        </div>
        </div>
        </div>

    );
}

export default Addesigner;