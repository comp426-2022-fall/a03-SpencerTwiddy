export function roll(sides, dice, times) {
	let ans = {
  		'sides': sides,
		'dice': dice,
		'rolls': times,
		results: [sides*dice*times/2]
	};
	console.log("inside roll runs");
	return ans;
}