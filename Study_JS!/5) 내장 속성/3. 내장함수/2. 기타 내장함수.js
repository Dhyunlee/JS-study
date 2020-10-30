window.onload = function () {

/*
  1. 인코딩과 디코딩함수 
*/
  // 인코딩: Encoding
  let a = escape("초콜릿");

  // 디코딩: Decoding
  let b = unescape(a);

  console.log(a);
  console.log(b);


/*
  2. 숫자 확인 함수 
    - isFinite(): number가 무한한 값인지 확인
    - isNaN(): number가 NaN인지 확인 
  
   * 다른 타 프로그래밍 언어에서는 0으로 숫자를 나누면 오류를 발생하면서 
     프로그램이 작동을 멈추는데 자바스크립트는 0으로 숫자를 나누면 'infinity'
     라는 값이 들어간다. 
*/

  //isFinite()함수
  let number = 10 / 0;
  console.log(isFinite(number)); 


  //isNAN()함수
  isNaN()    // True / false 
  let output = Number("adfwgwsgsdgsdgsgsg")
  console.log(isNaN(output));  // true
  console.log(isNaN(10));      // false


/*
  4. 숫자 변환 함수 <잘 사용은 안하지만 기본형태만 보자!>
    - parseInt(string): string을 정수로 변환
    - parseFloat(string): string을 유리수(실수)로 변환
     -> 이러한 함수들은 Number() 함수의 단점을 보완하기 위해 만들어졌다.
*/
  console.log(parseInt("200"))  
  // Integer: 정수 -52, 0, 273등 -> 소수점이하는 버리고 정수만 출력
  console.log(parseFloat("52.273"))  
  // float: 부동소수점 52.273 -> 소수점이하 출력


/*
  5. 코드 실행 함수 <잘 사용은 안하지만 기본형태만 보자!>
    - eval(string)
     -> 문자열을 코드로 실행할 수 있는 특별한 함수를 제공합니다. 

    (사용하는 이유?)
    보안상 취약하므로 잘 사용하지는 않으나, 프레임워크구현이나 높은 수준에서
    자바스크립트를 사용하는 상황에서는 필요!

*/

 let evalExam = ''; // 문자열을 생성합니다. 
 evalExam += 'let date = "20";';
 evalExam += 'console.log("date 값은:" + date + " 타입은:" + typeof(date));';

 eval(evalExam);  
 // 문자열을 코드처럼 인식하여 실행!            
 console.log(evalExam); 
 // 문자열을 그대로 연산하여 출력!
 console.log(date + typeof (date)); 
 // eval()함수로 호출한 코드의 변수(date)를 사용할 수 있다.

}
