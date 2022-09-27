/**
 * @jest-environment jsdom
 */

import { is } from '../src/is'
describe('is', () => {
  const num = 123
  const str = '123'
  const func = () => {
    return true
  }
  test('NUMBER', () => {
    expect(is(num, 'Number')).toEqual(true)
  })
  test('str', () => {
    expect(is(str, 'String')).toEqual(true)
  })
  test('func', () => {
    expect(is(func, 'Function')).toEqual(true)
  })
})
