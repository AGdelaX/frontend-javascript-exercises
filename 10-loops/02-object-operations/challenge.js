module.exports.copy = function(object){
	var newObject = {};
	for (var prop in object){
		newObject[prop]=object[prop];
	}
	return newObject;
};

module.exports.extend = function(dest, src){
	for (var prop in src){
		dest[prop]=src[prop];
	}
	return dest;
};

module.exports.hasElems = function(object, array){
	var emptyArray= [];
	for (var i=0; i<array.length; i++){
		object[array[i]]=array[i];
	}
	for (var prop in object) {
		emptyArray.push(object[prop]);
	}
	array.toString === emptyArray.toString;

};