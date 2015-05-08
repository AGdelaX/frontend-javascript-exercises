module.exports.newArray = function(a, b, c, d){
	return [a, b, c, d];
};


module.exports.firstAndLast = function(array){
	var arg = Array.prototype.slice.call(arguments);

	var end = arg.length-1;

	var a = arg[0];
	var b = arg[end];

	var newArray = [a, b];
	return newArray;
};