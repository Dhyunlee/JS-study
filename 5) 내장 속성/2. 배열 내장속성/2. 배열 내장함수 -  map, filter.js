/*
 [map]
  : 배열 안의 각 원소를 변환 할 때 사용 되며, 이 과정에서 새로운 배열이 만들어진다. 
 
   1. map()메서드를 사용하면 forEach()과는 다르게 배열 내의 모든 요소 각각에 대해 주어진 함수를 
      호출한 결과(리턴값)를 모아 새로운 배열을 반환한다.
*/ 
const array = [1, 2, 3, 4, 5, 6, 7, 8];
      
newArray = array.map(num => {return num});
console.log(newArray);


// 2. map()메서드의 피라미터인 함수에 의해 배열의 요소를 변환할 수 있다.
let changeArr = array.map(num => {return num * num})
console.log(changeArr)





/* 
[filter]
 : 배열에서 특정 조건을 만족하는 값들만 따로 추출하여 새로운 배열을 만든다. 
*/

/* 
    이전에 만든 todos 배열에서 done값이 false인 항목만 
    따로 추출해서 새로운 배열을 만들어 보자 
*/

const todos = [
  {
    id: 1,
    text: '자바스크립트 입문',
    done: true
  },
  {
    id: 2,
    text: '함수 배우기',
    done: true
  },
  {
    id: 3,
    text: '객체와 배열 배우기',
    done: false
  },
  {
    id: 4,
    text: '배열 내장함수 배우기',
    done: false
  }
];

 const takeNotDone = todos.filter(todo => todo.done === false)
 // todos.filter(todo => !todo.done)처럼 사용할 수 있다. 
 console.log(takeNotDone); // todos의 done항목 중 false만 보여줌 
