import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const ValidateOddNumber = ({ number }) => {
    const [value, setValue] = useState(number);
    const [result, setResult] = useState("");


    useEffect(() => {
        if (value % 2 !== 0) {
            setResult("Odd number");
        } else {
            setResult("Not odd number");
        }
    }, [value]);

    return (
        <div>
            {result}
        </div>
    )
}

export default ValidateOddNumber
