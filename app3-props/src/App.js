import React from 'react'
import ValidateEvenNumber from './components/ValidateEvenNumber'
import ValidateOddNumber from './components/ValidateOddNumber'
import { useState } from 'react'

const App = () => {
    const [number, setNumber] = useState(randomNum(1, 99) || 0);

    return (
        <div style={{ padding: "15px" }}>
            {number} is <ValidateEvenNumber number={number} />
            {number} is <ValidateOddNumber number={number} />
        </div>
    )
}

export default App

const randomNum = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
}

