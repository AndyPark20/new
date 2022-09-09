import React, {useState} from "react";
import './App.css'



export const Test =()=>{

    const [numbers, updateNumbers] = useState(0)

    const countNumbers =(e)=>{
        (e.target.innerText ==='Previous') ? updateNumbers(numbers-1) :  updateNumbers(numbers+1);
    }

    return (
        <div>
            <div>
            <h1>{numbers}</h1>
            </div>
           <div className="arrow">
            <h5 onClick={(e)=>countNumbers(e)}>Previous</h5>
            <h5 onClick={(e)=>countNumbers(e)}>Next</h5>
           </div>
        </div>
    );
};