// # 연산자
let x = 10, y = 4;
console.log('x + y =', x + y);
console.log('x - y =', x - y);
console.log('x * y =', x * y);
console.log('x / y =', x / y);
console.log('x % y =', x % y);


// * 연산자 우선순위 *
console.log(5 + 3 * 2);
console.log((5 + 3) * 2);


// * 대입 연산자 *
let x = 12, y = 27, z = 5;
console.log('[x = x - 5] = ', x = x - 5);
console.log('y -= 5 =', y -= 5);   // y = y - 5 와 같은 표현임.
console.log('z =- 5 =', z = - 5);  // z = - 5 와 같은 표현임. 

//z =- 5 연산은 단순히 -5를 변수 z에 할당,  y = y - 5연산과 비교하여 살펴보자!


// * 증감 연산자 *
let num1 = 10
console.log(num1++); //10
console.log(num1++); //11
console.log(num1++); //12
console.log(num1); //13

let num2 = 10
console.log(++num2); //11
console.log(++num2); //12
console.log(++num2); //13
console.log(num2); //13


//  * 비교 연산자 *
// 1) 동등 / 일치 비교 연산자
console.log('' == '0');  // false
console.log(0 == '');  // true
console.log(0 == '0');  // true

console.log(false == 'false');  // false
console.log(false == '0');  // true

console.log(false == undefined);  // false
console.log(false == null);  // false
console.log(null == undefined);  // true

console.log(5 != 8);  // true
console.log(5 != 5);  // false
console.log(5 != '5');  // false

console.log(5 !== 8); // true
console.log(5 !== 5); // false
console.log(5 !== '5'); // true


// 2) 대소 관계 비교 연산자
console.log(5 > 2); //true
console.log(5 < -5); //false
console.log(12 >= 12); //true
console.log(5 <= 0); //false
console.log('가방' < '하마'); //true


// * 논리 연산자 *
let a = true, b = false;
console.log(a && b); // false  
// a가 true이라면, b가 결과값이 된다. 반면, a가 false이라면 결과는 a가 된다.
console.log(a || b); // true  
// a가 true이라면 결과는 a가 된다. 반면, a가 false이라면 결과는 b가 된다. 
console.log(!a);  // false


// * 연산 과정 *
console.log(30 > 20 || 20 > 10);
//       ↓
console.log(true || ture);
//       ↓
console.log(true);


// * 그외 연산자 *
let strTest1 = 3 + 2;
let strTest2 = '안녕!' + ' JavaScript야 ~';
let strTest3 = 12 + '월';

console.log(strTest1); // 피연산자 둘 다 숫자면, 산술 연산인 덧셈을 수행
console.log(strTest2); // 피연산자 둘 다 문자열이면, 문자열 연결 연산을 수행 
console.log(strTest3); // 피연산자 둘 중 하나라도 문자열이면, 문자열 연결 연산을 수행 


// * 쉼표 연산자 *
let restVal1 = 2, restVal2 = '월';
console.log(restVal1 + restVal2);

// 변수에 여러 값을 한 줄로 작성할 수 있다. 
let a = (12 + 2, 3 + 7);
console.log(a);


// * delete 연산자 *
let arr = [1, 2, 3];          // 배열 생성
delete arr[2];                // 배열의 원소 중 인덱스가 2인 요소를 삭제함.
console.log(arr); // [1, 2, ]
// 배열에 빈자리가 생긴 것이나 그 비어있는 자리에 undefined값이 설정된 것은 아님, 즉 비어있는 값이라는 뜻으로 undefined이 출력
console.log('arr[2]: ' + arr[2]);
// 배열의 요소를 삭제하는 것이지 배열의 길이까지 줄이는 것은 아님.
console.log('배열 길이: ' + arr.length);


// * typeof 연산자 *
console.log('문자열:', typeof "문자열");   // string
console.log('10:', typeof 10);       // number
console.log('NaN:', typeof NaN);       // number
console.log('false:', typeof false);      // boolean
console.log('undefined:', typeof undefined);  // undefined
console.log('new Date():', typeof new Date()); // object
console.log('null:', typeof null);       // object


// * 제곱 연산자 *
console.log('3의 3제곱은?', 3 ** 3);
