import getType from './getType';
import random from './getRandom';
import _ from 'lodash';
// import _, {functionsIn} from 'lodash';

// typeof =======================================

// console.log(typeof 'hello dorld')
// console.log(typeof 123)
// console.log(typeof true)
// console.log(typeof undefined)
// console.log(typeof null)
// console.log(typeof {})
// console.log(typeof [])

// console.log(getType(123))
// console.log(getType(false))
// console.log(getType(null))
// console.log(getType(undefined))
// console.log(getType({}))
// console.log(getType([]))
// console.log(getType('Hanail'))


// lodash 패키지 활용 =============================

// console.log('Hello, world')
// console.log(_.camelCase('hello world'))


// 삼항 연산자(ternary operator) ==================

// const a = 1 < 2;

// if (a) {
//   console.log('참')
// } else {
//   console.log('거짓')
// }

// console.log(a ? '참' : '거짓')


// random() 함수 =================================

// const a = random();


// if 문 =========================================

// if (a === 7) {
//   console.log('럭키세븐 뜻다!!')
// } else if (a === 1) {
//   console.log('넘버원 등장이오!')
// } else if (a === 10) {
//   console.log('최대값 출력!')
// } else {
//   console.log('다음기회에...')
// }


// switch 문 =====================================

// switch (a) {
//   case 0:
//     console.log(a, '이 나왔습니다.');
//     break;
//   case 1:
//     console.log(a, '이 나왔습니다.');
//     break;
//   case 2:
//     console.log(a, '가 나왔습니다.');
//     break;
//   default:
//     console.log('원하는 숫자가 아닙니다.');
// }


// 반복문 ========================================
//* for (시작조건; 종료조건; 변화조건) {}

// const ulEl = document.querySelector('ul');

// for (let i = 0; i < 10; i++) {
//   const li = document.createElement('li')
//   li.textContent = `list-${i + 1}`
//   ulEl.appendChild(li)
//   li.addEventListener('click', () => {
//     console.log(li.textContent)
//   })
// }


// var, let, const ===============================
//* var : 함수레벨(비추)
//* let, const : 블럭레벨(권장)

// function Var() {
//   if (true) {
//     var v = 'var'
//     console.log(v) // 호출가능
//   }
//   console.log(v) // 호출가능
// }
// Var()

// function Let() {
//   if (true) {
//     let l = 'let'
//     console.log(l) // 호출가능
//   }
//   console.log(l) // 호출불가
// }
// Let()

// function Const() {
//   if (true) {
//     const c = 'const'
//     console.log(c) // 호출가능
//   }
//   console.log(c) // 호출불가
// }
// Const()


// 형 변환(Type conversion) =====================================

// const a = 1
// const b = '1'
// console.log(a == b) // 결과(true) => 동등연산자 비추(형변환 발생 )
// console.log(a === b) // 결과(false) => 일치연산자 권장

//* Truthy(참 같은 값)
//* true, {}, [], 1, 2, 'false', -12, '3.14' ...

//* falsy(거짓 같은 값)
//* false, '', null, undefined, 0 -0, NaN

// if (true) {
//   console.log('참이면 출력됨')
// }


// 함수복습 ======================================================
// function sum() {
//   console.log(arguments)
//   //* arguments : 입력된 인수를 배열로 반환(인수가 많을 경우 사용)
//   return arguments[0] + arguments[1]
//   //* return : 함수 밖으로 반환 또는 종료의 의미
// }

// console.log(sum(3, 10))

// //* 함수선언(기명함수)
// function double() {
//   console.log(a * 2);
// }
// double1();

// //* 함수 표현식(익명함수)
// const double1 = function () {
//   console.log(a * 2);
// };


// 화살표 함수 =============================================
//* () => {} vs function () {}

// const double = function (x, y) {
//   return x * 2
//   return y * 3
// };

// console.log('double : ', double(7));

// const doubleArrow = x => x * 2
// const doubleArrow1 = y => ({name:'hanail'}, {y: 10})

// console.log('doubleArrow : ', doubleArrow(7))
// console.log('doubleArrow1 : ', doubleArrow1(7))


