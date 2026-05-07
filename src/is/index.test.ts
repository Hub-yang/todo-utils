import { describe, expect, it } from 'vitest'

import { isString } from './index'

describe('type guards', () => {
  it('isString', () => {
    expect(isString('foo')).toBe(true)
    expect(isString(1)).toBe(false)
  })
})
