/* 
  [비구조화 할당(구조분해)문법(ES6)]
  : 배열이나 객체의 속성을 분해하여 그 값을 개별 변수에 담을 수 있게 하는 표현식
*/

 const obj = {a : 1, b : 2};
 const {a, b} = obj;
  console.log(a); // 1
  console.log(b); // 2

  // [ 함수의 피라미터에서도 사용할 수 있다. ] 
const obj = {a: 1, b: 2};

function print({a, b}) {
  console.log(a);
  console.log(b);
}

print(obj);


// [ 피라미터의 값이 주어지지 않을 때 기본값으로 설정할 수 있다. ] 
const obj = {a: 1};

function print({a, b = 2}) {
  console.log(a);
  console.log(b);
}

print(obj); 
 

// 위 방식은 이런식으로도 가능
const obj = { a: 1};
const {a, b = 2} = obj;

 console.log(a);
 console.log(b);


 // [ 비구조화 할당시 이름 바꾸기 ]
 const animal = {
  name: '멍멍이',
  type: '개'
};

const nickname = animal.name;

console.log(nickname); // 멍멍이

/*
위 코드에서  animal.name 값을 nickname 값에 담고 있, 이름이 같다면 그냥 우리가 이전에 배웠던 대로 
비구조화 할당을 쓰면 되는데 지금은 이름이 서로 다르다. 이런 상황에서 문자를 사용해서 바꿀 수 있다. 
*/

const animal = {
  name: '멍멍이',
  type: '개'
};

const { name: nickname } = animal
console.log(nickname);
/* 위 코드는 'animal객체 안에 있는 name을 nickname이라고 선언하겠다'라는 의미 */


// [ 배열 비구조화 할당 ]
const array = [1, 2];
const [one, two] = array;

console.log(one);
console.log(two);
/* 이 문법은 배열안에 있는 원소를 다른 이름으로 새로 선언해주고 싶을 때 사용하면 유용 */

const array = [1];
const [one, two = 2] = array;

console.log(one);
console.log(two);
/* 객체 비구조화 할당과 마찬가지로, 기본값 지정이 가능 */


/*
 [ 깊은 값 비구조화 할당 ] 
  : 객체의 깊숙한 곳에 들어있는 값을 꺼내는 방법
 */

 const deepObject = {
  state: {
    information: {
      name: 'velopert',
      languages: ['korean', 'english', 'chinese']
    }
  },
  value: 5
};
/* 여기서 name, languages, value 값들을 밖으로 꺼내주고 싶다면 다음 방법을 사용한다. */

// 1번째 방법(비구조화 할당 문법을 두번 사용하기)
const deepObject = {
  state: {
    information: {
      name: 'velopert',
      languages: ['korean', 'english', 'chinese']
    }
  },
  value: 5
};

const { name, languages } = deepObject.state.information;
const { value } = deepObject;

const extracted = {
  name,
  languages,
  value
};

console.log(extracted); // {name: "velopert", languages: Array[3], value: 5}
/* 여기서 extracted 객체를 아래와 같이 바꿀 수 있다. */
const extracted = {
  name: name,
  languages: languages,
  value: value
}
/*
 만약에 key 이름으로 선언된 값이 존재하다면, 바로 매칭시켜주는 문법이다.
 이 문법은 ES6 의 object-shorthand 문법이라고 부른다. 
*/

// 2번째 방법(한번에 모두 추출하기)
const deepObject = {
  state: {
    information: {
      name: 'velopert',
      languages: ['korean', 'english', 'chinese']
    }
  },
  value: 5
};

const {
  state: {
    information: { name, languages }
  },
  value
} = deepObject;

const extracted = {
  name,
  languages,
  value
};

console.log(extracted);

// 아래와 같은 방법으로도 가능
const deepObject = {
  state: {
    information: {
      name: 'velopert',
      languages: ['korean', 'english', 'chinese']
    }
  },
  value: 5
};

const {
  name,
  languages: [first, second]
} = deepObject.state.information;
const {value} = deepObject;

const extracted = {
  name,
  first,
  second,
  value
};

console.log(extracted);


// 첫번째 방법이 더 깔끔하지만 선택은 자유!
