var randomBytes = require('randombytes')

module.exports = function (arr) {
  var N = arr.length
  for (var i = 0; i < N - 1; i++) {
    var j = secureRandom(i, N)
    var tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
  }

  return arr
}

function secureRandom (a, b) {
  return (randomBytes(6).readUIntLE(0, 6) % (b - a)) + a
}
