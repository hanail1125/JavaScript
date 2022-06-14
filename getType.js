// data의 타입을 알아낼 수 있다.
export default function getType(data) {
  return Object.prototype.toString.call(data).slice(8, -1)
}