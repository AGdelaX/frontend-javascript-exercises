module.exports.newArray = function(a, b, c, d){
	return [a, b, c, d];
};

module.exports.firstAndLast = function([input]){
	var array = [input];
	var lastElementIndex= array.length-1;

	var a = array[0];
	var b = array[lastElementIndex];
	var newArray = [a, b];
	
	return newArray;
};