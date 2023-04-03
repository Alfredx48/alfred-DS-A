var longestCommonPrefix = function (strs) {
	if (strs.length === 0) return "";
	strs.sort();
	var first = strs[0];
	var last = strs[strs.length - 1];
	for (var i = 0; i < first.length; i++) {
		if (first[i] !== last[i]) {
			return first.substring(0, i);
		}
	}
	return first;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));


