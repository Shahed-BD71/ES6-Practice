// function doubleIt(num) {
//     return num * 2;
// }

// // another way
// const doubleIt = function myFun(num){
//     return num * 2;
// }


// arrow function.
// with single parameter
const doubleIt = num => num * 2

// with more than one parameter
const add = (x, y) => x + y;

// without parameter.
const giv5 = () => 5;

// arrow function with more line.
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

// const result = doubleIt(5);
// console.log(result);

const result = add(50, 50);
console.log(result);

const result2 = giv5()
console.log(result2);

const result3 = doMath(10, 5);
console.log(result3);