import React, { useEffect, useState } from "react";
import "normalize.css";
import "./style.css";
import Screen from "./components/Screen.jsx";
import Spinner from "./components/Spinner.jsx"
import { init, play } from './metronome';

const App = () => {
    const [speed, setSpeed] = useState(60);
    useEffect(() => {
        init();
    });
    const handlePlayBtnClick = () => {
        play();
    };
    return <div className="metronome">
        <Screen speed={speed} />
        <Spinner speed={speed} setSpeed={setSpeed} />
        <button onClick={handlePlayBtnClick}>Play</button>
    </div>
};

export default App;