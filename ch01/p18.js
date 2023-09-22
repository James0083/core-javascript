//간단하게 깊은 복사
var copyObjectViaJSON = function (target) {
    return JSON.parse(JSON.stringify(target));
};
var obj = {
    a: 1,
    b: {
        c: null,
        d: [1, 2],
        func1: function () { console.log(3); }
    },
    func2: function () { console.log(4); }
};
var obj2 = copyObjectViaJSON(obj);

obj2.a = 3;
obj2.b.c = 4;
obj.b.d[1] = 3;

console.log(obj);
// {
//   a: 1,
//   b: { c: null, d: [ 1, 3 ], func1: [Function: func1] },
//   func2: [Function: func2]
// }
console.log(obj2);  // { a: 3, b: { c: 4, d: [ 1, 2 ] } }

// JSON 문법으로 표현된 문자열로전환 => 다시 JSON 객체로 바꿈
/**
 * 단점 : 메서드나 숨겨진 프로퍼티인 --proto__나 getter/setter 등과 같이 
 * JSON으로 변경할 수 없는 프로퍼티들은 모두 무시.
 * 순수한 정보만을 다룰 때 활용하기 좋은 방법임.
 *  (httpRequest로 받은 데이터를 저장한 객체를 복사할 때 등)
*/