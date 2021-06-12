// typeof
let abc;
console.log(typeof ('String')); // 결과: 문자열 자료형
console.log(typeof (123)); // 결과: 숫자 자료형
console.log(typeof (true)); // 결과: 불(논리) 자료형
console.log(typeof (function () { })); // 결과: 함수 자료형
console.log(typeof (abc)); // 결과: Undefinede(정의 되지 않는) 자료형

// constructor.name
console.log(('String').constructor.name); // 결과: 문자열 자료형
console.log((123).constructor.name); // 결과: 숫자 자료형
console.log((true).constructor.name); // 결과: 불(논리) 자료형
console.log((function () { }).constructor.name); // 결과: 함수 자료형
