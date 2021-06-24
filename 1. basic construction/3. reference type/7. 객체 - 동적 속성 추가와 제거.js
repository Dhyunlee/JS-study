
// 1. 동적으로 속성 추가

// 빈 객체 생성
let student = {};
console.log('[속성 없는 상태]: ' + student)

// 속성 추가
student.name = 'Mike';
student.age = 29;
student.gender = '남';

// 메서드 추가   
student.toString = function () {
    let output = '';
    for (let key in this) {
        if (key != 'toString') {
            output += key + ': ' + this[key] + '\n';
        }
    }
    return output;
};
console.log("[속성 추가] \n" + student.toString());


// 2. 동적으로 속성 수정(갱신)  

// 속성 수정(갱신)
student.name = "James" // 속성 값을 James으로 수정
student.age = 26,
    console.log('[속성 수정]: ' + student.name + ' ' + student.age)
console.log("[수정된 속성 확인] \n" + student.toString())
console.log(" -> Mike을 " + student.name + "으로 수정")



// 3. 동적으로 속성 제거

// 속성 제거
delete student.name
// delete (student.name) : student객체의 name속성 제거 
console.log('[속성 제거]: ' + "속성 'name'이 제거됨 \n" + student);