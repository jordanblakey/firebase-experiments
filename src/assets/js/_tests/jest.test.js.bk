/**
 * @jest-environment node
 */
// This lets Jest know whether to use node or jsdom as the environment

////////////////////////////////////////////////////////////////////////////////
// JEST: Javascript Testing Platform
// https://facebook.github.io/jest/
////////////////////////////////////////////////////////////////////////////////

// MATCHERS ////////////////////////////////////////////////////////////////////
// https://facebook.github.io/jest/docs/en/using-matchers.html

// Use toBe() to test an exact value
test('two plus two is four', () => {
  expect(2 + 2).toBe(4)
})

// EQUALITY ////////////////////////////////////////////////////////////////////
test('different arrays are not equal', () => {
  expect([1, 2, 3]).not.toBe([3, 2, 1])
})

test('different objects are not equal', () => {
  expect({ o: 1, t: 2 }).not.toBe({ o: 2, t: 3 })
})

// Use toEqual() to test individual values in an array and return a diff
test('object assignment', () => {
  const data = { one: 1 }
  data.two = 2
  expect(data).toEqual({ one: 1, two: 2 })
})

// TRUTHINESS //////////////////////////////////////////////////////////////////
test('null', () => {
  const n = null
  expect(n).toBeNull()
  expect(n).toBeDefined()
  expect(n).not.toBeUndefined()
  expect(n).not.toBeTruthy()
  expect(n).toBeFalsy()
})

// Note you can have multiple 'assertions' in a test
test('zero', () => {
  const z = 0
  expect(z).not.toBeNull()
  expect(z).toBeDefined()
  expect(z).not.toBeUndefined()
  expect(z).not.toBeTruthy()
  expect(z).toBeFalsy()
})

// COMPARISON //////////////////////////////////////////////////////////////////
test('two plus two', () => {
  const value = 2 + 2
  expect(value).toBeGreaterThan(3)
  expect(value).toBeGreaterThanOrEqual(3.5)
  expect(value).toBeLessThan(5)
  expect(value).toBeLessThanOrEqual(4.5)

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4)
  expect(value).toEqual(4)
})

// Floats and rounding errors
test('adding floating point numbers', () => {
  const value = 0.1 + 0.2
  // expect(value).toBe(0.3) //This won't work because of rounding error
  expect(value).toBeCloseTo(0.3) // This works.
})

// STRINGS & REGEX /////////////////////////////////////////////////////////////
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/)
})

test('but there is a "stop" in Christoph', () => {
  expect('Christoph').toMatch(/stop/)
})

// ARRAY CONTENTS  /////////////////////////////////////////////////////////////
const shoppingList = [
  'diapers',
  'kleenex',
  'trash bags',
  'paper towels',
  'beer'
]

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer')
})

// EXCEPTION TYPE //////////////////////////////////////////////////////////////

function compileAndroidCode() {
  throw new TypeError('you are using the wrong JDK')
}

test('compiling android goes as expected', () => {
  expect(compileAndroidCode).toThrow()
  expect(compileAndroidCode).toThrow(TypeError)

  // You can also use the exact error message or a regexp
  expect(compileAndroidCode).toThrow('you are using the wrong JDK')
  expect(compileAndroidCode).toThrow(/JDK/)
})

// ASYNCHRONOUS TESTS //////////////////////////////////////////////////////////
// https://facebook.github.io/jest/docs/en/asynchronous.html

// USING A CALLBACK FUNCTION ///////////////////////////////////////////////////
function foo(bar, cb) {
  cb(bar)
}

test('the callback data is peanut butter', done => {
  function callback(data) {
    expect(data).toBe('peanut butter')
    done()
  }

  foo('peanut butter', callback)
})

// USING PROMISES VIA AXIOS ////////////////////////////////////////////////////
// import axios from 'axios'
// test('Successfully fetch GitHub user data', () => {
//   expect.assertions(1)
//   let user = 'jordanblakey'
//   return axios
//     .get(`https://api.github.com/users/${user}`)
//     .then(function(res) {
//       expect(res.data.login).toBe(user)
//     })
//     .catch(function(err) {
//       console.error(err)
//     })
// })

// test('Expect the request promise to resolve', () => {
//   expect.assertions(1)
//   let user = 'jordanblakey'
//   return expect(
//     axios.get(`https://api.github.com/users/${user}`).then(function(res) {
//       return res.data.login
//     })
//   ).resolves.toBe(user)
// })

// test('Expect the requst promise to reject', () => {
//   expect.assertions(1)
//   let user = 'jordanblakey'
//   return expect(axios.get(`https://ap.gitub.com/uers/${user}`).then(function(res){
//     return res.data.login
//   }).catch(function(err){
//     console.log(err.response.status)
//     return err.response.status
//   })).rejects.toMatch(404);
// })
