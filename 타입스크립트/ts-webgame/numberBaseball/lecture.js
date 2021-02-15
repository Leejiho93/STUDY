var num = 3;
var str;
var arr = [1, 2, 3];
var arr2 = [1, 2, 'str'];
var arr3 = [true, '2', 3];
var a = 1;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
