// 1. String concatenation
console.log('my' + ' cat'); // my cat
console.log('1' + 2); // 12
console.log(`string literals: 1 + 2 = ${1 + 2}`); // string literals: 1 + 2 = 3

console.log('ellie\'s book') // ellie's book
console.log('ellie\'s \nbook') // ellie's
                               // book
console.log('ellie\'s \tbook') // ellie's 	book
console.log(`ellie's book

ellie's
book`); // ellie's book

        // ellie's
        // book

// string literals를 이용하면 줄바꿈을 하거나 특수기호를 사용해도
// 그대로 문자열로 변환되서 출력한다.

// 2. Numeric operators
console.log(1 + 1); // add // 2
console.log(1 - 1); // substract // 0
console.log(1 / 1); // divide // 1
console.log(1 * 1); // multiply // 1
console.log(5 % 2); // remainder // 1
console.log(2 ** 3); // exponentiation // 8

// 3. Increment and decrement operators
let n = 2;
const preIncrement = ++n;
// n = n+1;
// preIncrement = n;
console.log(`preIncrement: ${preIncrement}, n: ${n}`); // preIncrement: 3, n: 3
const postIncrement = n++;
// postIncrement = n;
// n = n+1;
console.log(`postIncrement: ${preIncrement}, n: ${n}`); // postIncrement: 3, n: 4
const preDecrement = --n;
console.log(`preDecrement: ${preIncrement}, n: ${n}`); // preDecrement: 3, n: 3
const postDecrement = n--;
console.log(`postDecrement: ${preIncrement}, n: ${n}`); // postDecrement: 3, n: 2

// 4. Assignment operators
let x = 3;
let y = 6;

x += y // x = x + y; // x = 9
x *= y // x = 54
x /= y // x = 9
x -= y // x = 3

// 5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);

// 6. Logical operators: || (or), && (and), ! (not)
const value1 = false;
const value2 = 4 < 2;

// || (or)
console.log(`or: ${value1 || value2 || check()}`); // 1을 10번 반복후 true 출력
// or 중 하나라도 true면 뒤엔 실행되지 않고 바로 true 출력

console.log(`and: ${value1 && value2 && check()}`); // false
// or와 비슷하지만 모두 true여야 true 출력
// 앞에서 false가 나오면 뒤와 상관없이 false 출력

function check() {
  for (let i = 0; i < 10; i++) {
    console.log('1')
  }
  return true;
}

// ! (not) 값을 반대로 바꿈
console.log(!value1); // value1은 false이므로 true 출력

// 7. Equality
const sF = '5';
const nF = 5;

// == loose equality, with type conversion 타입을 신경안씀
console.log(sF == nF); //true string과 number지만 둘다 5이므로 true
console.log(sF != nF); // false(true)

// === strict equality, no type conversion 타입을 신경씀
console.log(sF === nF); // false string과 number이므로 false
console.log(sF !== nF); // true(false)

// object equality by reference
const ellie1 = { name: 'ellie'};
const ellie2 = { name: 'ellie'};
const ellie3 = ellie1
console.log(ellie1 == ellie2); // false
console.log(ellie1 === ellie2); // false
console.log(ellie1 === ellie3); // true
// ellie1 과 ellie2는 같은 데이터 값을 가지고 있지만
// 다른 ref이므로 false ellie3은 ellie1과 같은 ref이므로 true

// equality - puzzler
console.log(0 == false); // true
console.log(0 === false); // false
console.log('' == false); // true
console.log('' === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
// 0, empty string, null, undefined는 false로 간주될 수 있다.

// 8. Conditional operators: if
// if, else if, else
const name = 'coder';
if (name === 'ellie') {
  console.log('Welcome, Ellie!');
} else if (name === 'coder') {
  console.log('You are amazing coder'); // 출력
} else {
  console.log('unknown')
}

// 9. Ternary operator: ?
// condition ? value1 : value2;
console.log(name === 'ellie' ? 'yes' : 'no'); // yes

// 10. Switch statement
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in TS

const browser = 'Chrome';
switch (browser) {
  case 'IE':
    console.log('go away!');
    break;
  case 'Chrome':
  case 'Fierfox':
    console.log('love you!'); // 출력
    break;
  default:
    console.log('same all!');
    break;
}

// 11. loops
// while loop, while the condition is truthy
// body code is executed

let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
} // while: 3 while: 2 while: 1

// do while loop, body code is executed first,
// then check the condition

do {
  console.log(`do while: ${i}`)
  i--;
} while (i > 0); // do while: 0

// for loop, for(begin; condition; step)
for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
} // for: 3 for: 2 for: 1

for (let i = 3; i > 0; i = i - 2) {
  console.log(`inline variable for: ${i}`);
} // inline variable for: 3 inline variable for: 1

for (let i = 1; i <= 10; i++) {
  if (i%2 === 1) {
    continue;
  }
  console.log(i)
}
// continue를 이용하여 짝수만 출력

for (let i = 0; i <= 10; i++) {
  if (i > 8) {
    break;
  }
  console.log(i)
}
// break를 이용하여 8을 만나면 멈추고 8까지 출력
