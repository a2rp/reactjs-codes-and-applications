import React, { useState, useRef } from "react";

const App = () => {
    const divRef = useRef(null);
    const [count, setCount] = useState(100);

    const handleDivMouseDown = (event) => {
        setCount(count + 1);
        const posX = event.clientX;
        const posY = event.clientY;
        divRef.current.style.innerHtml = `
            current position: [${posX}px, ${posY}px]
        `;
    };

    return (
        <div style={{ padding: "15px" }}>
            <h1>react events onmousedonw</h1>
            <hr />
            <div style={{ textAlign: "center" }}>count value: {count}</div>
            <div
                className="div"
                ref={divRef}
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: count,
                    backgroundColor: "#333", color: "#fff"
                }}
                onMouseDown={handleDivMouseDown}
            >mouse down here to increase size</div>
        </div>
    )
}

export default App
