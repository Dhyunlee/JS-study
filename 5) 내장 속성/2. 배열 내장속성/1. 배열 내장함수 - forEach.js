/*
< ----
    배열 내장함수 내용을 다 암기할 필요는 없고, 이것이 어디에 사용하는 지
    이해하는 게 중요 (나중에 필요할 때 찾아서 쓰면 되므로 )

    배열 내장함수 참조사이트: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from (mdn)
  ---- >

   [forEach]
    : 반복문을 사용하여 배열을 요소 접근(나열하기)을 좀더 간결하게 나타낼 수 있다. 

*/

// 1. forEach기본 구조
const superheroes1 = ['아이언맨','캡틴 아메리카','토르'] //배열 선언

 function print(heroes) { // 배열 나열을 출력할 함수 선언 
     console.log(heroes)
 }

 superheroes1.forEach(print) // forEach()함수를 통해 print함수 호출 
/* [설명]  
  forEach 함수의 파라미터로는, 각 원소에 대하여 처리하고 싶은 코드를 함수로 넣어준다. 
  이 함수의 파라미터 heroes는 각 원소(요소)를 가르키게 됩니다.
  이렇게 함수형태의 파라미터를 전달하는 것을 콜백함수 라고 부른다. 함수를 등록해주면,
   forEach 가 실행을 된다.
*/


// 2. 좀 더 간단하게 나타낼 수 있다. 
const superheroes2 = ['캡틴 아메리카', '토르', '닥터 스트레인지']

superheroes2.forEach(function (heroes){
    console.log(heroes)
})


// 3. forEach()안에 익명함수를 화살표 함수로 나타내면 더 간결하다. 
// 이후의 예제는 이 방법으로 함
const superheroes3 = ['토르','캡틴 아메리카','아이언맨']

superheroes3.forEach((heroes) => {
    console.log(heroes)
})


// 4. forEach()는 외부로 리턴값을 받지 못함
const arrList = [1, 2, 3, 4, 5],
      result = arrList.forEach(num => {return num} )

console.log(result) //undefined     
