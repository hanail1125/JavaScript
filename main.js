import random from './getRandom';

/***** 삼항 연산자(ternary operator) *****/

// const a = 1 < 2;

/*if (a) {
  console.log('참')
} else {
  console.log('거짓')
}*/

// console.log(a ? '참' : '거짓')


/***** random() 함수 *****/
/*const a = random();*/


/***** if 문 *****/
/*if (a === 0) {
  console.log(a, '이 나왔습니다.');
} else if (a === 1) {
  console.log(a, '이 나왔습니다.');
} else if (a === 2) {
  console.log(a, '가 나왔습니다.');
} else {
  console.log('원하는 숫자가 아닙니다.');
}*/


/***** wwitch 문 *****/
/*switch (a) {
  case 0:
    console.log(a, '이 나왔습니다.');
    break;
  case 1:
    console.log(a, '이 나왔습니다.');
    break;
  case 2:
    console.log(a, '가 나왔습니다.');
    break;
  default:
    console.log('원하는 숫자가 아닙니다.');
}*/


/***** 반복문 *****/
// for (시작조건; 종료조건; 변화조건) {}

// const ulEl = document.querySelector('ul');

// for (let i = 0; i < 10; i++) {
//   const li = document.createElement('li');
//   ulEl.appendChild(li);
//   li.textContent = `list-${i + 1}`;
//   li.addEventListener('click', () => {
//     console.log(li.textContent)
//   })
// }


/***** 함수복습 *****/
// function sum() {
//   console.log(arguments)
//   return arguments[0] + arguments[1]
// }

// console.log(sum(3, 10))


/****** 화살표 함수 *****/
// () => {} vs function () {}

// const double = function (x, y) {
//   return x * 2
//   return y * 3
// };

// console.log('double : ', double(7));

// const doubleArrow = x => x * 2
// const doubleArrow1 = y => ({name:'hanail'}, {y: 10})

// console.log('doubleArrow : ', doubleArrow(7))
// console.log('doubleArrow1 : ', doubleArrow1(7))


/***** 즉시 실행함수 *****/
// IIFE, Immediately-Invoked Function Expression

// const a = 7;
// function double() {
//   console.log(a * 2)
// }
// double();

// (function () {
//   console.log(a * 2)
// })();

// (function () {
//   console.log(a * 2)
// }());


/***** 호이스팅(Hoisting) *****/
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
// 함수를 선언했을 때 가능하며 함수 표현식은 호이스팅이 안됨

// const a = 11;

// double();


/***** 함수선언 *****/
// function double() {
//   console.log(a * 2);
// }

// double1();


/***** 함수 표현식 사용 *****/
// const double1 = function () {
//   console.log(a * 2);
// };


/***** 타이머 함수 *****/
// setTimeout(함수, 시가) : 일정 시간 후 함수 실행
// setInteval(함수, 시가) : 일정 시간 간격마다 함수 실행
// clearTimout(함수, 시가) : 설정된 setTimeout() 함수를 종료
// clearInteval(함수, 시가) : 설정된 setInteval() 함수를 종료

// setTimeout(() => {
//   console.log('Hanail');
// }, 3000);

// let t = 1
// setInterval(() => {
//   console.log(t++);
// }, 1000);


/***** 콜백(Callback) *****/
// 함수의 인수로 사용되는 함수

// function timeOut(cb) {
//   setTimeout(() => {
//     console.log('hanail')
//     cb()
//   }, 3000)
// }

// timeOut(() => {
//   console.log('실행완료')
// })


/***** 생성자 함수 *****/
// const hanail = {
//   firstName: 'SeungHanail',
//   lastName: 'Hwang',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// };
// console.log(hanail.getFullName())

// const byeol = {
//   firstName: 'HanByeol',
//   lastName: 'Hwang',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// };
// console.log(byeol.getFullName())

// const sinhye = {
//   firstName: 'SinHye',
//   lastName: 'Hwang',
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`
//   }
// };
// console.log(sinhye.getFullName());

// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

// const Hanail = new User('SeungHanail', 'Hwang')
// const SinHye = new User('SinHye', 'Hwang')
// const HanByeol = new User('HanByeol', 'Hwang');

// console.log(Hanail)
// console.log(SinHye.getFullName())
// console.log(HanByeol.getFullName())


/***** this *****/
// 일반(Normal) 함수는 호출 위치에 따라서 this 정의!
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

// const Hanail = {
//   name: 'Hanail',
//   normal: function () {
//     console.log(this.name);
//   },
//   arrow: () => {
//     console.log(this.name);
//   }
// };

// Hanail.normal(); // 호출위치에 따라 -> 결과: Hanail
// Hanail.arrow(); // 함수의 범위에서 -> undefine 에러발생

// const timer = {
//   names: 'Hanail!!',
//   timeout: function () {
//     setTimeout(() => {
//       console.log(this.names);
//     }, 3000)
//   }
// };

// timer.timeout();


/***** ES6 classes *****/
// const Hanail = {
//   name: 'Hanail',
//   normal() {
//     console.log(this.name);
//   },
//   arrow: () => {
//     console.log(this.name);
//   }
// };
// Hanail.normal();

// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

// class User {
//   constructor (first, last) {
//     this.firstName = first
//     this.lastName = last
//   }
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`
//   }
// }

