import React, {useState} from "react";



export const Test =()=>{

    const [numbers, updateNumbers] = useState(0)

    return (
        <div>
            <h3>Hello world from inner component</h3>
        </div>
    );
};