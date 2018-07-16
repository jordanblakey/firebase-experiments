////////////////////////////////////////////////////////////////////////////////
// JASMINE CHECK: Generative Property Testing for Jasmine & Jest
// https://www.npmjs.com/package/jasmine-check
////////////////////////////////////////////////////////////////////////////////

require('jasmine-check').install()

function sum(a, b) {
  return a + b
}

describe('Generative property testing examples with jasmine-check', () => {
  check.it(
    'addition is commutative',
    { times: 10 },
    gen.int,
    gen.int,
    (x, y) => {
      expect(sum(x, y)).toBe(y + x)
    }
  )

  check.it(
    'accepts an int and a string',
    { times: 10 },
    gen.int,
    gen.string,
    (x, y) => {
      expect(x).toEqual(expect.any(Number))
      expect(y).toEqual(expect.any(String))
    }
  )

  check.it('runs 10 times', { times: 10 }, gen.sPosInt, x => {
    expect(x).toBeGreaterThan(0)
  })
})
