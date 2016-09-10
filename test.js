'use strict'

const test = require('tape')
const shuffle = require('.')

test('edge conditions', function (assert) {
  assert.ok(shuffle([0]))
  assert.ok(shuffle([0, 1]))

  assert.end()
})

test('can shuffle Array', function (assert) {
  var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  var mixed = shuffle(arr.slice(0))

  assert.notDeepEqual(arr, mixed)
  assert.deepEqual(arr, mixed.sort())
  assert.end()
})
