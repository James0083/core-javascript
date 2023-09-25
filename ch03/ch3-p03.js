var a = 1;
window.b = 2;
console.log(a, window.a, this.a);   //1 1 1
console.log(b, window.b, this.b);   //2 2 2

//전역변수를 선언하면 자바스크립트 엔진은 이를 적역객체의 프로퍼티로 할당한다.

window.a = 3;
b = 4;
console.log(a, window.a, this.a);   //3 3 3
console.log(b, window.b, this.b);   //4 4 4

//삭제 명령에서는 전역변수 전언과 전역객체의 프로퍼티 할당이 다르다

var a = 1;
delete window.a;    //false
console.log(a, window.a, this.a);   //1 1 1

var b = 2;
delete b;           //false
console.log(b, window.b, this.b);   //2 2 2

window.c = 3;
delete window.c;    //true
console.log(c, window.c, this.c);   //Uncaught ReferenceError: c is not defined

window.d = 4;
delete d;           //true
console.log(d, window.d, this.d);   //Uncaught ReferenceError: d is not defined
