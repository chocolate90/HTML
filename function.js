// 1. Function
// - 프로그램을 구성하는 기본적인 빌딩 블럭
// - 서브 프로그램이라고도 불리고 여러번 재사용이 가능한 장점이 있음.
// - 하나의 함수는 한가지의 일만 하게 만들어아 함
// - 이름을 지정할 땐 동사 형태로 이름 지정
// - JS에서 function은 object

function printHello() {
  console.log('hello');
}
printHello(); // hello

// hello 밖에 출력을 못하는 함수

function log(message) {
  console.log(message);
}
log('world'); // world

// 원하는 메시지를 출력할 수 있는 함수

// 2. Parameters
// premitive type은 value가 전달됨
// object type은 reference가 전달됨

function changeName(obj) {
  obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);  // { name: "coder"}

// 3. Default parameters (added in ES6)

function showMessage(message, from = 'unknown') {
  // if (from === undefined) {
  //   from = 'unknown'
  // }
  console.log(`${message} by ${from}`);
}
showMessage('hi!'); // hi! by unknown

// 사용자가 parameter를 전달하지 않을 때 설정 해놓은 값이 대체 되어 사용됨

// 4. Rest parameters (added in ES6)

function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i])
  }

  for (const arg of args) {
    console.log(arg)
  }

  args.forEach((arg) => console.log(arg));


}
printAll('dream', 'coding', 'ellie')  // dream, coding, ellie

// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다.

let globalMessage = 'global';
function printMessage(message = 'hi') {
  console.log(message);
  console.log(globalMessage);
}
// console.log(message); = error 밖에서는 안을 볼 수 없다.
printMessage();

// 6. Return a value
function sum(a, b) {
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgradeUser(user) {
  if (user.point > 10) {
    // long upgrade logic...
  }
}

// good
function upgradeUser(user) {
  if (user.point <= 10) {
    return ;
  }
  // long upgrade logic...
} // 조건이 맞지 않는 경우 빨리 return을 해서 함수를 종료하고
// 조건이 맞을 때만 필요한 로직들을 실행하는 것이 더 좋음.

// 8. Function expression

const print = function () { // 이름이 없는 함수 = anonymous function
  console.log('print');
}
print();
const printAgain = print;
printAgain();

// 9. Callback function using function expression

function randomQuiz(answer, printYes, printNo) {
  if (answer === 'love you') {
    printYes()
  } else {
    printNo()
  }
}

const printYes = function () {
  console.log('yes');
}

// 이름이 있는 함수 = naned function
// better debugging in debugger's stack traces
// recursion

const printNo = function print() {
  console.log('no');
}

randomQuiz('love', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// 10. Arrow function
// 함수를 간결하게 해주고 항상 이름이 없는 함수를 사용한다.

// const simplePrint = function () {
//   console.log('simplePrint!');
// }
// simplePrint();

const simplePrint = () => console.log('simplePrint!');
simplePrint();

// 11. IIFE = 함수를 따로 호출하지 않고 선언함과 동시에 호출

(function hello() {
  console.log('hi!');
})();

// 함수를 사용해서 입력받은 값에 따라 사칙연산 만들기

function calculate(command, a, b) {
  switch (command) {
    case 'add':
      return a + b;
    case 'substract':
      return a -b;
    case 'multiply':
      return a * b;
    case 'divide':
      return a / b;
    default:
      console.log('add, substract, divide, multiply중 입력하세요.');
  }
}
console.log(calculate('multiply', 25, 4));
calculate('multi', 25, 4);
