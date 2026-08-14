class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log(`Hi, I'm ${this.name}`);
    }
}

const talib = new Person("Talib",28);
// talib.greet();
// console.log(talib.__proto__ === Person.prototype);

// inheritance with classes

class Student extends Person{
    constructor(name,age,school){
        super(name,age);
        this.school = school;
    }

    greet(){
        super.greet();
        console.log(`I study at ${this.school}`);
    }
}

const navi = new Student("Navi",22,"Galgotias");
navi.greet();