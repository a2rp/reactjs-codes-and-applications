import React, { useRef } from "react";

const App = () => {
    const dateTimeRef = useRef(null);
    const getDateTime = () => {
        dateTimeRef.current.innerHTML = new Date().toISOString();
    };

    return (
        <div style={{ padding: "15px" }}>
            <h1>react events on click</h1>
            <button onClick={getDateTime}>Get date time</button> <span ref={dateTimeRef} style={{ marginLeft: "15px" }}></span>
        </div>
    )
}

export default App
