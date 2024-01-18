import React from 'react'

const App = () => {
    return (
        <div style={{ padding: "15px" }}>
            <Child data={41} />
        </div>
    )
}

export default App


const Child = (props) => {
    return (
        <div>
            data from parent is {props.data}
        </div>
    )
}

