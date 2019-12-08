function parseHashtags(str) {
	var re = /(^|\s)(#[a-z\d-]+)/ig;
	return str.match(re).map(removeHashtag);
}

function removeHashtag(str) {
	return str.trim().substr(1);
}

exports.parseHashtags = parseHashtags;
exports.removeHashtag = removeHashtag;
exports.datetime = function() {
  return new Date("2018-06-10T14:43:20.636Z").toISOString();
};