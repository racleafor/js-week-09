const fs = require('fs')
const path = require('path')
const {
  countMyArgs,
  head1,
  head2,
  head3,
  howMany,
  mySimpleArray,
  tail1,
  tail2,
} = require('../index')

/* eslint-disable */

const code = fs.readFileSync(path.join('index.js'), { encoding: 'utf8' })
const head1_code = code.match(/function head1\((.*?)\) {([\s\S]+?)}/)
const head2_code = code.match(/function head2\((.*?)\) {([\s\S]+?)}/)
const head1_uses = head1_code[1]
  ? head1_code[2].includes(`${head1_code[1]}[0]`) ? 'postfix' : 'destructuring'
  : ''
const head2_uses = head2_code[1]
  ? head2_code[2].includes(`${head2_code[1]}[0]`) ? 'postfix' : 'destructuring'
  : ''

test('returns an array', () => {
  const result = mySimpleArray()
  expect(Array.isArray(result)).toBeTruthy()
})

test('returns the first item in an array', () => {
  expect(head1([1, 2, 3])).toBe(1)
  expect(head1(['four', 'five', 'six'])).toBe('four')
})

test('returns the first item in a different way', () => {
  expect(head2([1, 2, 3])).toBe(1)
  expect(head2(['four', 'five', 'six'])).toBe('four')
  expect(head2_uses).not.toBe(head1_uses)
})

test('returns all but the first item of an array', () => {
  const result = tail1([1, 2, 3])
  const expected = [2, 3]
  expect(result).toHaveLength(expected.length)
  expect(result).toEqual(expect.arrayContaining(expected))
  expect(result).not.toContain(1)
})

test('returns the first argument', () => {
  const yay = [1, 2, 3]
  expect(head3(yay, 'what', 1, 2, 3)).toBe(yay)
  expect(head3(10)).toBe(10)
  expect(head3('welp', 'ok')).toBe('welp')
})

test('counts the arguments', () => {
  expect(countMyArgs(1, 1)).toBe(2)
  expect(countMyArgs('help', 'me', 'I', 'need', 'it')).toBe(5)
  expect(countMyArgs()).toBe(0)
})

test('returns all but the first argument as an array', () => {
  const result = tail2(1, 2, 3)
  const expected = [2, 3]
  expect(result).toHaveLength(expected.length)
  expect(result).toEqual(expect.arrayContaining(expected))
  expect(result).not.toContain(1)
})

test('returns the length of an array or "Empty"', () => {
  expect(howMany([1, 2, 3])).toBe(3)
  expect(howMany(['four', 'five', 'six'])).toBe(3)
  expect(howMany([])).toBe('Empty')
  expect(howMany([])).not.toBe(0)
})
