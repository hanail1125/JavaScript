// random() 함수 : 1~10 사이의 값을 랜덤하게 호출
export default function random() {
  return Math.floor((Math.random() * 10) + 1);
}