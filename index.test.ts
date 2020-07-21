import { assertEmailData, EmailData, isEmailData, parseEmailData } from '.'

const validEmailData: EmailData = {
  messageId: 'dummy-message-id',
  to: [],
  replyTo: [],
  from: [],
  cc: [],
  subject: 'subject',
  bodyText: 'body text',
  bodyHtml: 'body html',
  date: '2000-01-02T03:04:05+09:00',
}

const invalidEmailData: unknown = undefined

describe('isEmailData', () => {
  it('returns true if the given value is valid', () => {
    expect(isEmailData(validEmailData)).toBe(true)
  })
  it('returns false if the given value is invalid', () => {
    expect(isEmailData(invalidEmailData)).toBe(false)
  })
})

describe('parseEmailData', () => {
  it('returns the given value if it is compatible with EmailData', () => {
    expect(parseEmailData(validEmailData)).toBe(validEmailData)
  })
  it('throws an Error if the given value is invalid', () => {
    expect(() => parseEmailData(invalidEmailData)).toThrowError()
  })
})

describe('assertEmailData', () => {
  it('does nothing if the given value is valid', () => {
    assertEmailData(validEmailData)
  })
  it('throws an Error if the given value is invalid', () => {
    expect(() => assertEmailData(invalidEmailData)).toThrowError()
  })
})
