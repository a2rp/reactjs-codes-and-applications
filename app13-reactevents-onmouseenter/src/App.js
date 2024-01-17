import React, { useState } from "react";

const App = () => {
    const [mouseEnterPosition, setMouseEnterPosition] = useState("[0px, 0px]");
    const [mouseMovePosition, setMouseMovePosition] = useState("[0px, 0px]");
    const handleMouseEnter = (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        setMouseEnterPosition(`[${mouseX}px, ${mouseY}px]`);
    };
    const handleMouseMove = (event) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        setMouseMovePosition(`[${mouseX}px, ${mouseY}px]`);
    };

    return (
        <div style={{ padding: "15px" }}>
            <h1>react events on mouse enter</h1>
            <div
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                style={{
                    width: "300px", height: "300px",
                    display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column",
                    backgroundColor: "#333", color: "#fff"
                }}
            >
                <div>Mouse enter position: {mouseEnterPosition}</div>
                <div>Mouse move position: {mouseMovePosition}</div>
            </div>
        </div>
    )
}

export default App
