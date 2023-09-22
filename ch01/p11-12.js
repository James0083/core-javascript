//객체의 가변성에 따른 문제점 해결방법
var user = {
    name: 'Jaenam',
    gender: 'male'
};

//새로운 객체를 반환하도록 하드코딩 
var changeName = function (user, newName) {
    return {
        name: newName,
        gender: user.gender
    };
};

var user2 = changeName(user, 'Jung');

if (user !== user2) {
    console.log('유저 정보가 변경되었습니다.');
}
console.log(user.name, user2.name); //Jung Jung
console.log(user === user2);    //true

// 유저 정보가 변경되었습니다.
// Jaenam Jung
// false

//하드코딩하면 property 수가 많아질 수록 번거롭다
//기존 정보를 복사에서 새로운 객체를 반환(얕은 복사)하는 방법 -> p13.js

