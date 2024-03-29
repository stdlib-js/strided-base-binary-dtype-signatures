/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var promotionRules = require( '@stdlib/ndarray-promotion-rules' );
var safeCasts = require( '@stdlib/ndarray-safe-casts' );
var resolveEnum = require( '@stdlib/strided-base-dtype-resolve-enum' );
var resolveStr = require( '@stdlib/strided-base-dtype-resolve-str' );
var format = require( '@stdlib/string-format' );


// FUNCTIONS //

/**
* Returns the intersection of two sorted lists.
*
* @private
* @param {ArrayLikeObject} list1 - first sorted list
* @param {ArrayLikeObject} list2 - second sorted list
* @returns {ArrayLikeObject} result
*
* @example
* var list1 = [ 'a', 'b', 'c', 'd' ];
* var list2 = [ 'b', 'd', 'e' ];
*
* var out = intersection( list1, list2 );
* // returns [ 'b', 'd' ]
*/
function intersection( list1, list2 ) {
	var out;
	var M;
	var N;
	var v;
	var i;
	var j;
	var k;

	M = list1.length;
	N = list2.length;

	out = [];
	k = 0;
	for ( i = 0; i < M; i++ ) {
		if ( k >= N ) {
			break;
		}
		v = list1[ i ];
		for ( j = k; j < N; j++ ) {
			if ( v === list2[ j ] ) {
				k = j + 1;
				out.push( v );
				break;
			}
		}
	}
	return out;
}

/**
* Resolves a list of data types to data type strings.
*
* @private
* @param {ArrayLikeObject} dtypes - list of data types
* @returns {(StringArray|Error)} data type strings (or an error)
*
* @example
* var out = resolve( [ 1, 2, 3 ] );
* // returns [...]
*/
function resolve( dtypes ) {
	var out;
	var dt;
	var i;

	out = [];
	for ( i = 0; i < dtypes.length; i++ ) {
		dt = resolveStr( dtypes[ i ] );
		if ( dt === null ) {
			return new TypeError( format( 'invalid argument. Must provide recognized data types. Unable to resolve a data type string. Value: `%s`.', dtypes[ i ] ) );
		}
		out.push( dt );
	}
	return out;
}

/**
* Tests whether a provided array contains a specified value.
*
* @private
* @param {Array} arr - input array
* @param {*} value - search value
* @returns {boolean} boolean indicating whether a provided array contains a specified value
*/
function contains( arr, value ) {
	var i;
	for ( i = 0; i < arr.length; i++ ) {
		if ( arr[ i ] === value ) {
			return true;
		}
	}
	return false;
}


// MAIN //

/**
* Generates a list of binary interface signatures from strided array data types.
*
* ## Notes
*
* -   The function returns a strided array having a stride length of `3` (i.e., every `3` elements define a binary interface signature).
* -   For each signature (i.e., set of three consecutive non-overlapping strided array elements), the first two elements are the input data types and the third element is the return data type.
* -   All signatures follow type promotion rules.
*
* @param {Array} dtypes1 - list of supported data types for the first argument
* @param {Array} dtypes2 - list of supported data types for the second argument
* @param {Array} dtypes3 - list of supported data types for the output
* @param {Options} [options] - options
* @param {boolean} [options.enums=false] - boolean flag indicating whether to return signatures as a list of enumeration constants
* @throws {TypeError} must provide recognized data types
* @returns {Array} strided array containing binary interface signatures
*
* @example
* var dtypes = [
*     'float64',
*     'float32',
*     'int32',
*     'uint8'
* ];
*
* var sigs = signatures( dtypes, dtypes, dtypes );
* // returns [ 'float32', 'float32', 'float32', ... ]
*/
function signatures( dtypes1, dtypes2, dtypes3, options ) {
	var cache;
	var casts;
	var opts;
	var tmp;
	var out;
	var dt1;
	var dt2;
	var dt3;
	var t1;
	var t2;
	var t3;
	var t4;
	var M;
	var N;
	var i;
	var j;
	var k;

	if ( arguments.length > 3 ) {
		opts = options;
	} else {
		opts = {};
	}
	// Resolve the list of provided data types to data type strings:
	dt1 = resolve( dtypes1 );
	if ( dt1 instanceof Error ) {
		throw dt1;
	}
	if ( dtypes2 === dtypes1 ) { // don't do work if we don't need to
		dt2 = dt1;
	} else {
		dt2 = resolve( dtypes2 );
		if ( dt2 instanceof Error ) {
			throw dt2;
		}
	}
	if ( dtypes3 === dtypes1 ) { // don't do work if we don't need to
		dt3 = dt1;
	} else if ( dtypes3 === dtypes2 ) {
		dt3 = dt2;
	} else {
		dt3 = resolve( dtypes3 );
		if ( dt3 instanceof Error ) {
			throw dt3;
		}
	}
	// Sort the list of return dtypes:
	dt3.sort();

	// Initialize a cache for storing the safe casts for promoted dtypes:
	cache = {};

	// Generate the list of signatures...
	M = dt1.length;
	N = dt2.length;
	out = [];
	for ( i = 0; i < M; i++ ) {
		t1 = dt1[ i ];
		for ( j = 0; j < N; j++ ) {
			t2 = dt2[ j ];

			// Resolve the promoted dtype for the current dtype pair:
			t3 = promotionRules( t1, t2 );

			// Check whether the dtype pair promotes...
			if ( t3 === -1 || t3 === null ) {
				// The dtype pair does not promote:
				continue;
			}
			// Check whether the promoted dtype is in our list of output dtypes...
			if ( contains( dt3, t3 ) ) {
				out.push( t1, t2, t3 );
			}
			// Retrieve the allowed casts for the promoted dtype:
			casts = cache[ t3 ];

			// If a list of allowed casts is not in the cache, we need to resolve them...
			if ( casts === void 0 ) {
				// Resolve the list of safe casts for the promoted dtype:
				casts = safeCasts( t3 );

				// Remove safe casts which are not among the supported output dtypes:
				casts = intersection( dt3, casts.sort() );

				// Store the list of safe casts in the cache:
				cache[ t3 ] = casts;
			}
			// Generate signatures for allowed casts...
			for ( k = 0; k < casts.length; k++ ) {
				t4 = casts[ k ];
				if ( t4 !== t3 ) {
					out.push( t1, t2, t4 );
				}
			}
		}
	}
	if ( opts.enums ) {
		tmp = [];
		for ( i = 0; i < out.length; i++ ) {
			tmp.push( resolveEnum( out[ i ] ) );
		}
		out = tmp;
	}
	return out;
}


// EXPORTS //

module.exports = signatures;
