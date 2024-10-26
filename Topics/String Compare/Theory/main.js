// You can experiment here, it won’t be checked
// let regex = new RegExp('\w');
// let regex = /\w/;
//
// console.log(regex.test('abc')); // false
// console.log(regex.test('w')); // true


// let regex = /\d+/;
//
// console.log(regex.test('2021')); // true
// console.log(regex.test('199')); // true
// console.log(regex.test('a5b')); // true
// console.log(regex.test('')); // false

// let regex = /\d+/;
// let strChar = 'hello';
//
// console.log(regex.test(strChar)); // false


// let regex = /JavaScript ES./;
//
// console.log(regex.test('JavaScript ES6')); // true
// console.log(regex.test('JavaScript ES7')); // true
// console.log(regex.test('JavaScript ES')); // false

// let regex = /JavaScript.is.awesome./;
//
// console.log(regex.test('JavaScript is awesome!')); // true
// console.log(regex.test('JavaScript is awesome?')); // true
// console.log(regex.test('JavaScript.is.awesome.')); // true
// console.log(regex.test('JavaScript is awesome\n')); // false
// console.log(regex.test('JavaScript is awesome\r')); // false

// let regex = /JavaScript.is.awesome\./;
//
// console.log(regex.test('JavaScript is awesome!')); // false
// console.log(regex.test('JavaScript is awesome.')); // true

// let regex = /I have \d dogs?/;
//
// console.log(regex.test('I have 1 dog')); // true
// console.log(regex.test('I have 2 dogs')); // true
// console.log(regex.test('I have 3 dogs')); // true

// let regex = /Am I learning regex\?/;

// console.log(regex.test('Am I learning regex?')); // true
// console.log(regex.test('Am I learning regex!')); // false