module.exports.stream = function(conditionFn, actionFn){

	while (conditionFn()){
		actionFn();
	}
};

module.exports.sumNumbers = function(array){
	var sum = 0;
	var i = 0;
	while (i<array.length) {
		sum += array[i];
		i++;
	}
	return sum;
};