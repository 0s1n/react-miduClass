const palindromo = (string) => {
  if (typeof string === 'undefined') return

  return string
    .split('')
    .reverse()
    .join('')
}

const average = array => {
  if (array === undefined) return null
  if (array.length === 0) return 0
  let sum = 0
  array.forEach(num => { sum += num })
  return sum / array.length
}

module.exports = {
  palindromo,
  average
}
