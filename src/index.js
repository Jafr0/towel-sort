
// You should implement your task here.

module.exports = function towelSort(matrix) {

	if (matrix === undefined) {
		return ([])
	} else if (matrix.length === 0) {
		return ([])
	}

	var result = matrix.map((e, i) => (i % 2) ? e.toString().split(',').reverse() : e.toString().split(',')).join().split(",");

	return result;


}
