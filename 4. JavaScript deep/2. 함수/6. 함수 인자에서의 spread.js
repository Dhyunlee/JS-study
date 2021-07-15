/*
[spread 와 rest] 
 
  2. 함수 인자에서의 spread
    여기서 잠깐!! 
        [인자와 피라미터 구분]
     -> 함수에서 값을 읽을때, 그 값들을 파라미터(= 매개변수)라고 부른다. 그리고
        함수에서 값을 넣어줄 때, 그 값들은 인자(= 전달인자)라고 부른다. 
       [예제] 
        const myFunction(a) { // 여기서 a 는 파라미터
        console.log(a); // 여기서 a 는 인자
         }

        myFunction('hello world'); // 여기서 'hello world' 는 인자
*/

/* 
   sume()함수에 spread 사용 
   - 1이상 6이하의 합을 spread, reduce()함수를 사용하여 구하기!

*/   
function sum(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
const result = sum(...numbers);
console.log(result);

/*
  [퀴즈]
  함수에 n 개의 숫자들이 파라미터로 주어졌을 때, 그 중 가장 큰 값을 알아내세요.
  function max() {
    return 0;
  }
  
  const result = max(1, 2, 3, 4, 10, 5, 6, 7);
  console.log(result);
  
*/
function max(...numbers) {
    return numbers.reduce(
      // acc 이 current 보다 크면 결과값을 current 로 하고
      // 그렇지 않으면 acc 가 결과값
      (acc, current) => (current > acc ? current : acc),
      numbers[0]
    );
  }
  
  const result1 = max(1, 2, 3, 4, 10, 5, 6, 7);
  console.log(result1);

  // Math.max.apply()을 사용하여 풀어보기
  function max2(...rest) {
    const resultmax = Math.max.apply(null, rest)
    return resultmax; 
   }
   
   const result2 = max2(1,2,3,4,10,5,6,7)
   console.log(result2)


  // 응용 위의 피라미터의 값이 주어졌을 때, 가장 작은 수를 알아보기!
  function min(...rest) {
    const rMin = Math.min.apply(null, rest)
    return rMin
   }
   const r = min(1, 2, 3, 4, 10, 5, 6, 7)
   console.log(r)



