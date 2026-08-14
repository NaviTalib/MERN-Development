// Prototypes in JavaScript

// Every JavaScript object has an internal link to another object called its prototype. 
// When you access a property or method on an object, JS first checks the object itself — if 
// it's not there, it walks up the prototype chain until it finds it (or hits null).

// This is how JavaScript does inheritance — instead of copying methods onto every object,
//  objects share behavior through this chain.

const animal = {
    eats:true,
    walk(){
        console.log("Animal walks");
    }
};

const rabbit = {
    jumps:true,
    __proto__:animal
};

// console.log(rabbit.eats);
// rabbit.walk();
// console.log(rabbit.jumps);

// constructor functions + prototypes (old way)

function Person(name,age){
    this.name = name;
    this.age = age;
}

Person.prototype.greet = function(){
    console.log(`Hi, I'm ${this.name}`);
}

const talib = new Person("Talib",28);
// talib.greet();
// console.log(talib.__proto__ === Person.prototype); 