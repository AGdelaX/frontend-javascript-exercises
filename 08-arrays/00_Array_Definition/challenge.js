module.exports.newArray = function(a, b, c, d){
	return [a, b, c, d];
};

module.exports.firstAndLast = function(){
	var a = arguments[0];
	var lastIndex = arguments.length-1;
	var b = arguments[lastIndex];
	var array = [];
	array.push(b);
	array.unshift(a);
	return array;
};