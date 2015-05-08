module.exports.newArray = function(a, b, c, d){
	return [a, b, c, d];
};


module.exports.firstAndLast = function(array){
	array = [arguments];
	var lastItem = array.length-1;

	var a = array[0];
	var b = array[lastItem];

	array = [a,b];
	
	return array;
};