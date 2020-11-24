var tsp = require('./tsp');

var map = {
    'A' : { 'A': 0, 'B': 1, 'C': 2, 'D': 4, 'E': 9, 'F': 8, 'G': 3, 'H': 2, 'I': 1, 'J': 0, 'K': 0, 'L': 0, 'M': 0, 'N': 0, 'O': 0,},
    'B' : { 'A': 1, 'B': 0, 'C': 5, 'D': 3, 'E': 7, 'F': 2, 'G': 5, 'H': 1, 'I': 3, 'J': 0, 'K': 0, 'L': 0, 'M': 0, 'N': 0, 'O': 0,},
    'C' : { 'A': 2, 'B': 5, 'C': 0, 'D': 6, 'E': 1, 'F': 4, 'G': 7, 'H': 7, 'I': 1, 'J': 0, 'K': 0, 'L': 0, 'M': 0, 'N': 0, 'O': 0,},
    'D' : { 'A': 4, 'B': 2, 'C': 6, 'D': 0, 'E': 5, 'F': 2, 'G': 1, 'H': 6, 'I': 5, 'J': 0, 'K': 0, 'L': 0, 'M': 0, 'N': 0, 'O': 0,},
    'E' : { 'A': 9, 'B': 7, 'C': 1, 'D': 5, 'E': 0, 'F': 9, 'G': 1, 'H': 1, 'I': 2, 'J': 0, 'K': 0, 'L': 0, 'M': 0, 'N': 0, 'O': 0,},
    'F' : { 'A': 8, 'B': 2, 'C': 4, 'D': 2, 'E': 9, 'F': 0, 'G': 3, 'H': 5, 'I': 4, 'J': 0, 'K': 0, 'L': 0, 'M': 0, 'N': 0, 'O': 0,},
    'G' : { 'A': 3, 'B': 5, 'C': 7, 'D': 1, 'E': 1, 'F': 3, 'G': 0, 'H': 2, 'I': 6, 'J': 0, 'K': 0, 'L': 0, 'M': 0, 'N': 0, 'O': 0,},
    'H' : { 'A': 2, 'B': 1, 'C': 7, 'D': 6, 'E': 1, 'F': 5, 'G': 2, 'H': 0, 'I': 9, 'J': 0, 'K': 0, 'L': 0, 'M': 0, 'N': 0, 'O': 0,},
    'I' : { 'A': 1, 'B': 3, 'C': 1, 'D': 5, 'E': 2, 'F': 4, 'G': 6, 'H': 9, 'I': 0, 'J': 0, 'K': 0, 'L': 0, 'M': 0, 'N': 0, 'O': 0,},
    'J' : { 'A': 5, 'B': 4, 'C': 3, 'D': 4, 'E': 1, 'F': 7, 'G': 1, 'H': 4, 'I': 3, 'J': 0, 'K': 0, 'L': 0, 'M': 0, 'N': 0, 'O': 0,},
    'K' : { 'A': 7, 'B': 6, 'C': 5, 'D': 2, 'E': 3, 'F': 8, 'G': 7, 'H': 2, 'I': 3, 'J': 0, 'K': 0, 'L': 0, 'M': 0, 'N': 0, 'O': 0,},
    'L' : { 'A': 1, 'B': 6, 'C': 9, 'D': 1, 'E': 6, 'F': 3, 'G': 9, 'H': 1, 'I': 5, 'J': 0, 'K': 0, 'L': 0, 'M': 0, 'N': 0, 'O': 0,},
    'M' : { 'A': 2, 'B': 6, 'C': 1, 'D': 2, 'E': 8, 'F': 1, 'G': 5, 'H': 1, 'I': 1, 'J': 0, 'K': 0, 'L': 0, 'M': 0, 'N': 0, 'O': 0,},
    'N' : { 'A': 9, 'B': 1, 'C': 3, 'D': 1, 'E': 2, 'F': 2, 'G': 1, 'H': 7, 'I': 6, 'J': 0, 'K': 0, 'L': 0, 'M': 0, 'N': 0, 'O': 0,},
    'O' : { 'A': 3, 'B': 9, 'C': 4, 'D': 3, 'E': 5, 'F': 5, 'G': 4, 'H': 8, 'I': 4, 'J': 0, 'K': 0, 'L': 0, 'M': 0, 'N': 0, 'O': 0,}
};
console.log(map);
console.table(map);
console.log("D[A,B]=" + map['A']['B']);

var result = tsp({
    originCity: "A",
    distanceMatrix: map,
    tempMax: 15,
    tempMin: 0.001,
    coolingFactor: 0.001
});

