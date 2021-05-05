window.onload = function () {

    // 객체와 관련된 키워드 ('in' 과 'with')

/*
    1. in키워드
      : <'key'> in <객체>형태로 쓴다. 
       -> for in반복문과는 별도로 [in키워드]를 사용하면 
          객체내에 해당 키가 있는 지 확인하는 키워드이다. 
    */

    //객체 생성
    let student1 = {
        이름: '이동현',
        국어: 92, 수학: 80,
        영어: 95, 과학: 98
    };

    console.log('이름' in student1); // true
    console.log('성별' in student1); // false

    //===========================================================

/*
    2. with키워드: with(객체) { <코드> }로 쓴다.
     -> 복잡하게 사용해야 하는 코드를 짧게 줄어주는 키워드이다. 
 */

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
    //  -> ()안에 객체를 넣어주면  객체를 명시할 필요없이 속성을 쉽게 사용할 수 있다. 
}

