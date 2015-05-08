module.exports.newArray = function(a, b, c, d){
	return [a, b, c, d];
};

module.exports.firstAndLast = function(){
	var a = arguments[0];
	var lastElementIndex= arguments.length-1;
	var b = arguments[lastElementIndex];

	var array = [a, b];
	
	return array;
};