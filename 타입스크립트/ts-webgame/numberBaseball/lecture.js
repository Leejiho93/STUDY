var num = 3;
var str = num.toString();
var arr = [1, 2, 3, 'a'];
var arr2 = [1, 2, 3];
var arr3 = [1, 2, 'str'];
var arr4 = [true, '2', 3]; // readonly
var ob = { a: 'b' };
var a = 1;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
function add(a, b) {
    return a + b;
}
function f(a, b) {
    return function (s) {
        console.log(s);
        return a + b;
    };
}
var obj = {
    a: function (b) {
        return 'hi';
    }
};
