import React, { useState } from "react"

const App = () => {
    const [inputText, setInputText] = useState("");
    const [inputKey, setInputKey] = useState("");
    const [inputKeyCode, setInputKeyCode] = useState("");
    const [inputKeyValue, setInputKeyValue] = useState("");

    const handleChange = (event) => {
        const value = event.target.value;
        // console.log(value, "onchange");
        setInputText(value);
    };

    const handleKeydown = (event) => {
        const key = event.key;
        const keyCode = event.keyCode;
        const keyValue = String.fromCharCode(keyCode);
        console.log(key, "keycode");
        console.log(keyCode, "keycode");
        console.log(keyValue, "keyvalue");
        setInputKey(key);
        setInputKeyCode(keyCode);
        setInputKeyValue(keyValue);
    };

    return (
        <div style={{ padding: "30px" }}>
            <h1>react events onkeydown</h1>
            <input type="text" placeholder="write something here" value={inputText} onChange={handleChange} onKeyDown={handleKeydown} />
            <div>Input key: {inputKey}</div>
            <div>Input key code: {inputKeyCode}</div>
            <div>Input text: {inputText}</div>
        </div>
    )
}

export default App
