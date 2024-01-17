import React, { useState, useRef } from "react";

const App = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [data, setData] = useState({ firstName: firstName, lastName: lastName });

    const handleSubmit = (event) => {
        event.preventDefault();

        const inputData = { firstName, lastName };
        setData(inputData);
    };

    return (
        <div style={{ padding: "15px" }}>
            <h1>react events onsubmit</h1>
            <div>Fill the form below and press submit button</div>
            <hr />
            <form onSubmit={handleSubmit} style={{ padding: "15px", backgroundColor: "#aaa" }}>
                <label htmlFor="firstName">First name</label>
                <input
                    className="firstName"
                    type="text"
                    placeholder="First name"
                    style={{
                        width: "100%",
                        marginBottom: "15px"
                    }}
                    value={firstName}
                    onChange={event => setFirstName(event.target.value)}
                />

                <label htmlFor="lastName">Last name</label>
                <input
                    className="lastName"
                    type="text"
                    placeholder="Last name"
                    style={{
                        width: "100%",
                        marginBottom: "15px"
                    }}
                    value={lastName}
                    onChange={event => setLastName(event.target.value)}
                />

                <input
                    type="submit"
                    value="Submit"
                />
            </form>
            <hr />

            <div>form data is</div>
            <pre
                style={{
                    marginTop: "20px",
                    backgroundColor: "#333", color: "#fff",
                    padding: "15px"
                }}
            >{JSON.stringify(data, null, 2)}</pre>
            <pre></pre>
        </div>
    )
}

export default App
