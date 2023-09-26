//예제 3-14
var func = function (a, b, c) {
    console.log(this, a, b, c);
};

func(1, 2, 3);
func.call({ x: 1 }, 4, 5, 6);

//예제 3-15
var obj = {
    a: 1,
    method: function (x, y) {
        console.log(this.a, x, y);
    }
};

obj.method(2, 3);
obj.method.call({ a: 4 }, 5, 6);