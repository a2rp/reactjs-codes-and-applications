import React, { useState } from "react"

const App = () => {
    const [inputText, setInputText] = useState("");
    const [totalChars, setTotalChars] = useState(0);

    const handleInputChange = (event) => {
        const value = event.target.value;
        const length = value.length;
        setInputText(value);
        setTotalChars(length);
    };

    return (
        <div style={{ padding: "15px" }}>
            <h1>react event onchange</h1>
            <hr />
            <input type="text" placeholder="write something here" value={inputText} onChange={handleInputChange} />
            <h3>Total chars: {totalChars}</h3>
        </div>
    )
}

export default App
