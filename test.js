'use strict'

const test = require('tape')
const shuffle = require('.')

test('edge conditions', function (assert) {
  assert.ok(shuffle([0]))
  assert.ok(shuffle([0, 1]))

  assert.end()
})

test('can shuffle Array', function (assert) {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

  for (var i = 0; i < 1e5; i++) {
    var mixed = shuffle(arr.slice())
    if (equal(mixed, arr)) return assert.end(`Did not shuffle`)
    if (!equal(mixed.sort((a, b) => a - b), arr)) return assert.end('Should be same sorted')
  }

  assert.end()
})

function equal(arr1, arr2) {
  if (arr1.length !== arr2.length) return false
  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }

  return true
}
