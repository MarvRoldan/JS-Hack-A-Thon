// -- A Redundant Function --
var redundant = ( str ) => () => str;

// -- Remove Trailing and Leading Zeros --
var removeLeadingTrailing = ( n ) => parseFloat( n ) + "";

// -- Array of Multiples --
var arrayOfMultiples = ( num, length ) => {
	var array = []
	for (i = 1; i <= length; i++) {
		array.push( num * i );
	}
	return array;
}

// -- Convert Key, Values in an Object to Array --
var objectToArray = ( obj ) => Object.entries( obj );


// -- Make a Circle with OOP -- 
class Circle {
    constructor( radius ) {
    this.radius = radius;
    }
      
    getArea(){ return this.radius * this.radius * Math.PI };
    getPerimeter(){ return this.radius * Math.PI * 2 };
}