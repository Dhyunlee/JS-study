// in키워드


//객체 생성
let student1 = {
    이름: 'Mike',
    국어: 92, 수학: 80,
    영어: 95, 과학: 98
};

console.log('이름' in student1); // true
console.log('성별' in student1); // false


// 2. with키워드

//객체 생성
let student2 = {
    name: '이동현',
    kor: 98, math: 77, eng: 86, sc: 86
}

// 예제
//      let output = '';
//      output += 'name' +  student2.name + '\n';
//      output += 'kor' +  student2.kor + '\n';
//      output += 'math' +  student2.math + '\n';
//      output += 'eng' +  student2.eng + '\n';
//      output += 'sc' +  student2.sc + '\n';
//      output += '총점' + (student2.kor +student2.math + student2.eng + student2.sc);
//      console.log(output);


//위 예제를 with키워드로 짧게 줄어서 쓰자!
let output = '';
with (student2) {
    output += 'name: ' + name + '\n';
    output += 'kor: ' + kor + '\n';
    output += 'math: ' + math + '\n';
    output += 'eng: ' + eng + '\n';
    output += 'sc: ' + sc + '\n';
    output += 'total score: ' + (kor + math + eng + sc);
}
console.log(output);

