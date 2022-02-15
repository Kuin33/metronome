import React from "react";

const Spinner = ({ speed, setSpeed }) => {
    const handleSpeedUp = () => {
        setSpeed(speed + 1);
    }

    const handleSpeedDown = () => {
        setSpeed(speed - 1);
    }

    return <div>
        <button onClick={handleSpeedUp}>+</button>
        <button onClick={handleSpeedDown}>-</button>
    </div>
};

export default Spinner;
