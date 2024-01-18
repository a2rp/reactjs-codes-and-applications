import React, { useEffect, useState } from "react"
import CircularProgress from "@mui/material/CircularProgress";


const App = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [pincode, setPincode] = useState("");
    const [result, setResult] = useState({});

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsLoading(true);
            fetch(`https://api.postalpincode.in/pincode/${pincode}`).then((res) => {
                return res.json();
            }).then((data) => {
                console.log(data);
                setResult(data);
            }).catch(error => {
                setResult(error.message);
            }).finally(() => {
                setIsLoading(false);
            });
        }, 1000 * 2);

        return () => { clearTimeout(timeout) };
    }, [pincode]);

    return (
        <div style={{ padding: "30px" }}>
            <h1>React Debouncing</h1>
            Debouncing is a programming technique used to handle rapid and repeated events such as user input, network requests, and API calls. In React, debouncing can help improve performance and reduce unnecessary renders.
            <hr />
            type pincode of any place in india: <input
                type="text"
                placeholder="type pincode of any location in india"
                value={pincode} onChange={(event) => setPincode(event.target.value)} />

            <hr />
            result is
            {isLoading === true
                ? <CircularProgress style={{ display: "block", marginLeft: "50%", marginTop: "50px" }} />
                : <pre style={{ height: "200px", overflow: "scroll", display: "block", marginTop: "15px" }}>{JSON.stringify(result, null, 2)}</pre>}
        </div>
    )
}

export default App
