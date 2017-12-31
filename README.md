# intexp: `frexp` for integers

Similarly to the [libc `frexp` function](https://www.gnu.org/software/libc/manual/html_mono/libc.html#index-frexp), this decomposes a given integer value `x` into an integer coefficient `c` and an integral power of two `n` such that
<code>c * 2<sup>n</sup> = x</code>

`ldexp` is also provided as an inverse function for convenience.

### Methods

#### `intexp(integer)`
Returns `[coefficient, exponent]`
e.g.
```javascript
const {intexp} = require('intexp');

const decomposed = intexp(4864) // [19, 8]
```

#### `ldexp(coefficient, exponent)`
Returns integer given coefficient and exponent.
e.g.
```javascript
const {ldexp} = require('intexp');

const int = ldexp(19, 8) // 4864
```
