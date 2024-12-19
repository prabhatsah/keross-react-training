import React, { useState } from 'react';
import "./Exercise10.css";

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)

// don't change the Component name "App"
export default function Exercise10() {
    const [isProceed, setIsProceed] = useState(true);

    function handleClick() {
        setIsProceed((proceed) => !proceed);
    }

    return (
        <div>
            {isProceed &&
                <div data-testid="alert" id="alert">
                    <h2>Are you sure?</h2>
                    <p>These changes can't be reversed!</p>
                    <button onClick={() => handleClick()}>Proceed</button>
                </div>
            }
            {!isProceed &&
                <button onClick={() => handleClick()}>Delete</button>
            }
        </div>
    );
}
