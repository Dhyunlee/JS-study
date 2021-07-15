/*
 [ reduce 함수]
  : 배열의 총합을 구할 때 사용한다. 
   → 이 함수를 잘 사용하면 정말 유용한 내장 함수이다. 
*/

/*
reduce 함수에는 두개의 파라미터를 전달합니다. 첫번째 파라미터는 accumulator 와
current 를 파라미터로 가져와서 결과를 반환하는 콜백함수이고, 두번째 파라미터는 
reduce 함수에서 사용 할 초기값이다. 여기서 accumulator 는 누적된 값을 의미한다.
*/

const numbers1 = [1, 2, 3, 4, 5];
let acc = numbers1.reduce((accumulator, current) => {
  console.log({ accumulator, current });
  return accumulator + current;
}, 0);;

console.log(acc);



// reduce 이해, 총합 구하기
const numbers1 = [1, 2, 3, 4, 5];
let sum1 = numbers1.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum1);

let sum2 = numbers1.reduce((accumulator, current) => {
  console.log({ accumulator, current });
  return accumulator + current;
}, 0);

console.log(sum2);

/*
reduce 를 사용해서 평균도 계산 할 수 있다. 평균을 계산하려면, 
가장 마지막 숫자까지 더하고 나서 배열의 length 로 나누어줘야한다.
*/


// 평균구하기
const numbers2 = [1, 2, 3, 4, 5];
let sum3 = numbers2.reduce((accumulator, current, index, array) => {
  if (index === numbers2.length - 1) { //마지막 요소일 때 평균 구함
    return (accumulator + current) / array.length;
  }
  return accumulator + current; // 마지막 요소까지 더함
}, 0);

console.log(sum3);

// reduce 다른 예시
const alphabets = ["a", "a", "a", "b", "c", "c", "d", "e"];
const counts = alphabets.reduce((acc, current) => {
  if (acc[current]) {
    acc[current] += 1;
  } else {
    acc[current] = 1;
  }
  return acc;
}, {});

console.log(counts);
