import React from 'react';

export default function Todo({ text }) {
    return (
        <ul>{text.map((eachText) => (
            <li>{eachText}</li>
        ))}

        </ul>
    );
}
