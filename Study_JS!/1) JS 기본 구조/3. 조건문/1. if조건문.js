window.onload = function () {

  /*
  <조건문>
    - 'if'조건문      
    - 'else'절
    - 'if else' 문 
    - for조건문

  [제어문]
   : 주어진 조건에 따라 해당 실행문을 실행(조건문)하거나 반복 실행(반복문)을 할 때 사용한다.
     일반적으로 소스코드는 위에서 아래로 순서대로 실행된다. 그러나 제어문은 실행 순서를
     주어진 조건에 따라 제어가 가능하다.

  [조건문]
   : 프로그램 내에서 주어진 조건식의 결과에 따라 해당 실행문의 실행을 결정하는 제어문이다.
     조건문 중에서 가장 기본이 되는 실행문은 if 문이다. 
  
  1. if 조건문 
     : 조건식의 결과가 참(true)이면 주어진 실행문을 실행하며, 거짓(false)이면 
       아무것도 실행되지 않는다.  
    
     [형태]   
      if(조건식=불표현식) {
       조건식이 참이면 실행할 문장
      }
    -> if조건문은 반대상황을 가정할 때 else키워드와 함께 쓰임  
    -> 블록 내의 문이 한 줄이면 중괄호({})를 생략할 수 있음    


   2. else 절
      : if문의 조건식이 거짓(false)일 때 실행된다.
  
      [형태] 
      if(조건식=불표현식) {
       조건식이 참이면 실행할 문장
      } else {
       조건식이 거짓이면 실행할 문장 
      }


   3. if else if 문 
       : 1개 이상의 조건식일 때는 if문을 여러번 사용하는 것보다 if else if 문을 사용하는 게 좋다.

       [형태] 
       if(조건식1) {
          조건식1이 참이면 실행할 문장
       } else if(조건식2) {
           조건식2가 참이면 실행할 문장
       } else {
           위 조건식1,2가 거짓일때 실행할 문장 
          }
     -> else if를 계속 추가해서 조건식을 만들 수 있다. 
      
  */

  
  // 1. if조건문
  
   // 예제1) 현재 시간을 구하여 점심인지 저녁인지 구하기

  let date = new Date();
  let hours = date.getHours(); //현재 몇시인지
  console.log('현재 시간은' + hours + ' 입니다.');

  //현재 시간이 12시 이전일 경우
  if (hours < 12) {
    console.log('오전입니다.!!');
  }
  if (hours >= 12) {
    console.log('오후입니다.');
  }
  
  /* 
     위와 같이 조건식을 여러번 사용할 수 있지만 이러한 방식을 권장하지 않고, 
     if else if 문을 사용한다.
  */


  // 2. if else 조건문
  if (hours < 12) {
    console.log('오전입니다.!!');
  } else { //hours가 12시 이후일 때 실행
    console.log('오후입니다.');
  }

  // 예제2) 입력한 숫자가 양수인지 음수인지 판단하기 (if else 조건문 )
  
  let input = prompt("숫자를 입력해 주세요");
  if (input > 0) {
    console.log("양수입니다.")
  } else {
    console.log("음수입니다. ")
  }


  // 3. if else if 조건문

  //예제 1번을 if else if 조건문으로!
  let dates = new Date();
  let hour = dates.getHours;

  if (hour < 11) {
    console.log("아침 식사 시간입니다.")
  } else if (hour < 15) {
    console.log("점심 식사 시간입니다.")
  } else {
    console.log("아침 식사 시간입니다.")
  }


  // 예제3) 성적프로그램 

  let score = prompt("점수를 입력해주세요")

  if (score >= 90) {
    console.log("당신의 학점은 A학점 입니다.")
  } else if (score >= 80) {
    console.log("당신의 학점은 B학점 입니다.")
  } else if (score >= 75) {
    console.log("당신의 학점은 C학점 입니다.")
  } else if (score >= 65) {
    console.log("당신의 학점은 D학점 입니다.")
  } else {
    console.log("당신의 학점은 F학점 입니다.")
  }


  // 예제4) 입력한 숫자가 양수인지 음수인지 판단하기

  let input = prompt("숫자를 입력해 주세요", '');
  if (input === 0) {
    console.log("입력한 " + input + "는 0입니다.");
  } else if (input > 0) {
    console.log("입력한 " + input + "는 양수입니다.")
  } else {
    console.log("입력한 " + input + "는 음수입니다.")
  }


  // 예제5) 사용자에게 양수를 입력받아 짝수, 홀수 구분하기

  let num = prompt("양수를 입력해주세요! ");
  if (num % 2 === 0) {
    console.log("짝수입니다.");
  } else if (num % 3 === 0) {
    console.log("홀수 입니다.");
  }





  /*
  // [ 시간관련 함수 => Date()함수 ! ]
  ==============================================================================================================
    let date = new Date();       // 현재 연도/월/ 일/ 요일 구하는 Date()함수
    let hours = date.getHours()  // 현재 시간 정보
    let today = date.getDate()   // 햔재 일자정보
    let year = date.getFullYear(); // 현재 년도정보
    let month = date.getMonth(); // 현재 월정보 그외에도 더 있음 
  ---------------------------------------------------------------------------------------------------------------      
    console.log('현재 date은 ' + date + '입니다.')
    console.log('현재 시간은' + hours + '시 입니다.')
    console.log('오늘은' + today + '일 입니다.')
    console.log(' 지금은 ' + year + ' 입니다.')
    console.log('지금은' + month + '월 입니다.')
  ===============================================================================================================
  */

}
