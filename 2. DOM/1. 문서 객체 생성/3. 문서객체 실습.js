/* 실습해보기 */

// body 내부에 h1태그로 즐거운 자바크립트를 5번 출력하기
for(let i = 0; i<=5; i++) {
    let text = document.createElement('h1');
    text.innerHTML = "즐거운 자바스크립트" + i; 
    document.body.appendChild(text);
}