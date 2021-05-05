window.onload = function() {

/* 
    for in 반복문
     : 배열이나 객체를 더욱 쉽게 다룰 수 있음
*/

    let array = ['과자', '사탕', '젤리'];
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }

    // for in 반복문 
    for (let i in array) {
        console.log(array[i]);
    }

    let numbers = [10, 20, 30, 40];
    for (let number in numbers) {
        console.log(numbers[number])
    }

    // 객체에서 for in 반복문 사용 
    const dog = {
        name: '뽀비',
        sound: '멍멍~~',
        age: 1,
    }
    for (let key in dog) {
        console.log(`${key}: ${dog[key]}`);
    }
/*
    for of 반복문 
     : 앞의 반복문(for in)은 인덱스가 들어가는데 for of 반복문은
       인덱스가 아닌 배열 자체 요소를 활용 할 수 있다.
*/
    for (let item of array) {
        console.log(item); // 과자 사탕 젤리
    }
}
