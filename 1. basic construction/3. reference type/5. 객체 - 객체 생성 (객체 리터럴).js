/* 객체 생성1 - Object()생성자 함수 이용하는 방법 */
let foo = Object();


/* 객체 생성2 - 리터럴 표기를 이용하는 방법, (객체 리터럴이라고 함) */
let obj = {

    keyA: "값A",
    keyB: "값B",
    keyC: "값C",
    keyD: "값D",
    keyE: function () {
        return this.keyA + this.keyB;
    }
};

// 출력 
console.log(foo);
console.log(obj);