// 문자열 생성
console.log("동해물과 백두산이");
console.log("'동해물'과 '백두산'이");
console.log(" \'동해물\'과 \'백두산\'이 ");
console.log("This is String");


// 한번 생성된 문자열은 읽기(조회)만 가능
let str = 'test';
console.log(str)
console.log(str[0], str[1], str[2], str[3])

str[0] = 'T';
console.log(str);