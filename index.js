module.exports = function ({
    initialState,
    tempMax,
    tempMin,
    newState,
    getTemp,
    getEnergy,
    dataStep = 1
} = {}) {
    if (!isFunction(newState)) {
        throw new Error('newState is not function.');
    }
    if (!isFunction(getTemp)) {
        throw new Error('getTemp is not function.');
    }
    if (!isFunction(getEnergy)) {
        throw new Error('getEnergy is not function.');
    }

    var count = 0;
    var stepCounter = 0;
    var iterations = [];
    var currentEnergies = [];
    var currentBestEnergies = [];

    var currentTemp = tempMax;
    
    var lastState = initialState;
    var lastEnergy = getEnergy(lastState);

    var bestState = lastState;
    var bestEnergy = lastEnergy;

    while (currentTemp > tempMin) {
        let currentState = newState(lastState);
        let currentEnergy = getEnergy(currentState);
        
        if (currentEnergy < lastEnergy) {
            lastState = currentState;
            lastEnergy = currentEnergy;
        } else {
            if (Math.random() <= Math.exp(-(currentEnergy - lastEnergy)/currentTemp)) {
                lastState = currentState;
                lastEnergy = currentEnergy;
            }
        }

        if (bestEnergy > lastEnergy) {
            bestState = lastState;
            bestEnergy = lastEnergy;
        }
        currentTemp = getTemp(currentTemp);

        stepCounter++;
        count++;
        if(stepCounter == dataStep) {
            stepCounter = 0;
            iterations.push(count);
            currentBestEnergies.push(bestEnergy);
            currentEnergies.push(currentEnergy);
        }
    }
    return {bestState: bestState, bestEnergy: bestEnergy, iterations: iterations, currentEnergies: currentEnergies, currentBestEnergies: currentBestEnergies};
}

function isFunction(functionToCheck) {
    return functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';
}
