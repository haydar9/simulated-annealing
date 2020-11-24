module.exports = function ({
    originCity,
    distanceMatrix,
    tempMax,
    tempMin,
    coolingFactor
} = {}) { 
    var simulatedAnnealing = require('./index');

function getTotalDistance(v) {
    return Math.abs(v * v - 16);
}

function nextState(x) {
    return x + (Math.random() - 0.5);
}

// linear temperature decreasing
function nextTemp(prevTemperature) {
    return prevTemperature - coolingFactor;
}

var randomInitialPath = ["A", "B", "A"];

var result = simulatedAnnealing({
    initialState: randomInitialPath,
    tempMax: tempMax,
    tempMin: tempMin,
    newState: nextState,
    getTemp: nextTemp,
    getEnergy: getTotalDistance,
});

    return result;
};