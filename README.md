# broccoli-webp

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

```
Copyright 2014 Greg V <floatboth@me.com>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
```

[http://www.apache.org/licenses/LICENSE-2.0](http://www.apache.org/licenses/LICENSE-2.0)

```
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
