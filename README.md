# minimalistic demo of webpack 2 tree shaking

```
git clone https://github.com/petrhanak/webpack-treeshaking-demo.git
yarn install
yarn run build
```

## without minification
```

/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ exports["a"] = foo;
/* unused harmony export bar */
function foo() {
  return 'foo'
}

function bar() {
  return 'bar'
}


/***/ }
```

## minified and reformatted

```

([function (e, t, n) {
  "use strict";
  function r() {
    return "foo"
  }

  t.a = r
}

```