import React, { useEffect, useState, useRef } from "react"

const App = () => {
    const detailsRef = useRef(null);
    const [count, setCount] = useState(2);

    useEffect(() => {
        if (count % 2 === 0) {
            detailsRef.current.innerHTML = count + " is Even";
        } else if (count % 2 !== 0) {
            detailsRef.current.innerHTML = count + " is Odd";
        }
    }, [count]);

    return (
        <div style={{ padding: "15px" }}>
            <h1>react hooks useRef</h1>
            <button onClick={() => setCount(count - 1)}>decrement</button>
            &nbsp;&nbsp;&nbsp;
            count = {count}
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => setCount(count + 1)}>increment</button>
            <hr />
            <span ref={detailsRef}></span>
        </div>
    )
}

export default App
