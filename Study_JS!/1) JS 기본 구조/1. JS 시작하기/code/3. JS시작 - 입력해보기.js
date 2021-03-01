/* [사용자로부터 입력받는 프로그램 만들기!] */
window.onload = function () {
  //  1. prompt()함수 예제
  let input1 = prompt('당신의 이름은 무엇입니까? ');
  alert(input1); // 입력한 값 출력!

  let num = prompt('숫자를 입력하세요 ', '숫자');
  alert(num);
  /*
      숫자를 입력받으면 입력받은 숫자는 우선 문자열 자료형으로
      인식한다. 이렇게 받은 데이터를 숫자로 사용하려면 Number()
      를 사용하여 강제로 숫자 자료형을 변환해야 한다. 
  */
  let num2 = Number(prompt('숫자를 입력하세요 ', '숫자'));
  console.log(num2 * 10);

  //  2. confirm()함수 예제
  let input2 = confirm('가입하시겠습니까?');
  if (input2) {
    alert('가입되었습니다.');
  } else {
    alert('가입을 취소하였습니다.');
  }
};