// 즉시 실행함수 ===========================================
//* IIFE, Immediately-Invoked Function Expression

// const a = 7;
// function double() {
//   console.log(a * 2)
// }
// double();

// //* 즉시실행 함수 코딩방법 : 세미콜론 사용권장
// (function () {
//   console.log(a * 2)
// })();

// (function () {
//   console.log(a * 2)
// }());


// 호이스팅(Hoisting) ======================================
//* 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
//* 함수를 선언했을 때 가능하며 함수 표현식은 호이스팅이 안됨

// const a = 11;

// double();


// 타이머 함수 ==============================================
//* setTimeout(함수, 시간) : 일정 시간 후 함수 실행
//* setInteval(함수, 시간) : 일정 시간 간격마다 함수 실행
//* clearTimout(함수, 시간) : 설정된 setTimeout() 함수를 종료
//* clearInteval(함수, 시간) : 설정된 setInteval() 함수를 종료

// setInterval(() => {
//   console.log('Hanail');
// }, 3000);

// let t = 1
// const Timer = setInterval(() => {
//   console.log(t++);
// }, 1000);

// const stopTimer = document.querySelector('button')
// stopTimer.addEventListener('click', ()=> clearInterval(Timer))


// 콜백(Callback) ===========================================
//* 함수의 인수로 사용되는 함수

// function timeOut(cb) {
//   setTimeout(() => {
//     console.log('hanail')
//     cb()
//   }, 3000)
// }

// timeOut(() => {
//   console.log('실행완료')
// })


// 생성자 함수****
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


// this ====================================================
//* 일반(Normal) 함수는 호출 위치에 따라서 this 정의!
//* 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!

// function User(name) {
//   this.name = name
// }
// User.prototype.normal = function () {
//   console.log(this.name)
// }

// User.prototype.arrow = () => {
//   console.log(this.name)
// }

// const Hanail = new User("Hanail")

// Hanail.normal()
// HanaHanailil.arrow()

// const timer1 = {
//   name: 'Hanail',
//   timeout: function () {
//     setTimeout(function () {
//       console.log(this.name)
//     }, 3000)
//   }
// }
// timer1.timeout(); // 호출위치에 따라 -> 결과 : undefind


// const timer2 = {
//   name: 'Hanail',
//   timeout: function () {
//     setTimeout(() => {
//       console.log(this.name)
//     }, 3000)
//   }
// }
// timer2.timeout() // 함수의 범위에서 -> 결과 : 3초뒤 Hanail 출력


// ES6 classes ================================================
// const Hanail1125 = {
//   name: 'Hanail',
//   normal() { // normal: function() 축약형
//     console.log(this.name);
//   },
//   arrow: () => {
//     console.log(this.name);
//   }
// };
// Hanail1125.normal();
// Hanail1125.arrow(); // 에러발생

// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }

// User1.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }

// class 문법으로 정의
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


// 상속(확장) =========================================
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


// JS 데이터 =========================================================
//* String : "", '', ``
//* Number
//* boolean : true, false
//* undefined
//* null
//* Array : []
//* Ojbect : {}

//* incdxOf('찾을 문자열') : 문자열을 찾아 index값을 반환
// const result = '가락중학교  '
// const substring = '가락'
// const find = result.indexOf(substring)
// console.log(find, '번째에 위치')

//* substr(시작인텍스값, 길이) : 시작인텍스부터 길이만큼 문자열을 반환
// const findString = result.substr(find, 2)
// console.log(findString)

//* replace('찾을 문자열', '교체 문자열') : 찾은 문자열을 교체 문자열로 반환
// const changText = result.replace('가락', '성지') //* 교체
// const changText1 = result.replace('가락', '') //* 삭제
// console.log(changText)
// console.log(changText1)

//* match('찾을 문자열') : 지정된 문자열을 포함하는 문자열을 찾아 반환
// const Email = "hanail011250@gmail.com"
// const School = "서울가락중학교"
// const Match1 = Email.match(/.+(?=@)/) //* 정규표현식을 추출
// const Match2 = School.match('가락')
// console.log(Match1[0])
// console.log(Match2[0])

