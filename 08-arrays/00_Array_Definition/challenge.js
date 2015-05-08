module.exports.newArray = function(a, b, c, d){
	return [a, b, c, d];
};

module.exports.firstAndLast = function(a, b, c, d){
	var argumentsArray = [a,b,c,d];
	var array = [1, 2];
	array[0]= a;
	var end=argumentsArray.length-1;

	if (argumentsArray[end]===undefined){
		argumentsArray.pop;
		end= argumentsArray.length-1;
		array[1]=argumentsArray[end];
	} 
	else {
		array[2]=array.length-1;
	}
	return array;
};