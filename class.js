class Student {
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.school = 'Hathazari college'
    }
}
const student1 = new Student(805, 'sanjida');
const student2 = new Student(806, "shahed");
const student3 = new Student(823, 'sakib');

console.log(student1.name, student2, student3);

// class is uses for when need to use same structure in many times.