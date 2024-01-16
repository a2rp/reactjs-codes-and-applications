import React, { useEffect, useState } from "react"

const App = () => {
    const [count, setCount] = useState(2);
    const [oddOrEven, setOddOrEven] = useState("Even");

    useEffect(() => {
        if (count % 2 === 0) {
            setOddOrEven("Even");
        } else if (count % 2 !== 0) {
            setOddOrEven("Odd");
        }
    }, [count]);

    return (
        <div style={{ padding: "15px" }}>
            <h1>react hooks useeffect</h1>
            <button onClick={() => setCount(count - 1)}>decrement</button>
            &nbsp;&nbsp;&nbsp;
            count = {count}
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => setCount(count + 1)}>increment</button>
            <hr />
            {count} is {oddOrEven}
        </div>
    )
}

export default App
