import React from 'react'
import ComponentC from './ComponentC'

const ComponentB = (props) => {
    return (
        <div>
            In ComponentB
            <h1>Data for B: {props.dataForB}</h1>
            <hr />

            <ComponentC
                dataForC={props.dataForC}
            />
        </div>
    )
}

export default ComponentB
