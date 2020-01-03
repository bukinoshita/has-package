import hasPackage from '../source'

test('has package', () => {
  expect(hasPackage('fixtures/bar')).toBe(true)
  expect(hasPackage('fixtures/foo')).toBe(false)
  expect(hasPackage()).toBe(true)
})
