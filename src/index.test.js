import { hello, MSG } from './index1'

it('return Hello', () => {
  // Given
  const expected = MSG
  // When
  const result = hello()
  // Then
  expect(result).toBe(expected)
})