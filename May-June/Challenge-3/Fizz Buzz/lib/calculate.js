const fs = require('fs');

function calculate() {
    var array = [];
for (var i = 1; i < 101; i++) {
    if (i % 15 == 0) array.push("FizzBuzz");
    else if (i % 3 == 0) array.push('Fizz');
    else if (i % 5 == 0) array.push("Buzz");
    else array.push(i);;
}

console.log(array.join(' , '));
}

function calculateOut() {
    var array = [];
    const myConsole = new console.Console(fs.createWriteStream('./output.txt'));
    for (var i = 1; i < 101; i++) {
        if (i % 15 == 0) array.push("FizzBuzz");
        else if (i % 3 == 0) array.push('Fizz');
        else if (i % 5 == 0) array.push("Buzz");
        else array.push(i);;
    }
    
    myConsole.log(array.join(' , '));
}

module.exports = {calculate, calculateOut};
