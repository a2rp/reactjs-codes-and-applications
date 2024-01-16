import React, { useState, useRef } from "react";

const App = () => {
    const inputValueRef = useRef(null);
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        inputValueRef.current.innerHTML = "Text in the input box is '" + name + "'";
    };

    return (
        <div style={{ padding: "15px" }}>
            <h1>react events onsubmit</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="write something here" value={name} onChange={event => setName(event.target.value)} />
                <br />
                <button type="submit">Submit</button>
            </form>
            <div ref={inputValueRef}></div>
        </div>
    )
}

export default App
