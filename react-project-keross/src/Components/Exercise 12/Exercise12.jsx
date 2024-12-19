import React from 'react';

import Todo from './Todo'
import "./Exercise12.css"

// don't remove the export keyword here!
export const DUMMY_TODOS = [
    'Learn React',
    'Practice React',
    'Profit!'
];

// don't change the Component name "App"
export default function Exercise12() {
    return (
        <Todo text={DUMMY_TODOS} />
    )
}
