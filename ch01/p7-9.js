var a = 10;
var b = a;

var obj1 = { c: 10, d: 'ddd' };
var obj2 = obj1;
//변수를 복사 같은 주소를 참조

function printVariables() {
    console.log("a=", a);
    console.log("b=", b);
    console.log("obj1.c=", obj1.c);
    console.log("obj1.d=", obj1.d);
    console.log("obj2.c=", obj2.c);
    console.log("obj2.d=", obj2.d);
    console.log("a === b => ", a === b);
    console.log("obj1 === obj2 => ", obj1 === obj2);
    console.log("---------------------------");
}

printVariables();

b = 15;
// obj2.c = 20;
printVariables();
// a===b =>  false
// obj1===obj2 =>  true
// 변수c가 참조하는 값의 주소가 바뀌어도 obj1.c 와 obj2.c가 가리키는 주소값이 같음.

obj2 = { c: 20, d: 'ddd' };
printVariables();
// a===b =>  false
// obj1===obj2 =>  false (참조하는 객체의 주소가 다름)
console.log("obj1.c === obj2.c =>", obj1.c === obj2.c);
console.log("obj1.d === obj2.d =>", obj1.d === obj2.d);
//obj1.c === obj2.c => false
// obj1.d === obj2.d => true

