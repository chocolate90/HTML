'use strict';


// 2. Variable = Mutable data type
// let (added in ES6)

// global scope 어느곳에서나 출력가능
let globalname = 'global name';

// block scope 블럭안의 내용을 밖에서는 출력 불가
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
  console.log(globalname);
}
console.log(name);
console.log(globalname);

// var = 사용하지 말것
// var hoisting 어디에 선언했냐에 상관없이
//              선언을 항상 맨 위로 끌어올림

console.log(age);
age = 4;
console.log(age);
var age;

// var는 block scope가 없음
// block을 무시하고 밖에서도 출력

{
  age = 4;
  var age;
}
console.log(age);

// 3. Constants = Immutable data type
// Favor immutable data type always for a few reasons:
// - security
// - thread safety
// - reduce human mistakes

const daysInWeek = 7;
const maxNumber = 5;

// 4. Variable Types
// Primitive, single item : number, string, boolean
//                          null, undefined, symbol
// Object, Box Container : 아이템들을 여러개 묶어서 관리
// Fonction First-Class Fonction : js 에서는 Fonction도 변수로 설정 가능

// Number

const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'string' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// String
// Template Literals (String) = `${}`

const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`
console.log(`value: ${helloBob}, type: ${typeof helloBob}`);
console.log('value: ' + helloBob + ', ' + 'type: ' + typeof helloBob);

// Boolean
// False : 0, null, undefined, NaN, ''
// true : any other value

const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// Null

let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// Undefined

let x;
console.log(`value: ${x}, type: ${typeof x}`);

// Symbol : 고유한 식별자가 필요할 때 사용

const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);

const gsymbol1 = Symbol.for('id');
const gsymbol2 = Symbol.for('id');
console.log(gsymbol1 === gsymbol2);

// Symbol을 출력할 땐 .description을 사용

console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// Object

const ellie = {name: 'ellie', age: 20};
console.log(ellie);

// Object로 설정한 값(ellie)는 바꿀 수 없지만 그 안의 변수는 변경 가능

ellie.age = 17;
console.log(ellie);

// Dynamic Typing: Dynamically Typed Language
// 역동적으로 변할 수 있는 변수 타입때문에 런타임 오류가 잘 날 수 있음

let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text= '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);
console.log(text.charAt(0)); // text는 number type이기 때문에 오류
