/* 문서 객체 생성 */
let output = '';

output += '<ul>';
output += '  <li>Java Script </li>';
output += '  <li>jQuery</li>';
output += '  <li>Ajax</li>';
output += '</ul>';

// innerHTML 속성에 문자열을 할당
document.body.innerHTML = output;

// 문서 객체에 내용 추가
document.body.innerHTML += '<h1>Documnet Object Model</h1>';
