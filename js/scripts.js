// -- A Redundant Function --
var redundant = ( str ) => () => str;

// -- Remove Trailing and Leading Zeros --
// parseFloat(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat
var removeLeadingTrailing = ( n ) => parseFloat( n ) + "";

// -- Array of Multiples --
// .push(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
var arrayOfMultiples = ( num, length ) => {
	var array = []
	for (i = 1; i <= length; i++) {
		array.push( num * i );
	}
	return array;
};

// -- Convert Key, Values in an Object to Array --
// Object.entries(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
var objectToArray = ( obj ) => Object.entries( obj );

// -- Make a Circle with OOP -- 
// CLasses (ES6): https://googlechrome.github.io/samples/classes-es6/
class Circle {
    constructor( radius ) {
    this.radius = radius;
    }
      
    getArea(){ return this.radius * this.radius * Math.PI };
    getPerimeter(){ return this.radius * Math.PI * 2 };
};

// -- Convenience Store --
var changeEnough = ( change, amountDue ) => ( change[0] * 0.25 + change[1] * 0.1 + change[2] * 0.05 + change[3] * 0.01 ) >= amountDue;

// -- Get the Century --
// Math.ceil(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/ceil
// Template literals: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
var century = ( year ) => {
	if ( year <= 2001 ) {
		return `${ Math.ceil( year / 100 ) }th century`
	} else 
		return `${Math.ceil( year/100 ) }st century`
};

// -- ReverseAndNot --
// .split(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
// .reverse(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse
// .join(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
var reverseAndNot = ( i ) => +( i.toString().split( "" ).reverse().join( "" ) + i );

// -- Apples and Bananas --
// .replace(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// .this: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
String.prototype.vreplace = function(vowel) {
    return this.replace(/[aeiou]/g, vowel);
}