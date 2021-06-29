/* for in 반복문 */

// 일반 for 반복문
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


/* for of 반복문 */
for (let item of array) {
    console.log(item); // 과자 사탕 젤리
}