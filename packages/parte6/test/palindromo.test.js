const { palindromo } = require('../utils/for_testing')

test.skip('palindrome of 0s1n', () => {
  const result = palindromo('0s1n')

  expect(result).toBe('n1s0')
})

test.skip('palindromo of empty string', () => {
  const result = palindromo('')

  expect(result).toBe('')
})

test.skip('palindromo of undefined', () => {
  const result = palindromo()

  expect(result).toBeUndefined()
})
