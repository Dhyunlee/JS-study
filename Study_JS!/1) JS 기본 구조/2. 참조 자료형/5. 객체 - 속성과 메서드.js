window.onload = function () {

/*
    [객체] 
        = 'key: value'의 형태인 프로퍼티[속성 , 메서드]의
          집합으로 구성된다.
*/

/*  
        1. 객체 생성 
          : let obj = {} 이런식으로 중괄호를 넣으면 된다. 
*/
let obj1 = {}; // 객체 선언
console.log(obj1); // 속성이 빈 객체가 출력


/*
        2. 객체에 속성 넣기 
          : 중괄호 안에 key: value 의 형태로 작성하며, 속성을 
            추가할 때에는 쉼표(,)를 넣어서 표현한다. 
*/
let obj2 = {
    name1: '이동현', // 객체에 속성(프로퍼티) 넣기
    age: 29
};

console.log(obj2); // 객체 출력


    /*
        3. 객체에 메서드 넣기
          : 객체의 속성 중 함수의 기능을 하는 속성을 메서드라고 한다.
            메서드를 넣을 때에는 익명 함수의 형태로 작성한다.
            메서드내에서 객체의 속성(변수 형태)을 사용하려면 
            this.속성명으로 작성하여 해당 객체의 속성을 참조하도록
            해줄 수 있다. 
    */

let person = {
    name2: '이동현', //프로퍼티 생성
    toDO: function (food) { //메서드 생성
          console.log(this.name2 + '이 ' + food + '을/를 먹습니다.')
    } //this.name2는 person.name2를 참조한다.
};

person.toDO('밥');  // 메서드를 실행(호출)

/* 
    4-① 속성(요소)에 접근 
        1) 대괄호([]) 표기법
            : 대괄호 표기법에서는 접근하려는 프로퍼티를 문자열 형태로
              만든 다음 대괄호를 둘러싼다. 반드시 접근하려는 프로퍼티
              이름을 문자열 형태로 만들어야 한다.  
        
        2) 마침표(.) 표기법
            : 마침표 표기법은 객체 다음에 마침표를 찍고 접근하려는 프로퍼티
              이름을 적어준다. 이 표기법은 일반적인 프로퍼티 접근법이다.  
*/
    let personList = {
        name: 'kim',
        age: 15,
        'long-text': '오늘은 정말 날씨가 좋다.'
        // key명이 길때에는 문자열로 작성해야한다.
    }

    // 대괄호 표기법
    console.log(personList['name'])
    console.log(personList['age']);
    console.log(personList['long-text']);
/* 
    key명이 긴 속성을 출력할 때에는 반드시 
    대괄호 표기법으로 작성해야한다.
*/

    // 마침표(.) 표기법
    console.log(personList.name);
    console.log(personList.age);


/*
    4-② 속성(요소)에 접근 (잘 사용하지는 않음)
        1. for in(반복문)을 이용한 객체의 프로퍼티 접근(참조)
            : 객체는 단순 for반복문으로 객체의 속성을 살펴보는 것이 
                불가능하므로 for in반복문을 사용하여 객체의 속성에 접근
                할 수 있다. for in반복문에 객체를 넣으면 객체의 속성 갯수
                만큼 반복문을 실행한다. 
    
        2. Object객체 속성으로 속성(요소), 값에 접근
                1) Object.keys(객체명): 속성의 key에 접근한다.
                2) Object.values(객체명): 속성의 vlaue에 접근한다.
                3) Object.entries(객체명): 속성 자체에 접근          
*/
    const dog = {
        name: '뽀비',
        sound: '멍멍~~',
        age: 1,
    }
    //  for in(반복문)을 이용한 속성에 접근
    
    for(key in dog) {
        console.log(key + ":" + dog[key])
    } // dog 객체 전체 출력
 
    for (key in dog) {
        if (key === 'name') { //key가 name인거 출력
           console.log(key + ":" + dog[key])
        }
     }

    //  Object객체 속성에 접근
console.log(Object.keys(dog)); //속성에 접근
console.log(Object.values(dog)); // 값에 접근
console.log(Object.entries(dog)) // //속성, 값 (전체) 접근  


/*  5-① 객체 내부에서의 this 키워드 
        : 객체 내부에서 객체의 속성을 다룰 때에 this 키워드를 사용한다.
          this가 속해 있지 않는 상태에서는 window 객체를 가리킨다. 
          하지만 객체 내부에서의 this는 객체 자체를 가리킨다. 
          따라서 위 예제의 this.name2에서 this는 person 객체를 가리킨다.
    
    5-② 객체 내부에 화살표 함수와 익명 함수의 차이 
        : 객체 내부에 메서드를 작성할 때 익명 함수를 작성하는데 
          형태가 비슷한 화살표 함수 역시 사용할 수는 있지만 
          조금 차이가 있다. 
          익명 함수로 메서드를 생성할 때에 this가 가리키는 것은
          객체를 가리키지만, 화살표 함수에서는 this를 가지지 못
          하므로 상위의 this를 찾게 된다. this가 존재하지 않다면
          window 객체를 가리키게 되어 원하는 결과가 나오지 않는다.
              
    */
//  1) 객체 생성
    let person2 = {
        name2: '이동현',
        eat_a: function (food2) { //익명함수에서 this
            console.log(this.name2 + '이 ' + food2 + '을/를 먹습니다.')
        },
        eat_b: (food2) => { //화살표 함수에서 this
            console.log(this.name2 + '이 ' + food2 + '을/를 먹고있습니다.')
            /* 
               화살표 함수는 this를 가지지 못하므로 상위
               this를 찾게 되고 존재하지 않아 window 객체를 
               가리키는데 window 객체의 속성으로 name2가 존
               재하지 않아 undefined를 출력한다.
               따라서 객체에서 되도록 화살표 함수를 않는 것이
               좋다. (꼭 사용하지 말아야 하는 것은 아니다. )
            */
        }

    };

//  2)메서드를 호출합니다. 
    person2.eat_a('간식');
    person2.eat_b('포도');

}
