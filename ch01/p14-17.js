//얕은 복사와 깊은 복사
//얕은 복사(shallow copy)는 바로 아래 단계의 값만 복사하는 방법, 
//깊은 복사(deep copy)는 내부의 모든 값들을 하나하나 찾아서 전부 복사하는 방법
var copyObject = function (target) {
    var result = {};
    for (var prop in target) {
        result[prop] = target[prop];
    }
    return result;
};

var user = {
    name: 'Jaenam',
    urls: {
        portfolio: 'http://github.com/abc',
        blog: 'http://blog.com',
        facebook: 'http:/facebook.com/abc'
    }
};
//얕은 복사
var user2 = copyObject(user);

user2.name = 'Jung';
console.log(user.name === user2.name);  //false

user.urls.portfolio = 'http://protfolio.com';
console.log(user.urls.portfolio === user2.urls.portfolio);  //true

user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog);   //true

user2.urls.blog = 'http://blog.com'; //원래대로

//깊은 복사
user2.urls = copyObject(user.urls);
user.urls.portfolio = 'http://portfolio.com';
console.log(user.urls.portfolio === user2.urls.portfolio);  //false

user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog);  //false

//깊은 복사 시 기본형 데이터는 그냥 복사. but 참조형 데이터는 다시 그 내부의 프로퍼티들을 복사해야함.
//참조형 데이터가 있을 때마다 재귀적으로 수행.

var copyObjectDeep = function (target) {
    var result = {};
    if (typeof target === 'object' && target !== null) {    //target이 null일 때도 typeof는 'object'를 반환
        for (var prop in target) {
            result[prop] = copyObjectDeep(target[prop]);
        }
    } else {
        result = target;
    }
    return result;
};

//깊은 복사 결과 확인
var obj = {
    a: 1,
    b: {
        c: null,
        d: [1, 2]
    }
};
var obj2 = copyObjectDeep(obj);

obj2.a = 3;
obj2.b.c = 4;
obj.b.d[1] = 3;

console.log(obj);   //{ a: 1, b: { c: null, d: [ 1, 3 ] } }
console.log(obj2);  //{ a: 3, b: { c: 4, d: { '0': 1, '1': 2 } } }

