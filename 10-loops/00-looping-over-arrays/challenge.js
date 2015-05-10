module.exports.sumNumbers = function(array){
	var result =0;
	for (var counter=0; counter<array.length; counter++){
		result += array[counter];
	};
	return result;
};

module.exports.splitAndLowerCaseString = function(string){
	var split = string.toLowerCase().split(",");
	return split;
};

module.exports.addIndex = function(array){
	var emptyArray = [];
	for (var i = 0; i<array.length; i++){
		emptyArray.push(i+" is "+array[i]);
	}
	return emptyArray;
};
