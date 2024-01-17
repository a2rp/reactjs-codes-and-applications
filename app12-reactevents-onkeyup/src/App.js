import React, { useState } from "react"

const App = () => {
    const [inputText, setInputText] = useState("");
    const [inputKey, setInputKey] = useState("");
    const [inputKeyCode, setInputKeyCode] = useState("");

    const handleChange = (event) => {
        const value = event.target.value;
        setInputText(value);
    };

    const handleKeyup = (event) => {
        const key = event.key;
        const keyCode = event.keyCode;
        setInputKey(key);
        setInputKeyCode(keyCode);
    };

    return (
        <div style={{ padding: "30px" }}>
            <h1>react events onkeyup</h1>
            <input type="text" placeholder="write something here" value={inputText} onChange={handleChange} onKeyUp={handleKeyup} />
            <div>Input key: {inputKey}</div>
            <div>Input key code: {inputKeyCode}</div>
            <div>Input text: {inputText}</div>
        </div>
    )
}

export default App
