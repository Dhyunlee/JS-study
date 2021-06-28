window.onload = function () {
  /* 1. if조건문 */
  
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


  /* 2. if else 조건문 */
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


  /* 3. if else if 조건문 */

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
}
