import React, { useState } from 'react';
import "./Exercise11.css"

// don't change the Component name "App"
export default function Exercise11() {
const [active, setActive] = useState("");

function handleClick(){
    setActive("active")
}

    return (
        <div>
            <p className={active}>Style me!</p>
            <button onClick={() => handleClick()}>Toggle style</button>
        </div>
    );
}
