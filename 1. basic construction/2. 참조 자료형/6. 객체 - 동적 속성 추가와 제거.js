window.onload = function () {

/*
    동적 속성 추가와 제거
      : 처음 객체를 생성하는 시점 이후에 속성을 추가하거나 
        제거하는 것을 "동적으로 속성을 추가/제거한다"라고 표현한다. 
*/

/*  1. 동적으로 속성 추가
        : 객체에 속성을 추가할 때에는 [객체.속성 = 추가할 내용]의 형태로 사용한다.  
*/

    // 빈 객체 생성
    let student = {};
    console.log('[속성 없는 상태]: ' + student)

    // 속성 추가
    student.name = '이동현',
        student.age = 29,
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
    //--------------------------------------------------------------------

/* 2. 동적으로 속성 수정(갱신)  
    : 이미 존재하는 속성이라면 값을 수정합니다. 
     -> 해당 속성에 값이 없으면 새로 값을 추가합니다. 
*/

    // 속성 수정(갱신)
    student.name = "이동훈" // 속성 값을 이동훈으로 수정
    student.age = 26,
    console.log('[속성 수정]: ' + student.name + ' ' + student.age)
    console.log("[수정된 속성 확인] \n" + student.toString())
    console.log(" -> 이동현을 " + student.name + "으로 수정")


/*    
    3. 동적으로 속성 제거
       : 객체에 속성을 제거하려면 delete키워드를 사용한다. 
        => 객체의 속성을 입력할 때는 typeof() 키워드 처럼 괄호를
           사용해도 되고 사용하지 않아도 된다
    
*/

    // 속성 제거
    delete student.name  
    // delete (student.name) : student객체의 name속성 제거 
    console.log('[속성 제거]: ' + "속성 'name'이 제거됨 \n" + student); 
    // toString()메서드를 사용하지 않아도 toString()메서드를 사용한다. 

}
