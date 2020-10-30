/* 
   1. 배열의 값을 추가하는 메서드
   2. 배열의 값을 추출하는 메서드
   3. 배열의 값을 결합하는 메서드 
*/


// 1. 배열의 값을 추가하는 메서드 - unshift() 메서드, push() 메서드,

const numbers1 = [10, 20, 30, 40];

/* 
   (1) unshift() 메서드
 : 배열의 맨 앞에 새로운 값을 추가해준다. 
*/
numbers1.unshift(5);
console.log(numbers1);

/*
   (2) push() 메서드 
       : 배열의 맨 끝에 새로운 값을 추가해준다.  
*/
const newArr = numbers1.push(50)
console.log(newArr) // 새로운 배열 원소가 추가된 배열 길이
console.log(numbers1)



// 2. 배열의 값을 추출(제거)하는 메서드 - shift() 메서드, pop() 메서드 

const numbers2 = [10, 20, 30, 40];

/*
  (1) shift() 메서드
      : 배열의 맨 앞에 있는 값을 추출(제거)해준다.   
*/
const value1 = numbers2.shift();
console.log(value1);
console.log(numbers2);

/*
  (2) pop() 메서드 
      : 배열의 맨 끝에 있는 값을 추출(제거)해준다.
*/
const value2 = numbers2.pop();
console.log(value2);
console.log(numbers2);



// 3. 배열의 값을 결합하는 메서드 - concat() 메서드, join() 메서드

/*
  (1) concat() 메서드
      : 여러개의 배열을 하나의 배열로 합쳐준다. 
*/
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);
console.log(concated);

/*
  (2) join() 메서드
      : 배열 안의 값들을 문자열 형태로 합쳐주며, join() 메서드의 피라미터로 넘겨준 값으로 각 요소 
        사이에 구분을 둘 수 있다. 

        인자로 아무것도 전달하지 않으면 ','로 구분 한다. ''공백을 인자로 전달 할 경우 12345 같이 
        모든 요소가 구분 없이 리턴한다.
*/
const array = [1, 2, 3, 4, 5];
console.log(array.join()); // 1,2,3,4,5 → ','로 구분
console.log(array.join(' ')); // 1 2 3 4 5 → 1 2 3 4 5 같이 모든 요소가 구분 없이 리턴
console.log(array.join(', ')); // 1, 2, 3, 4, 5 → ', '로 구분 
console.log(array.join('A')); // 1A2A3A4A5 → 'A'로 구분 
