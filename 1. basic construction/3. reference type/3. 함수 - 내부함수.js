// 내부 함수
function output() {
    function innerfun() { //  innerfun()함수를 '내부 함수'라고 한다. 
        console.log("오늘도 힘내요!")
    }
    innerfun()
}

output()

// innerfun() (X)   