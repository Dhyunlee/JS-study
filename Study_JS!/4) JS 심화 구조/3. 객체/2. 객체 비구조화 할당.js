/*
 [비구조화 할당(= 객체 구조분해)]
    print 함수를 보면 파라미터로 받아온 hero 내부의 값을 조회 할 때 마다 'hero.** '를 입력하고 있는데, 
    객체 비구조화 할당이라는 문법을 사용하면 코드를 더욱 짧고 보기 좋게 작성 할 수 있습니다.

 */

 


 const ironMan = {
     name: '토니 스타크',
     actor: '로버트 다우니 주니어',
     alias: '아이언맨',
 };

 const captainAmerica = {
     name: '스티븐 로저스',
     actor: '크리스 에반스',
     alias: '캡틴 아메리카',
 };

 function print (hero) {
     const {alias, name, actor} = hero;
     const text = `${alias} (${name}) 역할을 맡은 배우는 ${actor} 입니다. `;
     console.log(text);
 }
/*
  * 피라미터에 비구조화 할당 문법을 사용하여 간단히 나타낼 수 있다.
    function print ({alias, name, actor}) {    
      const text = `${alias} (${name}) 역할을 맡은 배우는 ${actor} 입니다. `;
      console.log(text);
  }

   * 이런식으로도 비구조화 할당을 사용할 수 있다.
   const {name} = ironMan;
   console.log(name);
   이건 console.log(ironMan.name)과 비슷함
*/


 print(ironMan);
 print(captainAmerica);

 
 // 이런식으로 간단하게 비구조 할당을 사용할 수 있다.
 const {name, actor, alias} = ironMan
 console.log(name) // === console.log(ironMan.name)
 console.log(actor) // === console.log(ironMan.name)
 console.log(alias) // === console.log(ironMan.name)

