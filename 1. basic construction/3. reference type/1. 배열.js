// 배열 선언
let arr = [10, 20, 30, 40, 50, 60];

// 배열 참조(= 요소 접근)
console.log(arr[1]); // 1번째에 인덱스에 있는 20을 출력

// 배열의 요소 수정
console.log(arr[1] = 30); // 기존의 값(20)이 30으로 변경!
console.log(arr);

// 배열의 요소 추가
console.log(arr[6] = 40) // 6번째 인덱스에 40을 추가
console.log(arr)

// 배열의 요소 제거
console.log(delete arr[3]) // 3번째 인덱스 40을 제거
console.log(arr) // 요소가 제거는 됬지만 길이는 변하지 않음 
//  -> 그 자리를 empty(비어있는 요소)로 채움


//배열의 길이
let arr2 = ['강아지', '신발', 12, 22]
console.log(arr2.length) // 길이(= 요소의 갯수)가 4인 배열 arr2
console.log(arr2[arr2.length - 1]) // 마지막요소 출력[마지막요소 = 길이(length) - 1]
arr2.push('추가요소') // push메서드는 배열 요소를 추가
console.log(arr2)
