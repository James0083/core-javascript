//**함수 선언문의 위험성**//
//(극단적인 예시)
//함수 선언문으로 선언하면 컨텍스트 실행시 가장 먼저 할당이 되기 때문에 이전에 썼던 함수에 덮어씌워질 수 있다.
//이 경우에 에러가 날 수 있는데, 해당 함수에는 문제가 없고, 반환값도 JS특성상 자동 현변환이 일어나 버그를 찾기 어렵다. 

//ex.)
//예제 2-11
//line 60
console.log(sum(3, 4));
//line 100
function sum(x, y) {
    return x + y;
}
//...
//line 200
var a = sum(1, 2);
//...
//line 5000
function sum(x, y) {
    return x + '+' + y + '=' + (x + y);
}
//line 5010
var c = sum(1, 2);
console.log(c);
//...

//반면 함수 표현식으로 정의했다면 5000번째 줄 이전과 이후에 각각의 의도에 맞게 동작했을 것이다.
//뿐만 아니라 함수가 할당된 100번째 줄 이전에 sum 함수가 호출하는 코드가 있다면 그 줄에서 바로 에러가 검출되므로
//더욱 빠른 타이밍에 손쉽게 디버깅 할 수 있었을 것이다.
//예제 2-12
//line 60
console.log(sum(3, 4));
//line 100
var sum = function (x, y) {
    return x + y;
}
//...
//line 200
var a = sum(1, 2);
//...
//line 5000
var sum = function (x, y) {
    return x + '+' + y + '=' + (x + y);
}
//line 5010
var c = sum(1, 2);
console.log(c);
//...
