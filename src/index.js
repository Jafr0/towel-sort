
// You should implement your task here.

module.exports = function towelSort(matrix) {
	let newarr = [];
	let num = 0;

	if (matrix = [] || matrix == undefined) {
		return ([])
	} else

		matrix.forEach(e => {
			num += 1
			if (num % 2 == 0) {
				let a = e.reverse()
				a.forEach(i => newarr.push(i))
			} else e.forEach(i => newarr.push(i))

		});

	return newarr;


}
