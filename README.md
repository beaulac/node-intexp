# intexp: `frexp` for integers

Similarly to the `frexp` function in C, this decomposes a given integer value x into a integer coefficient and an integral power of two.

`ldexp` is also provided as an inverse function.

### Methods

#### `intexp(int)`
Returns `[coefficient, exponent]`
e.g.
```javascript
const {intexp} = require('intexp');

const decomposed = intexp(4864) // [19, 8]; (4864 == 19 * 256)
```

#### `ldexp(coefficient, exponent)`
Inverse method for convenience `[coefficient, exponent]`
e.g.
```javascript
const {ldexp} = require('intexp');

const int = ldexp(19, 8) // 4864
```
