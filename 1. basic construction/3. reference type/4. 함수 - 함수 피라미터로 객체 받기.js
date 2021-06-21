// 함수에서 객체를 파라미터로 받기     

const student1 = {
    name: "김철수",
    stuID: 123,
    classNum: "1반"
};
const student2 = {
    name: "신짱구",
    stuID: 456,
    classNum: "2반"
};

function stuInfo(value) {
    const { name, stuID, classNum } = value
    const text = `
        이름:${name} 
        학번:${stuID}
        학년:${classNum}
    `;
    console.log(text);
}

stuInfo(student1)
stuInfo(student2)