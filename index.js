'use strict'
var secureRandom = require('secure-random-uniform')

module.exports = function (arr) {
  var N = arr.length
  for (var i = 0; i < N - 1; i++) {
    var j = secureRandom(N - i) + i
    var tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }

  return arr
}
