# broccoli-webp [![npm version](https://img.shields.io/npm/v/broccoli-webp.svg?style=flat)](https://www.npmjs.org/package/broccoli-webp) [![npm downloads](https://img.shields.io/npm/dm/broccoli-webp.svg?style=flat)](https://www.npmjs.org/package/broccoli-webp) [![Dependency Status](https://img.shields.io/gemnasium/myfreeweb/broccoli-webp.svg?style=flat)](https://gemnasium.com/myfreeweb/broccoli-webp) [![WTFPL](https://img.shields.io/badge/license-WTFPL-brightgreen.svg?style=flat)](https://www.tldrlegal.com/l/wtfpl)

This [Broccoli][] plugin converts JPEG/PNG files to [WebP][].

[Broccoli]: https://github.com/joliss/broccoli
[WebP]: https://developers.google.com/speed/webp/

## Installation

First, get cwebp...

- OS X: `brew install webp`
- FreeBSD: `pkg install graphics/webp`
- Ubuntu/Debian: `sudo apt-get install webp`

... OR add [webp-bin](https://www.npmjs.org/package/webp-bin) or [webp](https://www.npmjs.org/package/webp) to your deps too.

Second, install as any other broccoli plugin:

```bash
npm install --save-dev broccoli-webp
```

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

## License

Copyright © 2014 [myfreeweb](https://github.com/myfreeweb)
This work is free. You can redistribute it and/or modify it under the
terms of the Do What The Fuck You Want To Public License, Version 2,
as published by Sam Hocevar. See the COPYING file for more details.
