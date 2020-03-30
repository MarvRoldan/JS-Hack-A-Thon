// -- A Redundant Function --
var redundant = (str) => () => str;

// -- Remove Trailing and Leading Zeros --
var removeLeadingTrailing = (n) => parseFloat(n)+'';

// -- Array of Multiples --
var arrayOfMultiples = (num, length) => {
	var array = []
	for (i = 1; i <= length; i++) {
		array.push( num * i );
	}
	return array;
}
