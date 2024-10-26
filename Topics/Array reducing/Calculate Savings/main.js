const salary = 25000;

function getSalary(expenses) {
    let remainingSalary = expenses.reduce((acc, curr) => acc - curr, 25000);
    console.log(remainingSalary);
}

// getSalary([200,1000, 300, 550]);

let arr = [];

let sum = arr.reduce(function(x, y) {
    return x + y;
});

console.log(sum);