/* 삼항연산자와 단축평가 */

// 1. 삼항연산자

// 예제1
let input = prompt('숫자를 입력해주세요', '');
let number = Number(input);

number > 0
  ? console.log('자연수입니다. ')
  : console.log('자연수가 아닙니다.');

// 예제2
const a = 5;
const b = 3;

let result = a + b === 8 ? '맞습니다.' : '틀립니다.';
console.log(result);

// 예제3
const array = [];
let text =
  array.length === 0
    ? '배열이 비어있습니다'
    : '배열이 비어있지 않습니다.';

console.log(text);


  
// 2. 단축 평가

//AND 연산자
console.log('hello' && 'bye'); //bye
console.log('' && 'bye'); //''
console.log('hello' && ''); //''

//OR 연산자
console.log('hello' || 'bye'); //hello
console.log('' || 'bye'); //bye
console.log('hello' || '0'); //hello

//변수의 기본값 설정
let userName = '';
userName = userName || 'Mike';
console.log(userName);


/* 단축 평가 사용예 */

// - 변수의 값의 유무를 확인할 때
let userName = '';
let userEmail = '';
let userPw = '';
const result = userName || userEmail || userPw || '값을 입력하세요';

console.log(result); //'값을 입력하세요'


// - 키(key)와 값(value)으로 이루어진 객체 값의 유무를 확인할 때
let animal = null;
console.log(animal || animal.type); //TypeError
console.log(animal && animal.type);


//응용
const userCard = {
  cardId: 'ST2SFF4G3',
  cardCreateDay: '2021-03',
};

function getUsercardInfo(card) {
  let dogName = card && card.cardId;
  if (dogName) {
    console.log('포인트카드가 존재합니다.');
    console.log(userCard);
  } else {
    console.log('포인트카드가 존재하지않습니다.');
  }
}
// getName()
getUsercardInfo(userCard);


// - 함수 인자의 유무를 확인할 때
const coffee = {
  name: '아메리카노',
};

function getName(memu) {
  return memu && memu.name;
}

const result = getName();
console.log(result);
