/*
  [Truthy와 Falsy]
    Truthy: true과 같은 값 
    Falsy: false과 같은 값
     : 'undefined, null, 0, '', NaN' 이것들은 !연산자 붙여 출력하면 true값이 된다. 즉 false와 동일한 값이다. 
      위에 언급한 것을 제외한 나머지들은 true 값이다. 
 */

        // 아래의 것들은 모두 Falsy(false와 동일한)값
        console.log(!undefined)
        console.log(!null)
        console.log(!0)
        console.log(!'')
        console.log(!NaN)

        //  Truthy와 Falsy한 값은 조건문에서 사용
        const value1 = { a: 1};
        if (value) {
            console.log('value 가 Truthy 하네요.');
        }else {
            console.log('value 가 Falsy 하네요.')
        }
       // 삼항연산자로 구현

       const value2 = { a : 2 };
       const truthy  = value2 ? true : false;
       console.log(truthy);
