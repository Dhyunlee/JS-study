/*
  참조: https://lktprogrammer.tistory.com/124
   표준내장객체에 기본적으로 제공하는 내장 속성(= 함수, 메서드)에 대해 정리!
    -> 여기 있는 것을 다 외우지 말고 어떻게 사용하는 지 익히기
    -> 자주 사용하는 내장 속성들은 계속하다보면 익혀진다. 

*/



/* 
   1. 문자열 속성 - length 속성
       : 문자열(배열에서도 쓰임)의 전체 길이에 대한 속성값을 출력
*/
let strLength = 'Hello';
console.log(strLength.length);


/*
   2. 문자열 속성 - charAt() 메서드
       : 문자열에서 인자로 넘긴 index에 해당하는 문자형 데이터를 출력
*/
let strCharat = 'world';
let result_charAt = strCharat.charAt(1); //o
console.log(result_charAt)


/*
   3. 문자열 속성 - indexOf() 메서드, lastInderOf() 메서드
      (1) indexOf()
           : 문자열의 왼쪽부터 시작하여 찾을 문자와 일치하는 최초의 문자의 Index를 반환
             두 번째 인자를 지정 하여 검색하는 시작 Index도 지정

      (2) lastIndexOf() 메서드
          : indexOf()함수 비슷하지만, 차임점은 찾을 문자를 문자열 오른쪽에서부터 찾는다. 두 함수 모두 일치하는 문자를 찾지 못하면 -1을 반환
*/
let indexVal = "Hello World! LKT PROGRAMMER World";
let result_indexOf = indexVal.indexOf("World");
let result_lastindexOf = indexVal.lastIndexOf("World");

console.log(result_indexOf);     // 6
console.log(result_lastindexOf); // 28


/*
   4. 문자열 속성 - replace() 메서드
       : 문자열의 왼쪽에서부터 찾을 문자를 찾아 최초에 일치하는 문자에 대하여 
         두 번째 인자로 넘길 변경할 문자로 대체
*/
let replaceVal = "Java is programming language"
let result_replace = replaceVal.replace("Java", "JavaScript");
console.log(result_replace); // "JavaScript is programming language"


/*
   5. 문자열 속성 - substring() 메서드 / substr() 메서드
       (1) substring()
            : 첫 번째 인자로 전달된 startIndex부터 시작하여 두 번째 인자로 전달된 
              endIndex앞까지의 문자열을 반환

       (2) substr()
            : 첫 번째 인자로 넘겨준 startIndex부터 시작하여 두 번째 인자로 넘겨준 
              문자개수만큼 문자열을 잘라 반환
*/
let sample1 = "Hello World"
let result_substring = sample1.substring(0, 5); //0번째 인덱스부터 5번째 앞인 4번째 인덱스까지의 문자열 반환
let result_substr = sample1.substr(6,3); // 6번째 인덱스을 포함한 문자 3개 반환

console.log(result_substring); // "Hello"
console.log(result_substr); // "Wor"



/*
   6. 문자열 속성 - split() 메서드
       : 첫 번째 인자로 넘긴 문자를 기준으로 하여 문자열을 잘라 각 배열 요소에 
         담은 뒤에 해당 배열 객체를 반환해주는 함수입니다. 

       sample2 문자열 "Hello/World"에서 sample2.split("/")을 통하여 구분자 "/"을 
       기준으로 문자열을 나누어 result 배열 객체에 각 요소에 담습니다. 
*/
let sample2 = "java/script"
let result = sample2.split("/");

console.log(result[0]); //java
console.log(result[1]); //script


/*
   7. 문자열 함수 - toLowerCase() 메서드 / toUpperCase() 메서드
      (1) toLowerCase()
           : 문자열 안에 대문자를 모두 소문자로 변환하는 함수입니다.
      
      (2) toUpperCase()
           : 문자열 안에 소문자를 모두 대문자로 변환하는 함수입니다.
*/
let sample3 = "HELLO"
let sample4 = "world";

console.log(sample3.toLowerCase()); // "hello"
console.log(sample4.toUpperCase()); // "WORLD"



/*
   8. 문자열 함수 - concat() 메서드
       : 인자로 넘기는 문자열을 기존 문자열 뒤에 합치는 함수입니다.
       
       인자 정보는 문자열 데이터 자체를 넘겨도 되고 문자열 객체를 넘겨줘도 됩니다. 위 샘플예제는 문자열 객체를 넘기는 방식으로 사용하였습니다. 
*/
let str1 = "Hello"
let str2 = "World";

console.log(str1.concat(str2)); // "HelloWorld"