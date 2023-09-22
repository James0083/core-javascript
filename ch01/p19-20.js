//undefined 와 null

/** undefined
 * 1. 사용자가 명시적으로 지정하는 경우
 * 2. 자바스크립트 엔진이 자동으로 부여하는 경우
 *    : 사용자가 응당 어떤 값을 지정할 것이라고 예상되는 상황임에도 실제로는 그렇게 하지 않았을 때
 *      (1) 값을 대입하지 않은 변수(데이터 영역의 메모리 주소를 지정하지 않은 식별자)에 접근할 때
 *      (2) 객체 내부의존재하지 않는 프로퍼티에 접근하려고 할 때
 *      (3) return문이 없거나 호출되지 않는 함수의 실행 결과
 */

var a;
console.log(a); //(1) 값을 대입하지 않은 변수에 접근할 때

var obj = { a: 1 };
console.log(obj.a);
console.log(obj.b); //(2) 객체 내부의존재하지 않는 프로퍼티에 접근하려고 할 때
// console.log(b);     //c.f) ReferenceError: b is not defined

var func = function () { };
var c = func(); //(3) return문이 없거나 호출되지 않는 함수의 실행 결과
console.log(c); //반환(return)값이 없으면 undefined를 반환한 것으로 간주


var arr1 = [];
arr1.length = 3;
console.log(arr1);  //[ <3 empty items> ] => 어떤 값도(심지어 undefined도) 할당되어 있지 않음.

var arr2 = new Array(3);
console.log(arr2);  //[ <3 empty items> ]

var arr3 = [undefined, undefined, undefined];
console.log(arr3);  //[ undefined, undefined, undefined ]

