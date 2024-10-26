// You can experiment here, it won’t be checked

// let regex1 = new RegExp('this one is correct\?');
// let regex2 = /this one is incorrect\?/;
// let regex3 = /I'm not right\\?/;
// let regex4 = new RegExp('I swear this one is right\\.');

const numbers = [2, 5, 11, 40];

console.log(numbers.every(checkNumber))

function checkNumber(number) {
    return number > 10;
}

console.log(numbers.some(checkNumber));

console.log(numbers.filter(checkNumber));