module.exports.createCourse = function(courseTitle, courseDuration, courseStudents){
	return {
		title : courseTitle,
		duration: courseDuration,
		students: courseStudents
	};
};

module.exports.addProperty = function(object, newProp, newValue){
	if (newProp in object){
		return object;
	} 
	else {
		object[newProp]=newValue;
		return object;
	}
};

module.exports.formLetter = function(letter){
	return "Hello "+letter.recipient+",\n\n"+letter.msg+"\n\nSincerely,\n"+letter.sender;
};

module.exports.canIGet = function(item, money){
	var inventory = {
		items : ["MacBook Air", "MacBook Pro", "Mac Pro", "Apple Sticker"],
		prices : [999, 1299, 2499, 1]
	};
	var i = inventory.items.indexOf(item);
	return inventory.prices[i] <= money;

};