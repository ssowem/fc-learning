// 전개연산자 (Sparead): JavaScript에서 특별한 문법 구조로
// 배열이나 객체의 요소를 분해하거나 전개할 때 사용

const fruits = ['Apple', 'Banana', 'Cherry']
// 문자데이터 형태로 출력
console.log(fruits);
// 마침표3개 '...'를 사용하면 전개연산자
// => 배열데이터를 쉼표','로 구분하는 각각의 아이템으로 전개해서 출력을 하게된다.
console.log(...fruits);


// 객체데이터로 변환해주는 함수 로직
// 리턴 키워드를 통해 데이터를 반환
function toObject(a, b, c) {
  return {
    a: a,
    b: b,
    c: c
  }
};

console.log(toObject(...fruits));