module.exports.newArray = function(a, b, c, d){
	return [a, b, c, d];
};

module.exports.firstAndLast = function(a, b, c, d){
	var array = [1, 2];
	array[1]= a;
	
	if (array[array.length-1]===undefined){
		array.pop;
		array[2]=array.length-1;
	} 
	else {
		array[2]=array.length-1;
	}
	return array;
};