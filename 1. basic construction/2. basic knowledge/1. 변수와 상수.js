// [변수 만들기]

// 변수 선언
let num;

// 변수 초기화
num = 10;

// 변수 선언과 동시에 초기화
let num2 = 12;
console.log(num2);

// 한 줄에 변수를 여러개 선언
let number1 = 2, number2 = 13, number3 = 30;
console.log(number1 + number2 + number3);
/*
  한 줄에 변수를 여러개 작성하면 코드가 
  간결해지기는 하지만 가독성이 떨어지므로 
  한 줄에는 하나의 변수를 작성하는 것이 좋다.
*/

// 변수의 값 변경
let val_change = 'java';
val_change = 'javascript'
console.log(val_change)

// 한 변수의 값을 다른 변수에 복사
let hello = '오늘하루도 즐겁게'
let message = hello
console.log(message)
console.log(hello === message) //true

// 변수 예제
let radius1 = 10;
radius1 += 10;
console.log(radius1);

let radius = 30;
let pi = 3.14159265;
console.log(2 * pi * radius)

// [상수 만들기]  
const myBirthday = '18.04.1982'; // 상수를 생성함과 동시에 값 저장