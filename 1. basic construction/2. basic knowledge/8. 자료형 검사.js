window.onload = function () {
    /*
    [자료형 검사]
     숫자, 문자열, 불, 객체 같은 자료형을 확인 할때 자료형을 검사할 수 있다. 

     1. 느슨한 검사 -> 'typeof'
       :'typeof'는  함수와 비슷하지만 키워드이자 연산자
        
    */

    let abc;
    console.log(typeof ('String')); // 결과: 문자열 자료형
    console.log(typeof (123)); // 결과: 숫자 자료형
    console.log(typeof (true)); // 결과: 불(논리) 자료형
    console.log(typeof (function () { })); // 결과: 함수 자료형
    console.log(typeof (abc)); // 결과: Undefinede(정의 되지 않는) 자료형



   /*
     2. 엄격한 검사 -> constructor.name
         : 값에 해당하는 자료형을 좀 더 자세히 알려준다.          
   */ 

    console.log(('String').constructor.name); // 결과: 문자열 자료형
    console.log((123).constructor.name); // 결과: 숫자 자료형
    console.log((true).constructor.name); // 결과: 불(논리) 자료형
    console.log((function () { }).constructor.name); // 결과: 함수 자료형
}
