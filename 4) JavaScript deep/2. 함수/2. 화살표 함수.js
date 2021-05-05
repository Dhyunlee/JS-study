/*
 [화살표 함수(ES6 문법)]
  : 함수를 선언하는 또 다른 방법, function 키워드 대신에 => 문자를 사용해서 함수를 구현하며, 
    화살표의 좌측에는 함수의 파라미터, 화살표의 우측에는 코드 블록이 들어온다.
*/        

 const add = (a, b) => {
   return a + b;
 };
/*  const add = (a, b) =>  a + b; // 이렇게 간단히 할 수 있다. */

 const sum = add(1, 2);
 console.log(sum);

//-----------------------------------------

 const hello = (name) => {
   console.log(`hello ${name}!`)
 };
 hello('이동현');
