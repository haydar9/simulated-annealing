module.exports = function ({
    originCity,
    distanceMatrix,
    tempMax,
    tempMin,
    coolingFactor,
    dataStep = 1
} = {}) { 
    var simulatedAnnealing = require('./index');

function getTotalDistance(v) {
    var path = [...v];
    var distancesOfPath = [];
    //console.log("Calculating distance of path: " + path);
    path.forEach((city, index) => {
        if(index == path.length-1) return;
        var distance = distanceMatrix[city][path[index+1]];
        distancesOfPath.push(distance);
    });
    var totalDistanceOfPath = distancesOfPath.reduce((acc,x) => acc + x);
    /*
    console.log("Path: " + path);
    console.log("Distances: " + distancesOfPath);
    console.log("Total distance: " + totalDistanceOfPath);
    */
    return totalDistanceOfPath;
}

function getNextPath_random_strategy(x) {
    var prevPath = [...x];
    var nextPath = [];
    var originCity2 = prevPath.splice(originCity,1)[0]
    prevPath.pop();

    nextPath.push(originCity2);
    while(prevPath.length != 0 ) {
        var randomIndex = Math.floor(Math.random() * prevPath.length)
        var addRandomCity = prevPath.splice(randomIndex, 1)[0];
        nextPath.push(addRandomCity);
    }
    nextPath.push(originCity2);

    return nextPath;
}

function getNextPath_swap_1_element_strategy(x) {
    var nextPath = [...x];
    
    do {
        var randomIndex1 = Math.floor(Math.random() * (x.length - 2)) + 1;
        var randomIndex2 = Math.floor(Math.random() * (x.length - 2)) + 1;
    } while(randomIndex1 == randomIndex2);
    
    // console.log("NextPath=" + nextPath, ", r1[" + randomIndex1 + "]=" + nextPath[randomIndex1] 
    // + ", r2[" + randomIndex2 + "]=" + nextPath[randomIndex2]);

    let swap = nextPath[randomIndex1];
    nextPath[randomIndex1] = nextPath[randomIndex2];
    nextPath[randomIndex2] = swap;
    return nextPath;
}

// linear temperature decreasing
function nextTemp(prevTemperature) {
    return prevTemperature * coolingFactor;
}

var initialBaseSolution = Object.keys(distanceMatrix);
initialBaseSolution.push(initialBaseSolution[0]);
var randomInitialPath = getNextPath_swap_1_element_strategy(initialBaseSolution);


var simulatedAnnealingResults = simulatedAnnealing({
    initialState: randomInitialPath,
    tempMax: tempMax,
    tempMin: tempMin,
    newState: getNextPath_swap_1_element_strategy,
    getTemp: nextTemp,
    getEnergy: getTotalDistance,
    dataStep: dataStep
});

    return simulatedAnnealingResults;
};