// call/apply 메서드의 활용 1

//예제 3-17
var obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3
};

//프로퍼티 3에 'd'추가 (push 메서드)
Array.prototype.push.call(obj, 'd');
console.log(obj);

//객체를 배열로 변환 (slice 메서드)
var arr = Array.prototype.slice.call(obj);
console.log(arr);

// slice 메서드 : 시작 인덱스 값과 마지막 인덱스 값을 받아 시작값부터 마지막값의 앞부분까지의 배열 요소를 추출하는 메서드.
// 매개변수를 아무것도 넘기지 않을 경우 -> 원본 배열의 얕은 복사본을 반환함.
