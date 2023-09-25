//예제 2-14 (스코프 체인 확인 - 크롬 전용)
var a = 1;
var outer = function () {
    var b = 2;
    var inner = function () {
        console.dir(inner);
    };
    inner();
};
outer();
//outer의 scope에서 inner 변수만 노출됨.(브라우저 성능 향상을 위해 그런것 같음.)

//예제 2-15 (스코프 체인 확인(2) - 크롬 전용)
var a = 1;
var outer = function () {
    var b = 2;
    var inner = function () {
        console.log(b);
        console.dir(inner);
    };
    inner();
};
outer();

//예제 2-16 (스코프 체인 확인(3))
var a = 1;
var outer = function () {
    var b = 2;
    var inner = function () {
        console.log(b);
        debugger;
    };
    inner();
};
outer();