//* trim() : 문자열의 앞뒤의 공백을 제거하고 반환
// const str = '     Hello world'
// console.log(str)
// console.log(str.trim())

// const pi = 3.1445463123165
// const str = pi.toFixed(2) // 인수의 소수점 자리수 만큼 "문자열로" 반환
// console.log(str)
// console.log(typeof str)

// const integer = parseInt(str) // 정수값 반환
// const float = parseFloat(str) // 실수값 반환
// const number = Number(str) // 실수값 반환
// console.log(integer)
// console.log(float)
// console.log(number)
// console.log(typeof integer, typeof float, typeof number)


// 수학과 숫자 ====================================================================
// console.log(Math.abs(-9)) // 절대값 반환
// console.log(Math.min(2, 8)) // 최소값 반환
// console.log(Math.max(2, 8)) // 최대값 반환
// console.log(Math.ceil(3.14)) // 소수점 이하 올림처리
// console.log(Math.floor(3.14)) // 소수점 이하 내림처리
// console.log(Math.round(3.14)) // 소수점 이하 반올림처리
// console.log(Math.random()) // 0~1 사이의 난수발생

// console.log(random()); // getRandom.js 호출값


// 배열 데이터 =====================================================================
// const number = [1, 2, 3, 4];
// const fruits = ['Apple', 'Banana', 'Cherry']

// console.log(number)
// console.log(fruits)

//* find() : 조건을 만족하는 첫번째 요소를 찾아 반환하고 즉시 종료
// console.log(number.find(el => el > 2))

//* concat() : 배열을 결합하여 새로운 배열 반환(원본에 영향 없음)
// console.log(number.concat(fruits))

//* forEach(현재요소, 인텍스, 배열) : 배열을 반복실행하는 메소드로 return값이 따로 없다.
// fruits.forEach((Item, idx, array) => {
//   console.log(idx)
//   console.log(Item)
//   console.log(array)
//   console.log(idx, Item)
// });

//* map() : forEach()와 거의 비슷하지만 return값을 가진다.
// const fruits = ['Apple', 'Banana', 'Cherry']

// const a = fruits.forEach((item, idx) => {
//   console.log(`${idx} - ${item}`)
// })
// console.log(a) // froEach()는 반환값이 없으므로 결과는 undefined 이다

// const b = fruits.map((fruit, idx) => ({
//   id: idx,
//   name: fruit
// }))
// console.log(b); // map()은 반환값이 있으므로 출력값을 호출한다.

//* filter() : 배열을 조건에 따라 필터링하여 새로운 배열로 반환
// const numbers = [1, 2, 3, 4]

// const a = numbers.map(number => number < 3) // 매개변수가 없으므로 boolean 배열 반환
// console.log(a)

// const b = numbers.filter(number => number < 3)
// console.log(b);

//* find(), .findIndex()
//* .find() : 조건에 맞는 요소를 찾아 반환하고 즉시 종료된다.
//* .findIndex() : 조건에 맞는 요소의 index값을 찾아 반환하고 즉시 종료된다.

// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry']

// const a = fruits.find(fruit => /^B/.test(fruit));
// console.log(a)

// const b = fruits.findIndex(fruit => /^B/.test(fruit));
// console.log(b);


// .includes() ==========================================================
//* 배열내에 검색요소의 포함여부를 판별하여 boolean으로 반환
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry'];

// const a = numbers.includes(3);
// console.log(a)

// const b = fruits.includes('Kiwi');
// console.log(b)


// push(), .unshift ====================================================
//* 원본 수정됨 주의!
//* push(추가요소) : 원본배열의 마자막에 요소추가
//* unshift(추가요소) : 원본배열의 처음에 요소추가
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry'];

// numbers.push(5);
// console.log(numbers)

// numbers.unshift(0);
// console.log(numbers);


//* reverse() : 원본배열요소의 순서를 반전환시켜 =========================
//* 원본 수정됨 주의!
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry'];

// numbers.reverse()
// fruits.reverse()

// console.log(numbers)
// console.log(fruits)


