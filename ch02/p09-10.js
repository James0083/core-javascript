//예제 2-9 - 원본코드
console.log(sum(1, 2));
console.log(multiply(3, 4));

function sum(a, b) {    //함수 선언문
    return a + b;
}

var multiply = function (a, b) {    //함수 표현식
    return a * b;
}

//예제 2-10 - 호이스팅 후
function sum(a, b) {    //함수 선언문 전체를 호이스팅 한다.
    return a + b;
}
var multiply;           //변수는 선언부만 끌어올린다.

console.log(sum(1, 2));
console.log(multiply(3, 4));

multiply = function (a, b) {    //함수 표현식은 할당부는 원래 자리에 남겨둔다.(함수를 하나의 값으로 취급하기 때문)
    return a * b;
}

/**
 * 1. 메모리 공간을 확보하고 주솟값을 변수 sum에 연결한다.
 * 2. 메모리 공간을 확보하고 주솟값을 변수 multiply에 연결한다.
 * 3. sum함수를 또 다른 메모리 공간에 저장하고, 주솟값을 변수 sum에 할당한다.
 * 4. sum을 실행한다.(정상실행, 결과값:3)
 * 5. multiply를 실행할 때 함수가 변수에 할당되어있지 않기 때문에 'multiply is not a function'이라는 
 *      에러 메시지가 출력된다.
 * 6. 뒤의 multiply할당부는 에러로 인해 실행되지 않고 런타임이 종료된다.
 */

