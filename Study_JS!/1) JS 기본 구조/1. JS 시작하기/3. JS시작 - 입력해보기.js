window.onload = function () {
/*
     [사용자로부터 입력받는 키워드 : prompt/ confirm ]
      : 자바스크립트 코드를 작성해서 결과를 출력해보았다면 
        이번에는 문장을 입력받는 법을 살펴보자!

       [문장을 입력 받는 방법]
      
        1. 문자열 입력 받기 : prompt
        -> promt('메세지창', '표시')
    
        2. boolean 입력 받기 : confirm()함수
        -> 사용자가 [확인]을 누르면 true를, [취소]를 누르면 
           false를 리턴(반환, 결과값 출력)한다.!
*/

//  [사용자로부터 입력받는 프로그램 만들기!]

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
    console.log(num2 * 10)


//  2. confirm()함수 예제
    let input2 = confirm('가입하시겠습니까?');
    if(input2) {
        alert('가입되었습니다.')
    }else {
        alert('가입을 취소하였습니다.')
    }
}
