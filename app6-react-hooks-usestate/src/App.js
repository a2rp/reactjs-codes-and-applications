import React, { useState } from 'react'

const App = () => {
    const [count, setCount] = useState(0);

    return (
        <div style={{ padding: "15px" }}>
            <h1>react hooks usestate</h1>
            <button onClick={() => setCount(count - 1)}>decrement</button>
            &nbsp;&nbsp;&nbsp;
            count = {count}
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => setCount(count + 1)}>increment</button>
        </div>
    )
}

export default App
