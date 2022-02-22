
// You should implement your task here.

module.exports = function towelSort(matrix) {
	if (!matrix.length) {
		return []
	}
    
if (matrix === undefined) {
		return []
	}

	var result = matrix.map((e, i) => (i % 2) ? e.toString().split(',').reverse() : e.toString().split(',')).join().split(",");

	return result;


}
