module.exports.addItem = function(item, array){
	if (array[array.length-1]===item){
		return array;
	}
	else {
		array.push(item);
		return array;
	}
};

module.exports.reverseSortedList = function(array){
	return array.sort().reverse();
};