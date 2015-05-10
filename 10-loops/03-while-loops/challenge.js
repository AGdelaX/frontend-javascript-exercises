module.exports.stream = function(conditionFn, actionFn){
	var i = 0;
	while (i < 11){
		conditionFn == true;
		actionFn;
		i ++;
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

