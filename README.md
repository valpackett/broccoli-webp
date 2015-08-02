# broccoli-webp [![npm version](https://img.shields.io/npm/v/broccoli-webp.svg?style=flat)](https://www.npmjs.org/package/broccoli-webp) [![npm downloads](https://img.shields.io/npm/dm/broccoli-webp.svg?style=flat)](https://www.npmjs.org/package/broccoli-webp) [![Build Status](https://img.shields.io/travis/myfreeweb/broccoli-webp.svg?style=flat)](https://travis-ci.org/myfreeweb/broccoli-webp) [![Dependency Status](https://img.shields.io/gemnasium/myfreeweb/broccoli-webp.svg?style=flat)](https://gemnasium.com/myfreeweb/broccoli-webp) [![Unlicense](https://img.shields.io/badge/un-license-green.svg?style=flat)](http://unlicense.org)

This [Broccoli] plugin converts JPEG/PNG files to [WebP].

[Broccoli]: https://github.com/joliss/broccoli
[WebP]: https://developers.google.com/speed/webp/

## Installation

Install just like any other broccoli plugin:

```bash
npm install --save-dev broccoli-webp
```

[cwebp-bin](https://www.npmjs.org/package/cwebp-bin) is listed as an optional dependency.  
If you can't install it, install cwebp manually:

- FreeBSD: `pkg install graphics/webp`
- OS X: `brew install webp`
- Ubuntu/Debian: `sudo apt-get install webp`

## Usage

```js
var convertToWebP = require('broccoli-webp');

var outputTree = convertToWebP(inputTree, options);
```

- **`inputTree`**: A tree that contains the images you want to convert.
- **`options`**: A hash of options. Currently supported:
    - **`quality`** (number, 0..100): compression quality for JPEGs (PNGs are converted to lossless WebP)
    - **`alphaQuality`** (number, 0..100): transparency quality
    - **`compression`** (number, 0 -- fast, 6 -- slowest): compression strength

## Example

```js
var convertToWebP = require('broccoli-webp');

var img = "img";

var webp = convertToWebP(img, {quality: 80});

return [img, webp];
```

## Contributing

Please feel free to submit pull requests!
Bugfixes and simple non-breaking improvements will be accepted without any questions :-)

By participating in this project you agree to follow the [Contributor Code of Conduct](http://contributor-covenant.org/version/1/2/0/).

## License

This is free and unencumbered software released into the public domain.  
For more information, please refer to the `UNLICENSE` file or [unlicense.org](http://unlicense.org).
