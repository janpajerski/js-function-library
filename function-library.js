// Function library

function squared(num) {
    if (isNaN(num)) {
        alert('The squared function requires a number as input.');
    } else {
        return num * num;
    }
}

function cubed(num) {
    if (isNaN(num)) {
        alert('The cubed function requires a number as input.');
    } else {
        return num * num * num;
    }
}

// The randInt function takes an integer as input and outputs a random integer between 0 and the the integer. 

function randInt(num) {
    if (isNaN(num)) {
        alert('The random function requires an integer as input.');
    } else if (num % 1 !== 0) {
        alert('The random function requires an integer as input.');
    } else {
        return Math.round(Math.random() * num);
    }
}