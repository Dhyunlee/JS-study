/*
 [함수의 기본 피라미터(= 기본 매개변수)]
  : 기본 피라미터(default function parameter)를 사용하면 값이 없거나
    undefined가 전달 될 경우 매개변수를 기본값으로 초기화할 수 있다.
 
 구성: function name(param1, param2..){statements};



*/
// 원의 넓이를 구하는 함수를 만들어보자!
function calculateCircleArea(r) {
  return Math.PI * r * r;
}

const area = calculateCircleArea(4);
console.log(area); // 50.26548245743669

// 여기서 Math.PI는 원주율 파이값을 가리킴
// 만약 이 함수 r값을 넣어주지 않으면 어떤 결과가 나올까?

function calculateCircleArea(r) {
  return Math.PI * r * r;
}

const area = calculateCircleArea();
console.log(area); // NaN

/*
 결과는 NaN(Not a Nunber)이 나온다. 이런 값이 나오는 이유는
 undefined * undefined이렇게 숫자가 아닌 값에 곲셈을 하니까 
 이상한 결과물이 나온다. 

 이 함수에서 만약에 r값이 주어지지 않았다면 기본값을 1을 
 사용하도록 설정해보자!
*/

function calculateCircleArea(r) {
  const radius = r || 1;
  return Math.PI * radius * radius;
}

const area = calculateCircleArea();
console.log(area); // 3.141592653589793

// 위 코드는 Es5버전이며, Es6버전은 다음과 같이 할 수 있다. 
function calculateCircleArea(r = 1) {
  return Math.PI * r * r;
}

const area = calculateCircleArea();
console.log(area); // 3.141592653589793

// 참고로 함수의 기본 파라미터 문법은 화살표 함수에서도 사용가능
const calculateCircleArea = (r = 1) => Math.PI * r * r;

const area = calculateCircleArea();
console.log(area); // 3.141592653589793
