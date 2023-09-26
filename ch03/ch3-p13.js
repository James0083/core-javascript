//예제 3-13 함수를 생성자로 사용
var Cat = function (name, age) {
    this.bark = '야옹';
    this.name = name;
    this.age = age;
};

var choco = new Cat('초코', 7);
var nabi = new Cat('나비', 5);
console.log(choco, nabi);