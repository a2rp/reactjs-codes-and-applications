import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = (props) => {
    return (
        <div>
            In ComponentA
            <h1>Data for A: {props.dataForA}</h1>
            <hr />

            <ComponentB
                dataForB={props.dataForB}
                dataForC={props.dataForC}
            />
        </div>
    )
}

export default ComponentA
