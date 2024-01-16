import logo from './logo.svg';
import './App.css';

function App() {
    const randomHexColour = (function () {
        const hexValues = "123456abcdef";
        return function () {
            let hexString = "";
            for (let i = 0; i < 6; i++) {
                hexString += hexValues[Math.floor(Math.random() * hexValues.length)];
            }
            return "#" + hexString;
        }
    })();
    function randomRGBColour(alpha = false) {
        const colorValue = Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256);
        if (alpha) {
            return "rgba(" + colorValue + ", " + Math.random() + ")";
        }
        return "rgb(" + colorValue + ")";
    }

    const generateRandomColor1 = () => {
        document.querySelector(".div1").style.cssText = `
            background-color: ${randomHexColour()};
            border: 1px solid #f00;
            width: 100px;
            height: 100px;
        `;
    };

    const generateRandomColor2 = () => {
        document.querySelector(".div2").style.cssText = `
            border: 1px solid #f00;
            background-color: ${randomRGBColour()};
            width: 100px;
            height: 100px;
        `;
    };

    return (
        <div className="App" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "50px", height: "100vh" }}>
            <div className="div1" style={{ height: "100px", width: "100px" }}></div>
            <input type="button" value="generate random color" onClick={generateRandomColor1} />
            <input type="button" value="generate random color" onClick={generateRandomColor2} />
            <div className="div2" style={{ height: "100px", width: "100px" }}></div>
        </div >
    );
}

export default App;
