class Parent {
    constructor(){
        this.motherName = 'Moon';
        this.adress = "Starmaker"

    }
}

class Child extends Parent {
    constructor(name) {
    super();
    this.name = name;
    }
    // getFullname(){
    //     return this.name + " " + this.motherName;
    // }
}


const baby1 = new Child("BabyPanda");
const baby2 = new Child("Mitsuha");

// console.log(baby1.getFullname());
// console.group(baby2.getFullname());

console.log(baby1);
console.group(baby2);
