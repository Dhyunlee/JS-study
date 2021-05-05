// 숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수를 만드세요    
function countBiggerThanTen(numbers) {
  let count = 0;
  numbers.forEach( n => {
     if(n > 10) {
       count++;
     }
  });
  return count;
}

const count = countBiggerThanTen(
  [1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5
