// You can experiment here, it won’t be checked
// let example = array.reduce(callback, initialValue);
// array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue)
// let arr = [1, 3, 5, 7, 9];
//
// let result = arr.reduce((acc, curr) => acc + curr, 0);
//
// console.log(result);

// let arr = [1, 3, 5, 7];
//
// let summation = arr.reduce(function arraySum(sum, number) {
//     return sum + number;
// });
//
// console.log(summation); // 16


let evenNumbers = [2, 4, 6, 8, 10];

let avg = evenNumbers.reduce((sum, number, currentIndex, array) => {
    sum += number;

    if (currentIndex == array.length - 1) {
        return sum / array.length;
    } else {
        return sum;
    }
});

console.log(avg); // 6

let oddNumbers = [1, 3, 5, 7];

let summation = oddNumbers.reduce(function arraySum(sum, number) {
    return sum + number;
}, 4);

console.log(summation); // 20

// array.reduceRight(callback(accumulator, currentValue, currentIndex, array), initialValue)

// let numbers = [1, 4, 7];
//
// let division = numbers.reduceRight((num1, num2) => {
//     return num1 / num2;
// });
//
// console.log(division); // 1.75

// let numbers = [1, 4, 7];
//
// let division = numbers.reduce((num1, num2) => {
//     return num1 / num2;
// });
//
// console.log(division); // 0.036

let numbers = [2, 4, 8];

let answer = numbers.reduceRight((x, y) => x / y, 1);

console.log(answer);