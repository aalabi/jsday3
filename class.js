/* function name(params) {}
name("Tunde");

let name = function (params) {};
name("Tunde"); */
//let Person = class {};
class Person {
  //method constructor
  constructor(personName, age) {
    this.age = age;
    this.personName = personName;
  }

  //method static
  static increaseAge(newAge) {
    this.age = this.age + newAge;
  }

  //method regular
  celebrateBirthday() {
    alert(`It is ${this.personName} let us celebrate and party`);
  }

  //property  static
  static address = "";

  //property  field
  email = "";
}

let creationOne = new Person("Tunde Bakare", 56);
console.log(creationOne.personName);
console.log(creationOne.age);
Person.increaseAge(10);
console.log(creationOne.age);
