# has-package [![Build Status](https://travis-ci.org/bukinoshita/has-package.svg?branch=master)](https://travis-ci.org/bukinoshita/has-package)

> Check if a project has [package.json](https://docs.npmjs.com/files/package.json)

Checks if a `package.json` file is present in the working directory.


## Install

```
$ npm install --save has-package
```


## Usage

```
.
├── foo
│   └── ...
└── bar
    └── package.json
```

```js
const hasPackage = require('has-package');

hasPackage('foo');
//=> false

hasPackage('bar');
//=> true
```


## API

### hasPackage([cwd])

Returns a `boolean`.

#### cwd

Type: `string`<br>
Default: `process.cwd()`

Current working directory.


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
