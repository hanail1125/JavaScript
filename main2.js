// JSON(JavaScript Object Notation) ========================================================
//* 인터넷에서 자료를 주고 받을 때 그 자료를 표현하는 방법으로 대표적으로 서버와의 통신에서 데이터를 주고받는 하나의 포맷을 사용
//* 문자열은 자바스크립트의 객체 표시법과 유사하며 반드시 ""(쌍따옴표)만 사용가능
//* 사용가능한 기본 자료형은 JS에서 undefined를 제와한 아래의 나머지를 사용할 수 있다.
//* String, Number, Boolean, {}, [], null

// import myData from './myData.json'

// console.log(myData)

// const user = {
//   name: 'Hanail',
//   age: 54,
//   email: [
//     'hsi05200@gmail.com',
//     'hanail011250@gmail.com'
//   ]
// }
// console.log('user', user)

// const str = JSON.stringify(user)
// console.log("str", str)
// console.log("str typeof", typeof str)

// const obj = JSON.parse(str)
// console.log('obj', obj)
// console.log('obj typeof', typeof obj)


// LocalStorage 와 Sessionstorage ============================================================
//* LocalStorage : 읽기 전용 속성, 데이터를 반영구적으로 사용
//* SessionStorage : 읽기 전용 속성, 페이지를 닫을 때 소멸

// const user = {
//   name: "Hanail",
//   age: 55,
//   email: [
//     "hsi05200@gmail.com",
//     "hanail011250@gmail.com"
//   ]
// }

// const users = JSON.stringify(user)
// localStorage.setItem('user', users)
// const str = localStorage.getItem('user')
// const obj = JSON.parse(str)
// console.log(obj)
// obj.age = 17
// console.log(obj)
// localStorage.setItem('user', JSON.stringify(obj))
// localStorage.removeItem('user')

//* lowdb 를 이용한 DB 활용법 참조하기!!


// OMDb를 axois를 이용해서 정보 가져오기 =======================================================
//* 영화정보 주소 : https://www.omdbapi.com/?apikey=7035c60c&s=frozen
import axios from "axios";

function fetchMovies() {
  axios
    .get('https://www.omdbapi.com/?apikey=7035c60c&s=frozen')
    .then(res => {
      console.log(res)
      // const h1El = document.querySelector('h1')
      // const imgEl = document.querySelector('img')
      // h1El.textContent = res.data.Search[0].Title
      // imgEl.src = res.data.Search[0].Poster
    })
}

fetchMovies()