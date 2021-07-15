/* 
  [조건문 더 스마트하게 사용하기] 
   : 특정값이 여러 값중 하나인지 확인해야 할때 사용
*/

function isAnimal(text) {
  return (
    text === '고양이' || text === '개' || text === '거북이' || text === '너구리'
  );
}

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false
// 위 코드를 보면 비교해야할 값이 많을수록 코드가 길어 복잡해보인다.
// 이러한 코드를 간단하게 해결할 수 있는 방법은
// 배열의 includes함수를 사용하는 것이다. 

function isAnimal(name) {
  const animals = ['고양이', '개', '거북이', '너구리'];
  return animals.includes(name);
}

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false

// 원한다면, animals배열을 선언하는 것도 생략하고, 화살표함수로 작성할 수 있다. 
const isAnimal = name => ['고양이', '개', '거북이', '너구리'].includes(name);

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false

/* 
코드가 짧다고 무조건 좋은 코드는 아니다. 단, 코드를 읽을 때 짧으면서 
읽었을 때 어떤 역할을 하는 지 잘 이해가 되어야 비로소 좋은 코드이다. 
*/


/* 값에 따라 다른 결과물을 반환 해야 할 때 */
function getSound(animal) {
  if (animal === '개') return '멍멍!';
  if (animal === '고양이') return '야옹~';
  if (animal === '참새') return '짹짹';
  if (animal === '비둘기') return '구구 구 구';
  return '...?';
}

console.log(getSound('개')); // 멍멍!
console.log(getSound('비둘기')); // 구구 구 구

// 위 코드를 좀더 간결하게 작성할 수 있다. 
function getSound(animal) {
  const sounds = {
    개: '멍멍!',
    고양이: '야옹~',
    참새: '짹짹',
    비둘기: '구구 구 구'
  };
  return sounds[animal] || '...?';
}

console.log(getSound('개')); // 멍멍!
console.log(getSound('비둘기')); // 구구 구 구
/*
 위 코드와 같이 특정 값에 따라 반환해야 하는 값이 다른 조건이 여러가지
 있을 때는 객체를 활용하는 것이 좋다. 
 반면, 값에 따라 실행해야 하는 코드 구문이 다를 경우는 객체에 
 함수를 넣으면 된다. 
*/

function makeSound(animal) {
  const tasks = {
    개() {
      console.log('멍멍');
    },
    고양이() {
      console.log('고양이');
    },
    비둘기() {
      console.log('구구 구 구');
    }
  };
  if (!tasks[animal]) {
    console.log('...?');
    return;
  }
  tasks[animal]();
}

makeSound('개');
makeSound('비둘기');
