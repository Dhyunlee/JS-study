/*
[Promise]
 : 비동기 작업을 조금 더 편하게 처리할 수 있도록 ES6에 도입된 기능이다. 
   Promise는 주로 서버에서 받아온 데이터를 화면에 표시할 때 사용된다.

   이전에는 비동기 작업을 처리할 때에는 콜백 함수로 처리를 해야했는데, 
   콜백 함수로 처리를 하게 된다면 비동기 작업이 많아질 경우 코드가 난잡하게 
   될 우려가 있다. 그래서 만들어진게 Promise객체이다. 

   한번 숫자 n을 파라미터로 받아와서 다섯번에 걸쳐 1초마다 1씩 더해서
   출력하는 작업을 setTimeout으로 구현해보자!
*/
if (false) {

  function increaseAndPrint(n, callback) {
    setTimeout(() => {
      const increased = n + 1;
      console.log(increased);
      if (callback) {
        callback(increased);
      }
    }, 1000);
  }

  increaseAndPrint(0, n => {
    increaseAndPrint(n, n => {
      increaseAndPrint(n, n => {
        increaseAndPrint(n, n => {
          increaseAndPrint(n, n => {
            console.log('끝!');
          });
        });
      });
    });
  });
}

/*
위 코드처럼 작성하면 읽기가 복잡하다. 이런식의 코드를 
Callback Hell (콜백지옥) 이라고 부른다.

비동기적으로 처리해야 하는 일이 많아질수록, 코드의 깊이가 
계속 깊어지는 현상이 있는데, Promise를 사용하면 이렇게 코드의 
깊이가 깊어지는 현상을 방지할 수 있다. 
*/

/*
[Promise 만들기]
 
 Promise 는 다음과 같이 만듭니다.
------------------------------------------------

const myPromise = new Promise((resolve, reject) => {
  // 제작 코드..
})

------------------------------------------------
new Promise(생성자)에 전달되는 함수는 실행함수(executor)라 부른다. 
실행함수는 new Promise가 생성될 때, 자동으로 실행되는데, 결과를 
최종적으로 만들어내는 제작 코드를 포함한다.

실행함수의 인수인 resolve, reject는 콜백함수이며, 실행함수는 두 콜백 
함수중 하나를 반드시 호출해야한다.

Promise는 성공 할 수도 있고, 실패 할 수 있다. 성공 할 때에는 resolve 를 
호출해주면 되고, 실패할 때에는 reject 를 호출해주면 된다. 지금 당장은 
실패하는 상황은 고려하지 않고, 1초 뒤에 성공시키는 상황에 대해서만 구현을 해보자!
*/
if (false) {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('성공!');
    }, 1000);
  });

  myPromise.then(n => {
    console.log(n);
  });
}

/*
resolve 를 호출 할 때 특정 값을 파라미터로 넣어주면, 이 값을 작업이 
끝나고 나서 사용 할 수 있다. 작업이 끝나고 나서 또 "다른 작업"을 해야 
할 때에는 Promise 뒤에 ".then(...)" 을 붙여서 사용하면 된다.

이번에는, 1초뒤에 실패되게끔 구현해보자!
*/
if (false) {
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('에러 발생!'));
    }, 1000);
  });

  myPromise
    .then(n => {
      console.log(n);
    })
    .catch(error => {
      console.log(error);
    });
}

if (false) {
  /*
  실패하는 상황에서는 reject 를 사용하고, ".catch" 를 통하여 실패했을시 
  수행 할 작업을 설정 할 수 있다.
  
  이제, Promise 를 만드는 함수를 작성해봅시다.
  */
  {
    function increaseAndPrint(n) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const value = n + 1;
          if (value === 5) {
            const error = new Error();
            error.name = 'ValueIsFiveError';
            reject(error);
            return;
          }
          console.log(value);
          resolve(value);
        }, 1000);
      });
    }

    increaseAndPrint(0).then((n) => {
      console.log('result: ', n);
    })
  }
  /*
    여기까지만 보면, 결국 함수를 전달하는건데, 뭐가 다르지 
    싶을수도 있다. 하지만, Promise 의 속성 중에는, 만약 then 
    내부에 넣은 함수에서 또 Promise 를 리턴하게 된다면, 
    연달아서 사용 할 수 있다. 다음과 같이 말이다.
  */
  function increaseAndPrint(n) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const value = n + 1;
        if (value === 5) {
          const error = new Error();
          error.name = 'ValueIsFiveError';
          reject(error);
          return;
        }
        console.log(value);
        resolve(value);
      }, 1000);
    });
  }

  increaseAndPrint(0)
    .then(n => {
      return increaseAndPrint(n);
    })
    .then(n => {
      return increaseAndPrint(n);
    })
    .then(n => {
      return increaseAndPrint(n);
    })
    .then(n => {
      return increaseAndPrint(n);
    })
    .then(n => {
      return increaseAndPrint(n);
    })
    .catch(e => {
      console.error(e);
    });
}

if (true) {

  // 위 코드는 이렇게 정리할 수 있다.
  function increaseAndPrint(n) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const value = n + 1;
        if (value === 5) {
          const error = new Error();
          error.name = 'ValueIsFiveError';
          reject(error);
          return;
        }
        console.log(value);
        resolve(value);
      }, 1000);
    });
  }

  increaseAndPrint(0)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .then(increaseAndPrint)
    .catch(e => {
      console.error(e);
    });
}

/*
    Promise 를 사용하면, 비동기 작업의 개수가 많아져도 코드의 깊이가
    깊어지지 않게 된다. 하지만, 이것도 불편한 점이 있다.
    에러를 잡을 때 몇번째에서 발생했는지 알아내기도 어렵고 특정 조건에
    따라 분기를 나누는 작업도 어렵고, 특정 값을 공유해가면서 작업을
    처리하기도 까다롭다.

    async/await 을 사용하면, 이러한 문제점을 깔끔하게
    해결 할 수 있습니다.
*/
