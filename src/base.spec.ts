import { it, expect } from 'vitest'

function sum(a: number, b: number): number {
  return a + b
}

it('sum', () => {
  expect(sum(1, 2)).toBe(3)
})
