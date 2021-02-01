const person = {name: 'abul khan', age: 40, job: "Police", gfName: 'Nusrat khan', adress:'Chittagong', phone: '1234567890', friends: ['salman', 'kalman', 'jalman', 'palman']};

    // short and proper way
const { phone, age, adress } = person
console.log(phone, age, adress);

// find an property of an complex object
const complexObject = {
    name: 'Abul Khan',
    info: {
        adress : "chittagong",
        leader : 'Millat'
    }
}
const { leader } = complexObject.info
console.log(leader);




// 2nd nd smart way.
const girlFriend = person.gfName
console.log(girlFriend)


//first nd old way.
console.log(person.age)
console.log(person.job)
console.log(person.phone)


const friends = ['A' , 'B', 'C', 'D']
const [first, ...rest] = friends;
console.log(first)
console.log(...rest)