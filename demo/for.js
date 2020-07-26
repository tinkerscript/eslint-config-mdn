for (var i = 0; i < 9; i++) {
  console.log(i);
  // ещё какие-то выражения
}

var i = 0;
for (; i < 9; i++) {
    console.log(i);
    // ещё выражения
}

for (var i = 0;; i++) {
  console.log(i);
  if (i > 3) break;
  // тут какой-то код
}

var i = 0;

for (;;) {
  if (i > 3) break;
  console.log(i);
  i++;
}


function showOffsetPos (sId) {
  var nLeft = 0, nTop = 0;

  for (var oItNode = document.getElementById(sId); // инициализация
       oItNode; // условие
       nLeft += oItNode.offsetLeft, nTop += oItNode.offsetTop, oItNode = oItNode.offsetParent) // финальное выражение
       /* пустое выражение */ ;

  console.log("Смещение позиции элемента \"" + sId + "\":\n left: " + nLeft + "px;\n top: " + nTop + "px;");
}

// Пример вызова:

showOffsetPos("content");

// Выводит:
// "Смещение позиции элемента "content":
// left: 0px;
// top: 153px;"

const array1 = ['a', 'b', 'c'];

for (const element of array1) {
  console.log(element);
}

// expected output: "a"
// expected output: "b"
// expected output: "c"

const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30

const iterable = [10, 20, 30];

for (let value of iterable) {
  value += 1;
  console.log(value);
}
// 11
// 21
// 31

const iterable = 'boo';

for (const value of iterable) {
  console.log(value);
}
// "b"
// "o"
// "o"


const iterable = new Uint8Array([0x00, 0xff]);

for (const value of iterable) {
  console.log(value);
}
// 0
// 255

const iterable = new Map([['a', 1], ['b', 2], ['c', 3]]);

for (const entry of iterable) {
  console.log(entry);
}
// ['a', 1]
// ['b', 2]
// ['c', 3]

for (const [key, value] of iterable) {
  console.log(value);
}
// 1
// 2
// 3


const iterable = new Set([1, 1, 2, 2, 3, 3]);

for (const value of iterable) {
  console.log(value);
}
// 1
// 2
// 3

(function() {
  for (const argument of arguments) {
    console.log(argument);
  }
})(1, 2, 3);

// 1
// 2
// 3

// Note: This will only work in platforms that have
// implemented NodeList.prototype[Symbol.iterator]
const articleParagraphs = document.querySelectorAll('article > p');

for (const paragraph of articleParagraphs) {
  paragraph.classList.add('read');
}

function* foo(){
  yield 1;
  yield 2;
  yield 3;
};

for (const o of foo()) {
  console.log(o);
  break; // closes iterator, execution continues outside of the loop
}
console.log('done');

function* fibonacci() { // a generator function
  let [prev, curr] = [0, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}

for (const n of fibonacci()) {
  console.log(n);
  // truncate the sequence at 1000
  if (n >= 1000) {
    break;
  }
}

const iterable = {
  [Symbol.iterator]() {
    return {
      i: 0,
      next() {
        if (this.i < 3) {
          return { value: this.i++, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

for (const value of iterable) {
  console.log(value);
}
// 0
// 1
// 2

Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

const iterable = [3, 5, 7];
iterable.foo = 'hello';

for (const i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (const i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs 0, 1, 2, "foo"
  }
}

for (const i of iterable) {
  console.log(i); // logs 3, 5, 7
}

Object.prototype.objCustom = function() {};
Array.prototype.arrCustom = function() {};

const iterable = [3, 5, 7];
iterable.foo = 'hello';

for (const i in iterable) {
  console.log(i); // logs 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (const i in iterable) {
  if (iterable.hasOwnProperty(i)) {
    console.log(i); // logs 0, 1, 2, "foo"
  }
}

for (const i of iterable) {
  console.log(i); // logs 3, 5, 7
}

var obj = {a: 1, b: 2, c: 3};

for (const prop in obj) {
  console.log(`obj.${prop} = ${obj[prop]}`);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"

var triangle = {a: 1, b: 2, c: 3};

function ColoredTriangle() {
  this.color = 'red';
}

ColoredTriangle.prototype = triangle;

var obj = new ColoredTriangle();

for (const prop in obj) {
  if (obj.hasOwnProperty(prop)) {
    console.log(`obj.${prop} = ${obj[prop]}`);
  }
}

// Output:
// "obj.color = red"

var result = '';
var i = 0;
do {
   i += 1;
   result += i + ' ';
}
while (i > 0 && i < 5);
// Despite i == 0 this will still loop as it starts off without the test

console.log(result);

var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
}

var arr = [1, 2, 3];

// Приравняет все значения массива к 0
for (i = 0; i < arr.length; arr[i++] = 0) /* выражения */ ;

console.log(arr)
// [0, 0, 0]

if (condition);       // Внимание, этот if ничего не делает!
   killTheUniverse()  // Это всегда выполняется!!!

if (one)
  doOne();
else if (two)
  doTwo();
else if (three)
  ; // nothing here
else if (four)
  doFour();
else
  launchRocket();

i = 0;
n = 0;
while (i < 5) {
    i++;
    if (i === 3) {
      continue;
    }
    n += i;
}

var i = 0,
    j = 8;

checkiandj: while (i < 4) {
   console.log("i: " + i);
   i += 1;

   checkj: while (j > 4) {
      console.log("j: "+ j);
      j -= 1;
      if ((j % 2) == 0)
         continue checkj;
      console.log(j + " является нечётным.");
   }
   console.log("i = " + i);
   console.log("j = " + j);
}

function testBreak(x) {
  var i = 0;

  while (i < 6) {
     if (i == 3) {
        break;
     }
     i += 1;
  }
  return i * x;
}


