'use strict';

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

var p = new Rectangle(); // ReferenceError

// class Rectangle {}

// безымянный
var Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectagle.name);
// отобразится: "Rectangle"

// именованный
var Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// отобразится: "Rectangle2"

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  get area() {
    return this.calcArea();
  }

  calcArea() {
    return this.height * this.width;
  }
}

const square = new Rectangle(10, 10);

console.log(square.area); // 100

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2));

class Animal {
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

let obj = new Animal();
obj.speak(); // Animal {}
let speak = obj.speak;
speak(); // undefined

Animal.eat() // class Animal
let eat = Animal.eat;
eat(); // undefined

function Animal() { }

Animal.prototype.speak = function(){
  return this;
}

Animal.eat = function() {
  return this;
}

let obj = new Animal();
let speak = obj.speak;
speak(); // глобальный объект

let eat = Animal.eat;
eat(); // глобальный объект

class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' издает звук.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' лает.');
  }
}

var d = new Dog('Митци');
d.speak();

function Animal (name) {
  this.name = name;
}
Animal.prototype.speak = function () {
  console.log(this.name + ' издает звук.');
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' лает.');
  }
}

var d = new Dog('Митци');
d.speak();

var Animal = {
  speak() {
    console.log(this.name + ' издает звук.');
  }
};

class Dog {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(this.name + ' лает.');
  }
}
Object.setPrototypeOf(Dog.prototype, Animal);

var d = new Dog('Митци');
d.speak();

class MyArray extends Array {
  // Изменить species на родительский конструктор Array
  static get [Symbol.species]() { return Array; }
}
var a = new MyArray(1,2,3);
var mapped = a.map(x => x * x);

console.log(mapped instanceof MyArray); // false
console.log(mapped instanceof Array);   // true

class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' издает звук.');
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(this.name + ' рычит.');
  }
}

var calculatorMixin = Base => class extends Base {
  calc() { }
};

var randomizerMixin = Base => class extends Base {
  randomize() { }
};

class Foo { }
class Bar extends calculatorMixin(randomizerMixin(Foo)) { }

var Foo = class {}; // constructor property is optional
var Foo = class {}; // Re-declaration is allowed

typeof Foo; //returns "function"
typeof class {}; //returns "function"

Foo instanceof Object; // true
Foo instanceof Function; // true
class Foo {}; // Throws TypeError, doesn't allow re-declaration

var Foo = class {
  constructor() {}
  bar() {
    return "Hello World!";
  }
};

var instance = new Foo();
instance.bar(); // "Hello World!"
Foo.name; // "Foo"

var Foo = class NamedFoo {
  constructor() {}
  whoIsThere() {
    return NamedFoo.name;
  }
}
var bar = new Foo();
bar.whoIsThere(); // "NamedFoo"
NamedFoo.name; // ReferenceError: NamedFoo is not defined
Foo.name; // "NamedFoo"
