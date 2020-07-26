const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('foo');
  }, 300);
});

promise1.then((value) => {
  console.log(value);
  // expected output: "foo"
});

console.log(promise1);
// expected output: [object Promise]


const myFirstPromise = new Promise((resolve, reject) => {
  // выполняется асинхронная операция, которая в итоге вызовет:
  //
  //   resolve(someValue); // успешное завершение
  // или
  //   reject("failure reason"); // неудача
});

function myAsyncFunction(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = () => resolve(xhr.responseText);
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
}

let myFirstPromise = new Promise((resolve, reject) => {
  // Мы вызываем resolve(...), когда асинхронная операция завершилась успешно, и reject(...), когда она не удалась.
  // В этом примере мы используем setTimeout(...), чтобы симулировать асинхронный код.
  // В реальности вы, скорее всего, будете использовать XHR, HTML5 API или что-то подобное.
  setTimeout(function(){
    resolve("Success!"); // Ура! Всё прошло хорошо!
  }, 250);
});

myFirstPromise.then((successMessage) => {
  // successMessage - это что угодно, что мы передали в функцию resolve(...) выше.
  // Это необязательно строка, но если это всего лишь сообщение об успешном завершении, это наверняка будет она.
  console.log("Ура! " + successMessage);
})

var promiseCount = 0;
function testPromise() {
  var thisPromiseCount = ++promiseCount;

  var log = document.getElementById('log');
  log.insertAdjacentHTML('beforeend', thisPromiseCount +
      ') Запуск (запуск синхронного кода)
');

  // Создаём промис, возвращающее 'result' (по истечении 3-х секунд)
  var p1 = new Promise(
    // Функция разрешения позволяет завершить успешно или
    // отклонить промис
    function(resolve, reject) {
      log.insertAdjacentHTML('beforeend', thisPromiseCount +
          ') Запуск промиса (запуск асинхронного кода)
');
      // Это всего лишь пример асинхронности
      window.setTimeout(
        function() {
          // Обещание исполнено!
          resolve(thisPromiseCount)
        }, Math.random() * 2000 + 1000);
    });

  // Указываем, что сделать с исполненным промисм
  p1.then(
    // Записываем в протокол
    function(val) {
      log.insertAdjacentHTML('beforeend', val +
          ') Обещание исполнено (асинхронный код завершён)
');
    });

  log.insertAdjacentHTML('beforeend', thisPromiseCount +
      ') Обещание создано (синхронный код завершён)
');
}

if ("Promise" in window) {
  let btn = document.getElementById("btn");
  btn.addEventListener("click",testPromise);
} else {
  log = document.getElementById('log');
  log.innerHTML = "Демонстрация невозможна, поскольку ваш браузер не поддерживает интерфейс <code>Promise<code>.";
}

var p1 = Promise.resolve(3);
var p2 = 1337;
var p3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([p1, p2, p3]).then(values => {
  console.log(values);
});

//Выведет:
// [3, 1337, "foo"]

var pAll1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "one");
});
var pAll2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "two");
});
var pAll3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, "three");
});
var pAll4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 4000, "four");
});
var pAll5 = new Promise((resolve, reject) => {
// Это обещание прервет Promise.all
  reject("reject");
});

Promise.all([pAll1, pAll2, pAll3, pAll4, pAll5]).then(value => {
  console.log(value);
}, reason => {
  console.log(reason)
});

//Выведет:
//"reject"


const promiseRace1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promiseRace2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promiseRace1, promiseRace2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"

