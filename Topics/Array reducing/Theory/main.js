// You can experiment here, it won’t be checked
let x = 20;
let y = 22;

function findAnswer(num1, num2) {
    let sum = num1 + num2;
    console.log(sum);
    if (sum === 42) {
        return true;
    } else {
        return false;
    }
}

findAnswer(x, y); // false
