/*
   배열에서 해당 조건에 맞는 요소(인덱스)를 찾아주는 메서드
    : indexOf()메서드, includes()메서드, findIndex()메서드, find()메서드
*/

/* 
   1. indexOf 
      : 원하는 항목이 몇번째 index인지 찾아주는 메서드
        -> indexOf 메서드의 인자로 원하는 요소를 넣으면 그 요소에 해당하는 인덱스값을 반환한다.
 */

let superheros = ['캡틴 아메리카', '토르', '아이언맨', '닥터 스트레인지'];
let superherosIndexOf = superheros.indexOf('토르');
console.log(superherosIndexOf); //1


/*
   2. includes
      : 특정 항목을 포함하는 지를 확인하는 메서드 
        -> 특정 값이 존재하면 true를 존재하지 않으면 false를 반환한다.  
*/
let num = [10, 23, 31];
let numIncludes = num.includes(23);
console.log(numIncludes) //true



/*
   3. findIndex
      : 배열에서 조건에 맞는 값이 몇 번째 인덱스 인지 찾아주는 메서드, 
       -> findeIndex 메서드의 인자로 검사하고자하는 조건을 반환하는 함수를 넣어서 찾을 수 있다.  
*/
const toDo1 = [{
    id: 1,
    text: '함수 배우기',
    done: true
  },
  {
    id: 2,
    text: '객체와 배열 배우기',
    done: true
  },
  {
    id: 3,
    text: '배열 내장함수 배우기',
    done: false
  }
];

const todoFindIndex = toDo1.findIndex(todo => todo.id === 3);
console.log(todoFindIndex) //2


/*
   4. find
      : findIndex 메서드와 유사하지만, 차이점은 findIndex 메서드는 인덱스를 반환하지만 find 메서드는 요소를 반환한다. 
*/
const toDo2 = [{
  id: 1,
  text: '함수 배우기',
  done: true
},
{
  id: 2,
  text: '객체와 배열 배우기',
  done: true
},
{
  id: 3,
  text: '배열 내장함수 배우기',
  done: false
}
];

const todoFind = toDo2.find(todo => todo.id === 3);
console.log(todoFind) //{id: 3, text: "배열 내장함수 배우기", done: false}