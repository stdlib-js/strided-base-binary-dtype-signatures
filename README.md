<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Binary Signatures

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Generate a list of binary interface signatures from strided array [data types][@stdlib/strided/dtypes].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/strided-base-binary-dtype-signatures
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var signatures = require( '@stdlib/strided-base-binary-dtype-signatures' );
```

#### signatures( dtypes1, dtypes2, dtypes3\[, options] )

Generates a list of binary interface signatures from strided array [data types][@stdlib/strided/dtypes].

```javascript
var dtypes = [
    'float64',
    'float32',
    'int32',
    'uint8'
];

var sigs = signatures( dtypes, dtypes, dtypes );
// returns [ 'float32', 'float32', 'float32', ... ]
```

The function accepts the following arguments:

-   **dtypes1**: list of supported [data types][@stdlib/strided/dtypes] for the first input argument.
-   **dtypes2**: list of supported [data types][@stdlib/strided/dtypes] for the second input argument.
-   **dtypes3**: list of supported [data types][@stdlib/strided/dtypes] for the output value.
-   **options**: options.

The function accepts the following options:

-   **enums**: `boolean` flag indicating whether to return signatures as a list of [data type][@stdlib/strided/dtypes] enumeration constants. Default: `false`.

When the `enums` options is `false`, the function returns an array of [data type][@stdlib/strided/dtypes] strings. To return [data type][@stdlib/strided/dtypes] enumeration constants, set the `enums` option to `true`.

```javascript
var dtypes = [
    'float64',
    'float32',
    'int32',
    'uint8'
];
var options = {
    'enums': true
};

var sigs = signatures( dtypes, dtypes, dtypes, options );
// returns [...]
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The function returns a strided array having a stride length of `3` (i.e., every `3` elements define a binary interface signature).
-   For each signature (i.e., set of three consecutive non-overlapping strided array elements), the first two elements are the input data types and the third element is the return data type.
-   All signatures follow type [promotion rules][@stdlib/ndarray/promotion-rules].

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var dtypes = require( '@stdlib/strided-dtypes' );
var replace = require( '@stdlib/string-replace' );
var signatures = require( '@stdlib/strided-base-binary-dtype-signatures' );

// Get the list of supported strided array data types:
var dt = dtypes();

// Generate binary interface signatures:
var sigs = signatures( dt, dt, dt );

// Format the output:
var str = replace( JSON.stringify( sigs ), /("[^"]+","[^"]+","[^"]+"),/g, '$1,\n' );
console.log( str );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/strided-base/binary-signature-callbacks`][@stdlib/strided/base/binary-signature-callbacks]</span><span class="delimiter">: </span><span class="description">assign callbacks to binary interfaces according to type promotion rules.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/strided-base-binary-dtype-signatures.svg
[npm-url]: https://npmjs.org/package/@stdlib/strided-base-binary-dtype-signatures

[test-image]: https://github.com/stdlib-js/strided-base-binary-dtype-signatures/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/strided-base-binary-dtype-signatures/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/strided-base-binary-dtype-signatures/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/strided-base-binary-dtype-signatures?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/strided-base-binary-dtype-signatures.svg
[dependencies-url]: https://david-dm.org/stdlib-js/strided-base-binary-dtype-signatures/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/strided-base-binary-dtype-signatures/tree/deno
[deno-readme]: https://github.com/stdlib-js/strided-base-binary-dtype-signatures/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/strided-base-binary-dtype-signatures/tree/umd
[umd-readme]: https://github.com/stdlib-js/strided-base-binary-dtype-signatures/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/strided-base-binary-dtype-signatures/tree/esm
[esm-readme]: https://github.com/stdlib-js/strided-base-binary-dtype-signatures/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/strided-base-binary-dtype-signatures/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/strided-base-binary-dtype-signatures/main/LICENSE

[@stdlib/strided/dtypes]: https://github.com/stdlib-js/strided-dtypes

[@stdlib/ndarray/promotion-rules]: https://github.com/stdlib-js/ndarray-promotion-rules

<!-- <related-links> -->

[@stdlib/strided/base/binary-signature-callbacks]: https://github.com/stdlib-js/strided-base-binary-signature-callbacks

<!-- </related-links> -->

</section>

<!-- /.links -->
