class Person {
    constructor(name) {
        this.name = name;  
    }

    talk() {
        console.log("Hello I am " + this.name);
    }
}

class Teacher extends Person {
  constructor(name, degree) {
    super(name);
    this.degree = degree;
  }
  teach() {
    console.log("I am teaching");
  }
}
const person1 = new Person("Collin");
const person2 = new Person("Lisa");
const teacher1 = new Teacher("Tom", "Bachelor IMS");

person1.talk();
person2.talk();
teacher1.talk();
teacher1.teach();