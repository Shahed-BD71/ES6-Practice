const firstName = "Khan"
const lastName = "Helal"
// const fullName = firstName + lastName;
// to solve- No Space problem.
const fullName = firstName +" "+ lastName + " is a funny boy";
// or by updated way
const fullName2 = `${firstName} ${lastName} is a good boy ${20+20-10/2}`

console.log(fullName);
console.log(fullName2);


// for creating multiLine
const multiLine = "I love you\n" + "I miss you\n" + "i need you\n"
console.log(multiLine)

// updated way to create multiLine
const multiLine2 = `I love you
I miss you
I need you`
console.log(multiLine2);