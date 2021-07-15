/*
참조: https://im-developer.tistory.com/103
 [배열 자르기 
   - splice()메서드와 slice()메서드]
 
*/

/* 
   [splice] 
    :  splice: 배열에서 특정 항목을 제거하거나 추가할 때 사용하며 기존의 값이 변경된다. 

    (형태): arr.splice(start, delete_count, add_item)

    start: 배열의 변경을 시작할 인덱스.
     - 음수를 지정한 경우: 배열의 끝에서부터 요소를 센다. 그 값만큼 제거
     - 절대값(음수의 절대값)이 배열의 길이보다 큰 경우: 0으로 세팅
     - 배열의 길이보다 큰 수를 지정한 경우:  어떤 요소도 제거되지 않는다.
     
    delete_Count: 배열에서 제거할 요소의 수.
     - 생략한 경우: 0부터 지정한 start 인덱스까지 제거(즉 인자 하나만 있을 경우)
     - 0 이하의 수를 지정: 어떤 요소도 제거되지 않는다.
 
    newItem : 배열에 추가할 요소.
     - 지정하지 않는 경우: splice()는 요소 제거만 수행
 
    반환값: 제거한 요소를 담은 배열.


*/
const number1 = [10, 20, 30, 40 , 50 , 60]; 

const spliced1 = number1.splice(2, 1); //30 제거
console.log(spliced1); //30
console.log(number1); // 10, 20, 40 ,50 ,60

const spliced2 = number1.splice(1, 2, 5) //20, 40제거한 후, 그 자리에 5 추가
console.log(spliced2) // 20 ,40
console.log(number1); // 10 ,5 ,50 ,60

const spliced3 = number1.splice(-1) //맨 마지막 인덱스(60) 제거
console.log(spliced3) // 60
console.log(number1); 10, 5, 50  // => number1의 값을 보면 기존의 값이 변경되었음을 알 수 있다.



/* 
   [slice]
    : 배열을 잘라낼 때 사용하는데, 중요한 점은 기존의 배열은 건들지 않는다.
     (형태): arr.slice(start, end_Previous)
     start: 추출 시작점에 대한 인덱스를 의미
      - undefined인 경우: 0부터 slice(즉 인자 하나만 있을 경우)
      - 음수를 지정한 경우: 배열의 끝에서부터의 길이를 나타낸다. slice(-2)를 하면 
       배열의 마지막 2개의 요소를 추출한다.
      - 배열의 인덱스보다 큰 수를 지정한 경우: 빈 배열을 반환한다.

     end_Previous: 추출을 종료할 기준 인덱스. (end를 제외하고 그 전까지의 요소만 추출한다.)
      - 지정하지 않을 경우: 배열의 끝까지 slice
      - 음수를 지정한 경우: 배열의 끝에서부터의 길이를 나타낸다. slice(2, -1)를 하면 
       세번째부터 끝에서 두번째 요소까지 추출
      - 배열의 길이와 같거나 큰 수를 지정한 경우: 배열의 끝까지 추출.
 
     반환값: 추출한 요소를 포함한 새로운 배열
*/   
const number2 = [10, 20, 30, 40]; 

const sliced1 = number2.slice(2); // 인덱스번호 2부터 끝까지 
console.log(sliced1); //[30, 40]
console.log(number2); // [10, 20, 30, 40]

const sliced2 = number2.slice(1, 3) // 인덱스 1부터 3 이전까지 
console.log(sliced2); //[20, 30] 
console.log(number2); // // [10, 20, 30, 40]

const sliced3 = number2.slice(-3); 
console.log(sliced3); //[20, 30, 40]
console.log(number2); //[10, 20, 30, 40]  => 배열을 잘라도 기존의 배열은 그대로다. 