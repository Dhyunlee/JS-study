/*
[spread 와 rest] 
 
  2. rest피라미터
    : spread연산자와 마찬가지로 ...를 사용하지만, spread연산자와는 반대로
       먼저 선언된 파라미터에 할당된 인수를 제외한 나머지 인수들이 모두 rest피라미터에
       배열로 담겨 할당된다. 
   - 객체, 배열, 그리고 함수의 파라미터에서 사용이 가능
   - ...rest는 항상 맨 뒤에 적어야한다.
     => ...rest, a,b (x)
      
*/

/* 
   [객체에서의 rest]
  -> 객체와 배열에서 사용할 때는 비구조화 할당 문법과 함께 사용된다. 
     사용할 때 이름을 꼭 rest로 사용할 필요는 없다. 
     (형태)
   => [a, b, ...rest]

*/   
const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
  };
  
  const { color, ...rest } = purpleCuteSlime;
  console.log(color);
  console.log(rest);

/*
  [배열에서의 rest]
*/  
const numbers = [0, 1, 2, 3, 4, 5, 6]; 

const [one, two, ...restNumber] = numbers; 
console.log(one)
console.log(two)
console.log(restNumber)
