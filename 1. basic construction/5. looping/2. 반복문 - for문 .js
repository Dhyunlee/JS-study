/* for 반복문 */

// 예제1)
for (let i = 0; i < 5; i++) {
  console.log(i + "번째 입니다.")
}

// 예제2)
let array = ["과자", "사탕", "젤리"];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

// 예제3) 역 for반복문  
let arrays = ["과자", "사탕", "젤리"];
for (let i = arrays.length - 1; i >= 0; i--) {
  console.log(array[i]);
}


{ // 예제4) 1 ~ 10까지 합 구하기 (while문으로도 작성해보기!)

  let sum = 0;
  for (let i = 0; i <= 10; i++) {
    sum += i;
  }
  console.log(su0m);
}


/* do while 반복문 */

// 예제
let condition = false

do {
  console.log('조건식과 상관없이 일단 실행!!')
} while (condition)