/*
 [삼항 (조건)연산자]
  : 조건식의 평가 결과에 따라 반환할 값을 결정. 
  형태는 다음과 같다. 
  (조건식) ? (조건식이 true일 때) : (조건식이 false일 때) 

  <삼항연산자는 중첩해서 쓰면 코드 가독성이 떨어지므로 이때는 다른 조건문을 사용하는 것이 낫다.>

*/

        const a = 5;
        const b = 3;

        let result = (a + b === 8) ?
            ("맞습니다.") :
            ("틀립니다.");
        console.log(result);


        const array = [];
        let text = array.length === 0 ?
            '배열이 비어있습니다' :
            '배열이 비어있지 않습니다.';

        console.log(text);
