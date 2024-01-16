import React, { useState } from 'react'

const App = () => {
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 99) + 1);
    const handleButtonClick = () => {
        const value = Math.floor(Math.random() * 99) + 1;
        setRandomNumber(value);
    };

    return (
        <div style={{ padding: "15px" }}>
            {randomNumber < 50
                ? <>
                    Random number "{randomNumber}" is less than 50
                </> : <>
                    Random number "{randomNumber}" is not less than 50
                </>}
            <hr />
            <button onClick={handleButtonClick}>Generate random number</button>

        </div>
    )
}

export default App
