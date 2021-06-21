/* 1. 다른 자료형을 '숫자'로 강제 변환 */

// 숫자처럼 생긴 문자열 변환
console.log(Number('273'));
console.log(Number('103.23'))


// 숫자처럼 생기지 않는 문자열 변환
console.log(Number('안녕하세요'));
console.log(Number('안녕하세요12'));



// 불리언 변환 
console.log(Number(true)); // 1 출력
console.log(Number(false)); // 0 출력




/* 2. 다른 자료형을 '문자열'로 강제 변환 => String()함수 ! */

// - 숫자를 문자열로 변환 
console.log(String(273));
console.log(String(103.23));


// - 불을 문자열로 변환 
console.log(String(true))
console.log(String(false))


/* 3) 다른 자료형을 '불형'으로 강제 변환 => Boolean()함수 ! */
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
//위 다섯가지 모두 false로 출력된다.


// 주의!!
console.log(Boolean('0')); //true
console.log(Boolean('false')); //true



/* 자동 변환!! */

console.log('52 + 12'); // 1번
console.log(52 + 12); // 2번
console.log('52' + 12); // 3번
console.log(52 + '12'); // 4번
console.log('52' + '12'); // 5번

console.log('100' - 10) // 90
console.log('100' * 10) // 1000
console.log('100' / 10) // 10


/*  
    덧셈 단항연산자
     : 피연산자가 숫자가 아닌 다른 자료형일 때 '숫자'로 변환됨
      - 단항 덧셈 연산자(+)는 짧은 문법으로도 Number()와 동일한 
        일을 할 수 있게 해줍니다.
*/
let stringNum = '2';
let numChange1 = (+stringNum);
console.log(numChange1)

let booleanNum = true;
let numChange2 = (+booleanNum)
console.log(numChange2)

// 자료형 검사
console.log(typeof stringNum) //string
console.log(typeof numChange1) //number

console.log(typeof booleanNum) //boolean
console.log(typeof numChange2) //number