// const Hanail = new User('SeungHanail', 'Hwang');
// const SinHye = new User('SinHye', 'Hwang');
// const HanByeol = new User('HanByeol', 'Hwang');
// console.log(Hanail);
// console.log(SinHye.getFullName());
// console.log(HanByeol.getFullName());


/***** 상속(확장) *****/
// class Vehicle {
//   constructor (name, wheel) {
//     this.name = name
//     this.wheel = wheel
//   }
// }
// const myVehicle = new Vehicle('운송수단', 2)
// console.log(myVehicle)

// class Bicycle extends Vehicle {
//   constructor (name, wheel) {
//     super(name, wheel)
//   }
// }
// const myBicycle = new Bicycle('삼천리', 2)
// const daughtersBicycle = new Bicycle('세발', 3)
// console.log(myBicycle)
// console.log(daughtersBicycle)

// class Car extends Vehicle {
//   constructor (name, wheel, license) {
//     super(name, wheel)
//     this.license = license
//   }
// }
// const myCar = new Car('벤츠', 4, true)
// const doughtersCar = new Car('포르쉐', 4, false)
// console.log(myCar)
// console.log(doughtersCar)


/***** String *****/
// const result = '     Hello world!  '
// console.log(result.trim())

// const pi = 3.1445463123165
// const str = pi.toFixed(2) // 사용된 인수값의 수수점 자리수 문자열 반환
// console.log(str)
// console.log(typeof str)

// const integer = parseInt(str) // 정수값 반환
// const float = parseFloat(str) // 실수값 반환
// console.log(integer)
// console.log(float)
// console.log(typeof integer, typeof float)


/***** 수학과 숫자 *****/
// console.log(Math.abs(-9)) // 절대값 반환
// console.log(Math.min(2, 8)) // 최소값 반환
// console.log(Math.max(2, 8)) // 최대값 반환
// console.log(Math.ceil(3.14)) // 소수점 이하 올림처리
// console.log(Math.floor(3.14)) // 소수점 이하 내림처리
// console.log(Math.round(3.14)) // 소수점 이하 반올림처리
// console.log(Math.random()) // 0~1 사이의 난수발생

// console.log(random()); // getRandom.js 호출값


/***** .concat() *****/ // 배열을 결합하여 새로운 배열 반환(원본에 영향 없음)
// const number = [1, 2, 3, 4];
// const fruits = ['Apple', 'Banana', 'Cherry']

// console.log(number)
// console.log(fruits)
// console.log(number.concat(fruits))


/***** .forEach() *****/ //배열 data를 반복적으로 실행하는 메소드로 return값이 따로 없다.
// fruits.forEach((Item, index, array) => {
//   console.log(index, Item)
//   // console.log(index)
//   // console.log(array)
//   // console.log(Item, index, array)
// });


/***** .map() *****/ // .forEach()와 거의 비슷하지만 return값을 가진다.
// const number = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// const a = fruits.forEach((item, index) => {
//   console.log(`${index} - ${item}`)
// })
// console.log(a)

// const b = fruits.map((item, index) => ({
//   id: index,
//   name: item
// }))
// console.log(b);


/***** .filter *****/ // 배열을 조건에 따라 필터링하여 배열로 반환
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// const a = numbers.map(number => number < 3)
// console.log(a)

// const b = numbers.filter(number => number < 3)
// console.log(b);


/***** .find(), .findIndex() *****/
// .find() : 조건에 맞는 요소를 찾아 반환하고 즉시 종료된다.
// .findIndex() : 조건에 맞는 요소의 index값을 찾아 반환하고 즉시 종료된다.
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// const a = fruits.find(fruit => /^B/.test(fruit));
// console.log(a)

// const b = fruits.findIndex(fruit => /^B/.test(fruit));
// console.log(b);


/***** .includes() *****/ // 배열내에 검색요소의 포함여부를 판별하여 반환
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry'];

// const a = numbers.includes(3);
// console.log(a)

// const b = fruits.includes('Hanail');
// console.log(b)


/***** .push(), .unshift *****/
// 원본 수정됨 주의!
// .push() : 원본배열의 마자막에 요소추가
// .unshift() : 원본배열의 처음에 요소추가
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry'];

// numbers.push(5);
// console.log(numbers)

// numbers.unshift(0);
// console.log(numbers);


/***** .reverse() *****/ // 원본배열요소의 순서를 반전환시켜 반환
// 원본 수정됨 주의!
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry'];

// numbers.reverse()
// fruits.reverse()

// console.log(numbers)
// console.log(fruits)


/***** .splice() *****/
// 원본 수정됨 주의!
// .splice(index, 삭제갯수) : 해당index에 지정갯수만큼 삭제
// .splice(index, 0, 요소,...) : 해당 index에 요소를 삽입
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry'];

// numbers.splice(2, 0, 999);
// numbers.splice(2, 0, 999, 9999);
// numbers.splice(2, 1, 99);
// console.log(numbers);

// fruits.splice(2, 0, 'Orange');
// console.log(fruits)



//////////////////////////////////////////////////////////////////
/***** Object *****/
/***** .assign(대상객체, 출처객체,....) *****/
// 대상객체에 출처객체를 복사하여 객체를 반환한다.
const target = {a: 1, b: 2}
const source = {b: 4, c: 5}

const returnedTarget = Object.assign(target, source)
console.log(target)
console.log(returnedTarget)