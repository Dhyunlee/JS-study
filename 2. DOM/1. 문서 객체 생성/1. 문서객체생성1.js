/* 문서 객체 만들기 (1) */


// 1. 문서 객체 생성

  /* 요소노드 생성 */
  let header = document.createElement('h1');
  //변수 header에 HTML문서의 h1태그를 만들어 임시로 저장.

  /* 텍스트노드 생성 */
  let textNode = document.createTextNode('hello');
  //변수 textNode에 HTML문서의 hello라는 텍스트를 
  //만들어 임시로 저장.



// 2. 문서 객체 연결

header.appendChild(textNode);
//생성한 요소노드(h1)와 텍스트노드('hello')를 연결
document.body.appendChild(header);
//요소노드를 body 문서 객체에 연결(= 요소 추가)


/* 문서 객체 만들기 (2) */

let img1 = document.createElement('img');
let img2 = document.createElement('img');

// 이미지태그(요소노드)의 속성지정1 (변수명.속성 = 값)
img1.src = '풍경.jpg';
img1.width = 500;
img1.height= 300;

// 속성지정2
img2.setAttribute('src', '풍경.jpg')
img2.setAttribute('width','500')
img2.setAttribute('height','500')

// 문서 객체 연결
document.body.appendChild(img1);
document.body.appendChild(img2);
