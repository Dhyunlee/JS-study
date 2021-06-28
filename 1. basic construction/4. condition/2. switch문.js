// switch문

// switch 문을 이용한 짝수, 홀수 구분하기
let rawInput = prompt('숫자를 입력해주세요', '숫자');

if (rawInput == ' ') {
    console.log('입력하세요!');
}

switch (rawInput % 2) {
  case 0:
    console.log('짝수 입니다.')
    break;
  case 1:
    console.log('홀수 입니다.')
    break;
  default:
    console.log('숫자가 아닙니다.')
    break;
}


// 입력한 숫자에 해당하는 계절 출력하기

let input = prompt('숫자를 입력해주세요', '1 ~ 12');
let month = Number(input);

switch (month) {
  case 3:
  case 4:
  case 5:
    console.log('봄 입니다.')
    break;
  case 6:
  case 7:
  case 8:
    console.log('여름 입니다.')
    break;
  case 9:
  case 10:
  case 11:
    console.log('가을 입니다.')
    break;
  case 12:
  case 1:
  case 2:
    console.log('겨울 입니다.')
    break;
}
