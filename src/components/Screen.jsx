import React from "react";

const Screen = ({ speed }) => {

    return <div className="screen">
        <span className="screen-speed">{speed}</span>
        <span>bpm</span>
    </div>
};

export default Screen;
