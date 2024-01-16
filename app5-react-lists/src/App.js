import React from "react";

const App = () => {
    const dataArray = ["Ashish", 50, 22.47, false, "Ranjan"];

    return (
        <div style={{ padding: "15px" }}>
            <h1>React Lists</h1>
            <hr />
            <ul style={{ listStyleType: "none" }}>
                {dataArray.map((item, index) => (
                    <li key={index}>{index + 1}. {item}</li>
                ))}
            </ul>
        </div>
    )
}

export default App
