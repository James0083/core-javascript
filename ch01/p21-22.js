var arr1 = [undefined, 1];
var arr2 = [];
arr2[1] = 1;

arr1.forEach(function (v, i) { console.log(v, i); });   // undefined 0 / 1 1
arr2.forEach(function (v, i) { console.log(v, i); });   // 1 1
// method가 비어있는 요소에 대해서는 어떠한 처리도 하지 않고 건너뜀
// 배열도 실제로는 객체와 마찬가지로 특정 인덱스에 값을 지정할 때 
//  비로소 빈 공간을 확보하고 인덱스를 이름으로 지정하고 데이터의 주솟값을 저장하는 등의 동작을 한다.
// 따라서 사용자가 지정한 undefined은 '값'으로 동작함.
// 반면 자바스크립트 엔진이 반환해주는 undefined는 문자 그대로 '값이 없음'을 의미한다.(키값=인덱스 자체가 존재하지 않음.)

arr1.map(function (v, i) { return v + i; });    // [NaN, 2]
arr2.map(function (v, i) { return v + i; });    // [empty, 2]

arr1.filter(function (v) { return !v; });   //[undefined]
arr2.filter(function (v) { return !v; });   //[]

arr1.reduce(function (p, c, i) { return p + c + i; }, '');  //undefined011
arr2.reduce(function (p, c, i) { return p + c + i; }, '');  //11


/* null 과 undefined */
/**
 * null과 undefined는 의미가 같다. 
 * '비어있음'을 명시적으로 나타내고 싶을 때는 undefined가 아닌 null을 쓰면 된다. (null은 애초에 이런 용도로 만든 데이터임.)
 * 이 규칙을 따르는 한 undefined는 오지 '값을 대입하지 않은 변수에 접근하고자 할 때 자바스크립트 엔진이 반환해주는 값' 이다.
 * 
 * typeof null은 object이다. (자바스크립트 자체 버그)
 * 따라서 어떤 변수의 값이 null인지 여부를 판별하기 위해서는 typeof 대신 ===연산자를 써야함.
 */
var n = null;
console.log(typeof n);      //object

console.log(n == undefined);    //true
console.log(n == null);    //true

console.log(n === undefined);    //false
console.log(n === null);    //true
