import * as z from 'zod'

const addressSchema = z.object({
  name: z.string(),
  address: z.string(),
})

const addressListSchema = z.array(addressSchema)

const optionalString = z.string().optional()

const emailSchema = z.object({
  messageId: optionalString,
  to: addressListSchema,
  replyTo: addressListSchema,
  from: addressListSchema,
  cc: addressListSchema,
  subject: optionalString,
  bodyText: optionalString,
  bodyHtml: optionalString,
  date: optionalString,
  source: optionalString,
})

export type EmailData = z.infer<typeof emailSchema>

/**
 * Checks if the given value is compatible with EmailData.
 */
export const isEmailData = (value: unknown): value is EmailData =>
  emailSchema.check(value)

/**
 * Returns the given value as EmailData if it is valid, otherwise throws an
 * Error.
 * @throws {Error}
 */
export const parseEmailData = (value: unknown): EmailData =>
  emailSchema.parse(value)

/**
 * Asserts that the given value is compatible with EmailData, otherwise throws
 * ane Error.
 * @throws {Error}
 */
export function assertEmailData(value: unknown): asserts value is EmailData {
  emailSchema.parse(value)
}
