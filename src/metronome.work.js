var timerID = null;
var interval = 100;

const START = "start";
const STOP = "stop";

self.onmessage = function (e) {
    if (e.data == START) {
        console.log("starting");
        timerID = setInterval(function () { postMessage("tick"); }, interval);
    }
    else if (e.data.interval) {
        console.log("setting interval");
        interval = e.data.interval;
        console.log("interval=" + interval);
        if (timerID) {
            clearInterval(timerID);
            timerID = setInterval(function () { postMessage("tick"); }, interval);
        }
    }
    else if (e.data == STOP) {
        console.log("stopping");
        clearInterval(timerID);
        timerID = null;
    }
};

postMessage('hi there');
