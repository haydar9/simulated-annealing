var tsp = require('./tsp');

var map = {
    'A' : { 'A': 0, 'B': 1, 'C': 2, 'D': 4, 'E': 9, 'F': 8, 'G': 3, 'H': 2, 'I': 1, 'J': 5, 'K': 7, 'L': 1, 'M': 2, 'N': 9, 'O': 3,},
    'B' : { 'A': 1, 'B': 0, 'C': 5, 'D': 3, 'E': 7, 'F': 2, 'G': 5, 'H': 1, 'I': 3, 'J': 4, 'K': 6, 'L': 6, 'M': 6, 'N': 1, 'O': 9,},
    'C' : { 'A': 2, 'B': 5, 'C': 0, 'D': 6, 'E': 1, 'F': 4, 'G': 7, 'H': 7, 'I': 1, 'J': 6, 'K': 5, 'L': 9, 'M': 1, 'N': 3, 'O': 4,},
    'D' : { 'A': 4, 'B': 2, 'C': 6, 'D': 0, 'E': 5, 'F': 2, 'G': 1, 'H': 6, 'I': 5, 'J': 4, 'K': 2, 'L': 1, 'M': 2, 'N': 1, 'O': 3,},
    'E' : { 'A': 9, 'B': 7, 'C': 1, 'D': 5, 'E': 0, 'F': 9, 'G': 1, 'H': 1, 'I': 2, 'J': 1, 'K': 3, 'L': 6, 'M': 8, 'N': 2, 'O': 5,},
    'F' : { 'A': 8, 'B': 2, 'C': 4, 'D': 2, 'E': 9, 'F': 0, 'G': 3, 'H': 5, 'I': 4, 'J': 7, 'K': 8, 'L': 3, 'M': 1, 'N': 2, 'O': 5,},
    'G' : { 'A': 3, 'B': 5, 'C': 7, 'D': 1, 'E': 1, 'F': 3, 'G': 0, 'H': 2, 'I': 6, 'J': 1, 'K': 7, 'L': 9, 'M': 5, 'N': 1, 'O': 4,},
    'H' : { 'A': 2, 'B': 1, 'C': 7, 'D': 6, 'E': 1, 'F': 5, 'G': 2, 'H': 0, 'I': 9, 'J': 4, 'K': 2, 'L': 1, 'M': 1, 'N': 7, 'O': 8,},
    'I' : { 'A': 1, 'B': 3, 'C': 1, 'D': 5, 'E': 2, 'F': 4, 'G': 6, 'H': 9, 'I': 0, 'J': 3, 'K': 3, 'L': 5, 'M': 1, 'N': 6, 'O': 4,},
    'J' : { 'A': 5, 'B': 4, 'C': 3, 'D': 4, 'E': 1, 'F': 7, 'G': 1, 'H': 4, 'I': 3, 'J': 0, 'K': 9, 'L': 1, 'M': 8, 'N': 5, 'O': 2,},
    'K' : { 'A': 7, 'B': 6, 'C': 5, 'D': 2, 'E': 3, 'F': 8, 'G': 7, 'H': 2, 'I': 3, 'J': 9, 'K': 0, 'L': 2, 'M': 1, 'N': 8, 'O': 1,},
    'L' : { 'A': 1, 'B': 6, 'C': 9, 'D': 1, 'E': 6, 'F': 3, 'G': 9, 'H': 1, 'I': 5, 'J': 1, 'K': 2, 'L': 0, 'M': 5, 'N': 4, 'O': 3,},
    'M' : { 'A': 2, 'B': 6, 'C': 1, 'D': 2, 'E': 8, 'F': 1, 'G': 5, 'H': 1, 'I': 1, 'J': 8, 'K': 1, 'L': 5, 'M': 0, 'N': 9, 'O': 6,},
    'N' : { 'A': 9, 'B': 1, 'C': 3, 'D': 1, 'E': 2, 'F': 2, 'G': 1, 'H': 7, 'I': 6, 'J': 5, 'K': 8, 'L': 4, 'M': 9, 'N': 0, 'O': 7,},
    'O' : { 'A': 3, 'B': 9, 'C': 4, 'D': 3, 'E': 5, 'F': 5, 'G': 4, 'H': 8, 'I': 4, 'J': 2, 'K': 1, 'L': 3, 'M': 6, 'N': 7, 'O': 0,}
};

//console.table(map);

var originCity = 'A';

var result = tsp({
    originCity: originCity,
    distanceMatrix: map,
    tempMax: 400,
    tempMin: 0.001,
    coolingFactor: 0.999,
    dataStep: 200
});

console.log("Solution path: " + result.bestState);
console.log("Solution path distance: " + result.bestEnergy);
console.log("Solution iterations: " + result.iterations.length);
console.log("Solution current distances length: " + result.currentEnergies.length);
console.log("Solution current best distances length: " + result.currentBestEnergies.length);

console.log("Solution current distances length: " + result.currentEnergies.length);
console.log("Solution current best distances length: " + result.currentBestEnergies.length);
