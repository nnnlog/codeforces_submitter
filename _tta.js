module.exports = cookie => {
	let ret = 0, tta = cookie['39ce7'];
	for (let i = 0; i < tta.length; i++) {
		ret = (ret + (i + 1) * (i + 2) * tta.charCodeAt(i)) % 1009;
		if (i % 3 === 0) {
			ret++;
		}
		if (i % 2 === 0) {
			ret *= 2;
		}
		if (i > 0) {
			ret -= Math.floor(tta.charCodeAt(Math.floor(i / 2)) / 2) * (ret % 5);
		}
		while (ret < 0) {
			ret += 1009;
		}
		while (ret >= 1009) {
			ret -= 1009;
		}
	}
	return ret;
};