//* splice() ==========================================================
//* 원본 수정됨 주의!
//* splice(index, 삭제갯수) : 해당index에 지정갯수만큼 삭제
//* splice(index, 0, 삽입요소,...) : 해당 index에 한개이상의 요소를 삽입
// const numbers = [1, 2, 3, 4]
// const fruits = ['Apple', 'Banana', 'Cherry'];

// numbers.splice(2, 1);
// console.log(numbers)

// numbers.splice(2, 0, 99);
// console.log(numbers)

// numbers.splice(2, 0, 999, 9999);
// console.log(numbers)

// numbers.splice(2, 1, 99999);
// console.log(numbers);

// fruits.splice(2, 0, 'Orange');
// console.log(fruits)


///////////////////////////////////////////////////////////////////////
//* Object ============================================================
//* assign(대상객체, 소스객체,....)
//* 대상객체에 한개이상의 소스객체를 병합하여 객체를 반환한다.

// const userAge = {
//   //* key: value 형태
//   name: 'Hanail',
//   age: 54
// }

// const userEmail = {
//   name: 'Hanail011250',
//   email: 'hanail011250@gmail.com'
// }

// const target = Object.assign(userAge, userEmail)
// console.log(target)
// console.log(userAge)
// console.log(userEmail)
// console.log(target === userAge)
// console.log(target === userEmail)

//* 대상객체를 빈객체 {}, 로 사용 할 경우 새로운 객체를 생성하여 반환
// const targetAdd = Object.assign({}, userAge, userEmail)
// console.log(targetAdd)

// console.log(target === targetAdd)
// console.log(userAge === targetAdd)
// console.log(userEmail === targetAdd)

// const a = {k: 123}
// const b = {k: 123}
// console.log(a === b)


// keys() ===============================================================
//* 객체데이터의 키값만 반환하여 배열로 생성

// const user = {
//   name: 'Hanail',
//   age: 54,
//   email: 'hanail011250@gmail.com'
// }

// const keys = Object.keys(user)
// console.log(keys)

// console.log(user['email']) // 객체데이터 인덱싱 -> use.email 과 동일

// const values = keys.map(key => user[key])
// console.log(values)


//* 구조 분해 할당(Destructuring assingmnent) =============================
//* 비구조화 할당
// const user = {
//   name: 'Hanail',
//   age: 54,
//   email: 'hanail011250@gmail.com',
//   address:'USA'
// }

// const {name, age, email, address} = user
// const {name: nm, age, email, address = 'Korea'} = user

// console.log(`사용자의 이름은 ${nm} 입니다.`)
// console.log(`${nm}의 나이는 ${age}세 입니다.`)
// console.log(`${nm}의 이메일 주소는 ${email} 입니다.`)
// console.log(address)

// const fruits = ['Applle', 'Banana', 'Cherry']
// const [a, b, c, d] = fruits
// console.log(a, b, c, d)

// const [, b] = fruits // Banana만 출력
// console.log(b)


// 전개 연산자(Spread) =========================================
// const fruits = ['Applle', 'Banana', 'Cherry', 'Orange']

// console.log(fruits)
// console.log(...fruits)

// const toObject = (a, b, ...c) => ({a, b, c})
// console.log(toObject())


//* 데이터 불변성(Immutability) =================================
//* 원시 데이터 String, Number, Boolean, underfined, null
//* 참조형 데이터: Object, Array, function


//* 얕은 복사(shallow copy), 깊은 복사(Deel copy) ===============
// const user = {
//   name: 'Hanail',
//   age: 54,
//   emails: ['hanail011250@gmail.com'],
//   address:'korea'
// }

// const copyUser = user
// console.log(copyUser === user)

// const copyUser = Object.assign({}, user) //* 첫번째 (얕은)복사방법
// const copyUser = {...user} //* 두번째 (얕은)복사방법
// const copyUser = _.cloneDeep(user) //* 세번째 (깊은)복사방법
// console.log(copyUser === user)

// user.age = 22
// console.log('user', user)
// console.log('copyUser', copyUser)

// user.emails.push('hsi05200@naver.com')
// console.log(user.emails === copyUser.emails)
// console.log('user', user)
// console.log('copyUser', copyUser)