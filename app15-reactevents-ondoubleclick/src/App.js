import React, { useRef, useState } from "react";

const App = () => {
    const [singleClickValue, setSingleClickValue] = useState(0);
    const [doubleClickValue, setDoubleClickValue] = useState(0);

    return (
        <div style={{ padding: "15px" }}>
            <h1>react events onboubleclick</h1>

            <div
                style={{
                    padding: "15px",
                    backgroundColor: "#333", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
                }}
                onClick={() => setSingleClickValue(singleClickValue + 1)}
                onDoubleClick={() => setDoubleClickValue(doubleClickValue + 1)}
            >
                <h1>Click here</h1>
                <div>Single click value is: {singleClickValue}</div>
                <div>Double click value is: {doubleClickValue}</div>
            </div>
        </div>
    )
}

export default App
