import React, { useState } from "react";

const App = () => {
    const [focusedOn, setFocusedOn] = useState("none");
    const [focusedOff, setFocusedOff] = useState("none");

    return (
        <div style={{ padding: "15px" }}>
            <h1>react events onblur</h1>
            <h3>Focus details</h3>
            <div>Currently focused on: {focusedOn}</div>
            <div>Last focused on:  {focusedOff}</div>

            <label htmlFor="" style={{ display: "block", marginTop: "30px" }}>input box1</label>
            <input
                type="text"
                placeholder="write something here"
                onFocus={() => { setFocusedOn("input box1"); }}
                onBlur={() => { setFocusedOff("input box1"); setFocusedOn("none"); }}
            />

            <label htmlFor="" style={{ display: "block", marginTop: "30px" }}>input box2</label>
            <input
                type="text"
                placeholder="write something here"
                onFocus={() => { setFocusedOn("input box2"); }}
                onBlur={() => { setFocusedOff("input box2"); setFocusedOn("none"); }}
            />

            <label htmlFor="" style={{ display: "block", marginTop: "30px" }}>input box3</label>
            <input
                type="text"
                placeholder="write something here"
                onFocus={() => { setFocusedOn("input box3"); }}
                onBlur={() => { setFocusedOff("input box3"); setFocusedOn("none"); }}
            />
        </div>
    )
}

export default App
