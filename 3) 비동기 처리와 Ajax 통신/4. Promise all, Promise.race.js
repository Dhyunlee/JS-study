/*
  [Promise all, Promise.race]

    지금은 getDog -> getRabbit -> getTurtle 순서대로 실행이 되고 있는데요, 
    하나가 끝나야 다음 작업이 시작하고 있는데, 동시에 작업을 시작하고 싶다면, 
    다음과 같이 Promise.all 을 사용해야합니다.
*/
if(false){
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
  };

  const getRabbit = async () => {
    await sleep(500);
    return '토끼';
  };
  const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
  };

  async function process() {
    const results = await Promise.all([getDog(), getRabbit(), getTurtle()]);
    console.log(results);
  }

  process();
}

// 만약에 여기서 배열 비구조화 할당 문법을 사용한다면 각 결과값을 따로 따로 
// 추출해서 조회 할 수 있습니다.
if(true){

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
  };

  const getRabbit = async () => {
    await sleep(500);
    return '토끼';
  };
  const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
  };

  async function process() {
    const [dog, rabbit, turtle] = await Promise.all([
      getDog(),
      getRabbit(),
      getTurtle()
    ]);
    console.log(dog);
    console.log(rabbit);
    console.log(turtle);
  }

  process();
}
/*
  Promise.all 를 사용 할 때에는, 등록한 프로미스 중 하나라도 실패하면, 모든게 실패 
  한 것으로 간주합니다.

  이번에는 Promise.race 라는 것에 대해서 알아봅시다. 이 함수는 Promise.all 과 달리,
  여러개의 프로미스를 등록해서 실행했을 때 가장 빨리 끝난것 하나만의 결과값을 
  가져옵니다.
*/
if(false){

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const getDog = async () => {
    await sleep(1000);
    return '멍멍이';
  };

  const getRabbit = async () => {
    await sleep(500);
    return '토끼';
  };
  const getTurtle = async () => {
    await sleep(3000);
    return '거북이';
  };

  async function process() {
    const first = await Promise.race([
      getDog(),
      getRabbit(),
      getTurtle()
    ]);
    console.log(first);
  }

  process();
}
/*
   Promise.race 의 경우엔 가장 다른 Promise 가 먼저 성공하기 전에 가장 먼저 끝난 
   Promise 가 실패하면 이를 실패로 간주합니다. 따라서, 현재 위의 코드에서 getRabbit
   에서 에러를 발생시킨다면 에러를 잡아낼 수 있지만, getTurtle 이나 getDog 에서 
   발생한 에러는 무시됩니다.
*/