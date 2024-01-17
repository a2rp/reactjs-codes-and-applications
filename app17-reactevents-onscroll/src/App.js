import React, { useState } from "react";

const App = () => {
    const [scrollValues, setScrollValues] = useState({ scrollTop: "", scrollHeight: "", clientHeight: "", clientTop: "" });
    const handleScroll = (event) => {
        const data = {
            scrollTop: event.target.scrollTop,
            scrollHeight: event.target.scrollHeight,
            clientHeight: event.target.clientHeight,
            clientTop: event.target.clientTop,
        };
        setScrollValues(data);
    };

    return (
        <div style={{ padding: "15px" }}>
            <h1>react events onscroll</h1>
            <h3>scroll in the area below to get scroll values</h3>
            <div
                style={{ height: "200px", overflow: "auto", border: "1px solid #f00", paddingLeft: "30px" }}
                onScroll={handleScroll}
            >
                <div style={{ marginTop: "30px" }}>margin top 30px</div>
                <div style={{ marginTop: "100px" }}>margin top 100px</div>
                <div style={{ marginTop: "200px" }}>margin top 200px</div>
                <div style={{ marginTop: "400px" }}>margin top 400px</div>
                <div style={{ marginTop: "800px" }}>margin top 800px</div>
                <div style={{ marginTop: "1600px" }}>margin top 1600px</div>
            </div>

            <h3>Scrol values</h3>
            <pre>{JSON.stringify(scrollValues, null, 2)}</pre>
        </div>
    )
}

export default App
