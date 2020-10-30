window.onload = function () {

  /*
     삼항 연산자
      : 항이 3개인 연산자이며, 이것으로 조건문을 나타낼 수 있다.
     형태) (조건식) ? (참일때 실행) : (거짓일때 실행)        
   */

  let input = prompt('숫자를 입력해주세요', '');
  let number = Number(input);

  (number > 0) ? console.log('자연수입니다. ') : console.log('자연수가 아닙니다.');

  /*
    짧은 조건문 
     :짧은 조건문은 논리 연산자의 특징을 조건문으로 사용

    <불 표현식> || < 불 표현식이 거짓일 때 사용하는 문장>
    <불 표현식> && < 불 표현식이 참일때 사용하는 문장>          
  */

  let input = prompt('숫자를 입력해주세요', '');
  let num = Number(input);

  (num > 0) || console.log('자연수가 아닙니다.');
  (num > 0) && console.log('자연수입니다.');

  /* 
     내장함수인 indexOf()함수 사용하기
      : indexOf()함수는 앞에 있는 문자열에 뒤에 있는 문자열이 포함되어 있을 경우 위치를 
      출력해주는 메서드 
      
  */

  let input = prompt("입력해주세요", "안녕하세요 or 잘자를 입력하기");

  if (input.indexOf("안녕") >= 0) {
    console.log("안녕하세요");
  } else if (input.indexOf("잘자") >= 0 || input.indexOf("잘 자") >= 0) {
    console.log("안녕히 주무세요");
  } else {
    console.log("인사를 안하다니");
  }

}
