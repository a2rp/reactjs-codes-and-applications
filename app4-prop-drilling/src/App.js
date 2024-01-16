import React from 'react'
import ComponentA from './components/ComponentA'

const App = () => {
    return (
        <div style={{ padding: "30px" }}>
            In App component
            <hr />

            <ComponentA
                dataForA={Math.floor(Math.random() * 99) + 1}
                dataForB={Math.floor(Math.random() * 99) + 1}
                dataForC={Math.floor(Math.random() * 99) + 1}
            />
        </div>
    )
}

export default App
