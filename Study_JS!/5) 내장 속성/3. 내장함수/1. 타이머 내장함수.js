window.onload = function () {

    /*
     내장 함수 
      : 기본으로 내장된 함수 
       - 타이머 함수
       - 인코딩/디코딩 함수
       - 숫자 확인 함수 
       - 숫자 변환 함수 
       - 코드 실행 함수
     */

    /* 
       타이머 함수
        - setTimeout(function, millisecond) 
          : 일정 시간 후 함수 한번 실행 
        - setInterval(function, millisecond)
          : 일정 시간마다 함수를 반복해서 실행
        - clearTimeout(id)
          : 일정 시간 후 함수를 한번 실행하는 것을 중지
        - clearInterval(id)
          : 일정 시간마다 함수를 반복하는 것을 중단 
      
    */

   console.log("시작되었습니다. ")
   
//  1. setTimeout()함수
    // 특정 시간 후에 함수를 1번만 실행하는 함수 
    let id = setTimeout(function () {
        console.log("1초가 지났습니다.");
    }, 1000)

    /* 
       -> setTimeout()함수를 한번만 실행하므로 주의할 사항이 없지만, 
          setInterval()함수는 반복해서 실행하므로 컴퓨터의 자원을 계속 
          소비하게 된다. 그러므로 타이머를 멈추는 함수인 clearInterval(id)을 
          사용한다. 물론 clearTimeout()함수도 있다. 
    */

//  2. setInterval()함수
    //1초마다 함수를 실행한다. 
    let id = setInterval(function () {
        console.log(new Date())
    }, 1000);

    //10초 후 함수를 실행한다. 
    setTimeout(function () {
        console.log('종료합니다.') // setInterval()함수를 중단한다 
        clearInterval(id);
    }, 10000);
}
