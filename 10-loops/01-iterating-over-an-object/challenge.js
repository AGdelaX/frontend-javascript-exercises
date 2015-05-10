module.exports.getKeys = function(object){
	var emptyArray = [];
	for (var property in object) {
		emptyArray.push(property);
	}
	return emptyArray;
};

module.exports.getValues = function(object){
	var emptyArray = [];
	for (var property in object) {
		emptyArray.push(object[property]);
	}
	return emptyArray;
};

module.exports.objectToArray = function(object){
	var emptyArray = [];
	for (var property in object) {
		emptyArray.push(property+" is "+object[property]);
	}
	return emptyArray;
};