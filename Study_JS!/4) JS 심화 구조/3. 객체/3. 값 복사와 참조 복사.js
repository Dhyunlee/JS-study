window.onload = (event) => {
  // 값 복사(= 깊은 복사)와 참조 복사(= 얕은 복사)
  
  /*
     1. 값 복사
         : 기본 자료형(문자열, 숫자, 불린)은 순수한 값이기 때문에 복사를 할 때에 
           완전히 그 값(실제 값)이 저장된다. 따라서 원본의 값이 변경되어도 복사한 
           변수의 값은 변경되지 않는다.(반대의 경우도 마찬가지) 
           이러한 복사를 "깊은 복사(deep clone)"라고도 부른다.  
  */
  
  // 값복사
  let origin = '원본 값'
  let clone = origin;
  console.log('origin: ' + origin) //원본 값
  console.log('clone: ' + clone) //원본 값
  
  // 사본 값 수정
  clone = '다른 값';
  console.log('origin: ' + origin) //원본 값
  console.log('clone: ' + clone) //다른 값
  
  
  /*
     2. 참조 복사
         : 객체(함수, 배열, 객체 리터럴)는 기본 자료형과는 달리 값 자체(= 실제 값)가 
           복사되는 것이 아닌 참조 값(주소 값)을 복사한다. 쉽게 말해서 원본과 사본 
           둘다 동일한 주소 값을 가리키고 있음을 의미한다. 따라서 원본의 값이 변경되면 
           복사한 변수의 값도 같이 변하게 된다. 
           이러한 복사를 "얕은 복사(shallow clone)"라고도 부른다.
  */
  console.log("===============================")
  
  // 참조 복사
  function Custom() {
    this.val = 123;
    this.div = document.createElement('div');
  }
  
  let origin2 = new Custom();
  let clone2 = origin2
  console.log('origin2: ' + origin2.val) //123
  console.log('clone2: ' + clone2.val) //123
  
  // 사본 값 수정
  clone2.val = '다른 값';
  console.log('origin2: ' + origin2.val) //다른 값
  console.log('clone2: ' + clone2.val) //다른 값
  
  
  /*
     3. 객체의 깊은 복사
         : 기본 자료형처럼 순수 값을 복사하려면 깊은 복사(deep clone)를 해야한다. 
           객체의 깊은 복사를 하는 방법은 여러가지 있지만 그 중 JSON.parse() 메서드와 
           JSON.stringify() 메서드를 활용하면 값 복사처럼 깊은 복사를 할 수 있다. 
  
  */
  console.log("===============================")
  
  // 객체의 깊은 복사
  
  function Custom_() {
    this.val = 123;
    this.div = document.createElement('div');
  }
  
  let origin3 = new Custom_();
  let clone3 = JSON.parse(JSON.stringify(origin3))
  console.log('origin3: ' + origin3.val) //123
  console.log('clone3: ' + clone3.val) //123
  
  // 사본 값 수정
  clone3.val = '다른 값';
  console.log('origin3: ' + origin3.val) // 123
  console.log('clone3: ' + clone3.val)// 다른 값
  
  
  
  /* 
     JSON.parse(JSON.stringify(obj))을 활용시 주의
       : JSON.parse(JSON.stringify(obj))을 활용하면 깊은 복사가 가능하다. 
         다만, 유사 배열(document.createElement('div')등), 내장객체(Date()류), 
         undefined, Infinity 에서는 원하는 결과가 출력되지 않을 수 있다.
  
    [용어 정리]
     - JSON.stringify() 메소드
        :인수로 전달받은 자바스크립트 객체를 문자열로 변환하여 반환
  
     - JSON.parse() 메소드
        : 인수로 전달받은 문자열을 자바스크립트 객체로 변환하여 반환 
  */
  console.log("===============================")
  function Custom() {
    this.val = '123';
    this.div = document.createElement('div');
  }
  
  let origin_val = { aa: document.createElement('div'), cc: new Custom().val };
  let clone_val = JSON.parse(JSON.stringify(origin_val)); 
  
  console.log(origin_val); //{aa: div, cc: "123"}
  console.log(clone_val); //{aa: {}, cc: "123"}
  
  };