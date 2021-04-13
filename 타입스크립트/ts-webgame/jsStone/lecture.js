"use strict";
// 제네릭 에서 extends는 타입 제한
var a = {
    add: function (a, b) { return a + b; }
};
var b = {
    add: function (a, b) { return a + b; }
};
function forEach(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
;
var d = [1, 2, 3];
forEach(d, function (item) {
    item = item + 1;
});
console.log('d: ', d);
['a', 'b', 'c', 1].forEach(function (item) {
    console.log(item);
});
