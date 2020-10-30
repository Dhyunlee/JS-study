window.onload = function () {

    // break 제어문

    // 예제1)
    while (true) {
        if (confirm("종료하시겠습니까?")) {
            break;
        }
    }
    console.log("종료되었습니다.");


    // 예제2)
    let array = [200, 100, 50, 10]
    for (let i = 0; i < array.length; i++) {
        if (array[i] < 20) {
            console.log("배열 내부에 20보다 작은 값이  있습니다.")
            break;
        }
    }

    // 예제2 응용)
    let array = [200, 100, 50, 10, 100, 10, 20]
    let isUnder20 = false;
    for (let i = 0; i < array.length; i++) {

        if (array[i] < 20) {
            isUnder20 = true;
            break;
        }
    }

    // 20보다 작은값 존재유무 검사
    if (isUnder20) {
        console.log("20보다 작은 값이 존재합니다.")
    } else {
        console.log("20보다 작은 값이 존재합니다.")
    }


    // continue 제어문

    // 예제1)
    for (let i = 0; i < 10; i++) {
        if (i % 2 == 0) { //짝수라면 다음 문장을 무시(i 출력 x)하고 진행!
            continue;
        }
        console.log(i);
    }
    //===========================================================================================


}
