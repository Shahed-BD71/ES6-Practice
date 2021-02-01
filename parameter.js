// default parameter

function add(num1, num2 = 50) {
// num2 = num2 || 50;
return num1 + num2
}
const total = add(12);
console.log(total);