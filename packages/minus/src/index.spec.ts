import { minus } from './index'

it('should return the difference of two numbers', () => {
  expect(minus(1, 2)).toBe(-1)
  expect(minus(2, 1)).toBe(1)
  expect(minus(2, 2)).toBe(0)
})
