//예제 2-5  - 원본코드
function a() {
    console.log(b);
    var b = 'bbb';
    console.log(b);
    function b() { }
    console.log(b);
}
a();

//예제 2-6 - 호이스팅을 마친 상태
function aa() {
    var b;              //수집대상1 - 변수의 선언부만 끌어올림
    function b() { }    //수집대상2 - 함수 선언은 전체를 끌어올림.

    console.log(b);     //(1)
    b = 'bbb';          //변수의 할당부는 원래자리에 남겨둠.
    console.log(b);     //(2)
    console.log(b);     //(3)
}
aa();

//예제 2-7 함수 선언문을 함수 표현식으로 바꾼 코드
function aaa() {
    var b;              
    var b = function b() { }    //<--바뀐 부분
    // 호이스팅이 끝난 상태에서의 함수 선언문은 함수명으로 선언한 변수에 함수를 할당한 것처럼 여길 수 있다.

    console.log(b);     //(1)
    b = 'bbb';          
    console.log(b);     //(2)
    console.log(b);     //(3)
}
aaa();

/** **실행결과** 
 * [Function: b]
 * bbb
 * bbb
 */