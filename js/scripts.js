

// HW3
(function() {
	'use strict';

var arr = [1, 2, 3, 4];

function square(x) {
	return x * x;
};

function map(fn, array) {
	return array.map(fn);
};

console.log(map(square, arr));
console.log(arr);


})();

