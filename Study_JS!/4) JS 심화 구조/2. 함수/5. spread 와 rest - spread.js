/* 
  [spread 와 rest] 
 
  1. spread(전개 구문)
    : 기존 객체 또는 배열을 새로운 객체 또는 
      배열에 추가하여 할당된다.
      여기서 사용하는 ...을 spread연산자라 한다.  

  (형태)
   => ...[기존 객체명(또는 배열명)]
*/

const slime1 = {
  name: '슬라임'
};

const cuteSlime1 = {
  name: '슬라임',
  attribute: 'cute'
};

const purpleCuteSlime1 = {
  name: '슬라임',
  attribute: 'cute',
  color: 'purple'
};

console.log(slime1);
console.log(cuteSlime1);
console.log(purpleCuteSlime1);

/*
 // 위 코드에 spread문법을 사용하기!
   - 기존의 것을 건들이지 않고, 새로운 객체를 만들 때에 spread문법을 사용한다. 
*/
const slime2 = {
  name: '슬라임'
};

const cuteSlime2 = {
  ...slime2,
  attribute: 'cute'
};

const purpleCuteSlime2 = {
  ...cuteSlime2,
  color: 'purple'
};

console.log(slime2);
console.log(cuteSlime2);
console.log(purpleCuteSlime2);



// 두 객체가 서로 다른지 검사(즉 각각의 것들은 새로운 객체이다.)
console.log(slime2 === cuteSlime2);
console.log(cuteSlime2 === purpleCuteSlime2);


// spread연산자는 배열에도 사용할수있다.
const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기'];

console.log(animals);
console.log(anotherAnimals);


// 배열에서 spread연산자를 여러번 사용할 수 있다.
const numbers = [1, 2, 3, 4, 5];

const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers); // [1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5]


