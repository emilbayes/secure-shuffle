# `secure-shuffle`

> Shuffle an array using `secure-random-uniform` as the RNG

## Install

```sh
npm install secure-shuffle
```

## Usage

Note that this module **mutates** the passed array, as you can always `.slice(0)` to get a "cheap" copy:

```js
const sshuffle = require('secure-shuffle')

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const sarr = sshuffle(arr.slice(0)) // sarr is now a shuffled copy of arr

sshuffle(arr) // arr is now shuffled
```

## API

###`secureShuffle(arr)`

Takes an array-like structure (eg. Buffer) and shuffles it.
Note that the original will be mutated for performance reasons.
You might want to copy the structure before passing it, depending on your use-case.

As a convenience, the passed structure will be returned.

## License

[ISC](LICENSE.md)
