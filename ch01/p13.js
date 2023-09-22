//기존 정보를 복사에서 새로운 객체를 반환(얕은 복사)하는 방법
var copyObject = function (target) {
    var result = {};
    for (var prop in target) {
        result[prop] = target[prop];
    }
    return result;
};

//copyObject를 이용
var user = {
    name: 'Jaenam',
    gender: 'male'
};

var user2 = copyObject(user);
user2.name = 'Jung';

if (user !== user2) {
    console.log('유저 정보가 변경되었습니다.');
}
console.log(user.name, user2.name);
console.log(user === user2);

// 유저 정보가 변경되었습니다.
// Jaenam Jung
// false
