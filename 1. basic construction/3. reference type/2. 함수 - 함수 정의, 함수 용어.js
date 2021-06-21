// # 함수

// 1) 함수 선언식
function myFunc(num1, num2) {
  return num1 + num2
}

// 2) 함수 표현식
let func = function (num1, num2) {
  return num1 + num2
}

//  - 함수호출
func();
myFunc();

// 함수 선언식
function testA() {
  console.log("testA 위치입니다.");
}

// 함수 표현식
let testB = function () {
  console.log("testB 위치입니다.");
}

// 함수 호출(= 함수 실행)  
testA()
testB()


// 매개 변수와 전달인자
function f2(i) {
  // 전달인자(3)를 받을 매개변수로 i를 입력
  return i * i;
}

let output1 = f2(3);
// 전달인자로 3을 입력
console.log(output1);


// 리턴값
function f1(x) {
  return x * x;
  // x에 전달된 값(=전달 인자)이 x * x의 연산이 된 이후, 
  // 그 결과값이 함수를 호출한 영역으로 반환됨
}

let output2 = f1(5);
// f1(5): 함수 호출, 이 영역으로 리턴값이 반환
console.log(output2);
// f1()함수를 호출하면, 리턴된 값(= 리턴값)이 output2 변수에 저장

//---------------------------------------------

// 매개 변수보다 호출할 전달 인자가 많을 경우!
function f3(x, y, z) {
  console.log(x);
  console.log(y);
  console.log(z);
}

f3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
// 추가된 전달 인자는 무시하고 출력되지 않는다.


/* 함수를 이용하여 점수를 출력해주는 프로그램 만들어 보기! */

function getGrade(score) {
  if (score === 100) {
    return "A+";
  } else if (score >= 90) {
    return "A";
  } else if (score >= 89) {
    return "B+";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 79) {
    return "C+";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 69) {
    return "D+";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

const grade = getGrade(70);
console.log(grade);
