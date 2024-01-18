import React from "react";
import styles from "./styles.module.scss";
import QNABeginnerLevel from "./components/QNABeginnerLevel";
import QNAIntermediateLevel from "./components/QNAIntermediateLevel";
import QNAAdvancedLevel from "./components/QNAAdvancedLevel";

const App = () => {
    return (
        <div className={styles.container}>
            <div className={styles.contentContainer}>
                <h1 className={styles.appNameHeading}>
                    React Interview Qusetions and answers <span style={{ float: "right" }}>January 17, 2024</span>
                </h1>
                <p className={styles.intro1}>
                    React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.
                </p>
                <p className={styles.intro2}>
                    React can be used to develop single-page, mobile, or server-rendered applications with frameworks like Next.js. Because React is only concerned with the user interface and rendering components to the DOM, React applications often rely on libraries for routing and other client-side functionality. A key advantage of React is that it only rerenders those parts of the page that have changed, avoiding unnecessary rerendering of unchanged DOM elements.
                </p>

                <hr />
                <h3 className={styles.level}>Beginner Level</h3>
                <QNABeginnerLevel />

                <hr />
                <h3 className={styles.level}>Intermediate Level</h3>
                <QNAIntermediateLevel />

                <hr />
                <h3 className={styles.level}>Advanced Level</h3>
                <QNAAdvancedLevel />
            </div>
        </div>
    )
}

export default App
