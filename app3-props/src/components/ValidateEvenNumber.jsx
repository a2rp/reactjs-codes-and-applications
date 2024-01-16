import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const ValidateEvenNumber = (props) => {
    const [value, setValue] = useState(props.number);
    const [result, setResult] = useState("");

    useEffect(() => {
        if (value % 2 === 0) {
            setResult("Even number");
        } else {
            setResult("Not even number");
        }
    }, [value]);

    return (
        <div>
            {result}
        </div>
    )
}

export default ValidateEvenNumber
