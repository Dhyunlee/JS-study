window.onload = function () {

  /*
     for 반복문
      : while문과는 달리 초기화, 조건식, 증감식을 모두 한 줄에 
        사용할 수 있다. 따라서 간결하게 반복문을 나타낼 수 있다. 
         - 반복 횟수가 명확할 때 사용
  */

  // 예제1)
  for (let i = 0; i < 5; i++) {
    console.log(i + "번째 입니다.")
    //0번째 반복: i = 0;
    //1번째 반복: i = 1;
    //2번째 반복: i = 2
    //3번째 반복: i = 3
    //4번째 반복: i = 4;
    //5번째 반복: i = 5  =>조건식이 거짓(i=5)이므로 for문을 빠져나옴  
  }

  // 예제2)
  let array = ["과자", "사탕", "젤리"];
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
  /*
      array.length => 배열 길이 전까지를 의미! 여기선 길이가 '3'이므로 2번째 인덱스인 젤리까지 반복함.
                 (0부터 시작해서 length 전까지 반복하는 이유는 인덱스 번호가 0부터 시작하기 때문!!)
  */


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

  /*
      do while 반복문
        : 일단 한번 실행을 한 후 조건식을 검사한 후에 참이면 명령문을 실행하고,
          거짓이면 반복문을 빠져나온다. 
          - while, for 반복문과 달리 do while 반복문은 조건식과 상관없이 일단 한번은 
            실행된다.
  
    (형태)
      do {
      조건식의 결과가 참인 동안 반복적으로 실행하고자 하는 실행문;
      } while (조건식);
  
  */

  // 예제

  let condition = false

  do {
    console.log('조건식과 상관없이 일단 실행!!')
  } while(condition)


/*
  반복문에는 사실 do while문이 있지만 거의 사용하지는 않는다.
  그리고 반복문의 종류가 2가지정도 소개했지만 2가지 중에
  편하는 것을 골라 사용하면 된다. 
*/

}
