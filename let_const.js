const wife = "XYZ"
// wife = "ABC"
console.log(wife);
// in tis case "ABC" is not acceptable bcz we take wife as a const variable.
// if it was let it will take ABC as her new variable.


const numbers = [12, 45, 34,];
numbers[2] = 60;
numbers.push(50);
console.log(numbers)

// we cant change full array if we declare ths by const, but we can add,replace element there.
// if we declare by let everything we can do.



let PatientName = "Abul Mia";
PatientName = "gofor mia"
PatientName = 'Akkas Mia'
console.log(PatientName)

let sum = 0;
for (let i = 0; i < 10; i++) {
    sum = sum + i;
    console.log(i);
}
//  console.log(i);

// we can always update an array if we declare it by let.
// it will not give output if we call it outside(after }) a loop.