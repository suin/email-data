# @suin/email-data

A simple email data representation for TypeScript.

This component provides a very simple reusable interface that represents an email.

The interface was designed for the use case that treats received emails from POP3, SendGrid Inbound Parse, Gmail API and so on.

## Features

- Abstract email data type `EmailData`
- Type guard function
- Validation function
- Assertion function

### Missing Features

The following features hasn't been implemented yet:

- Some models:
  - BCC header
  - Attachments

## Installation

```bash
yarn add @suin/email-data
# or
npm install @suin/email-data
```

## Usages

### Declaring the `EmailData` value

```typescript
import { EmailData } from '@suin/email-data'

const email: EmailData = {
  from: [{ name: 'Alice', address: 'alice@example.com' }],
  to: [{ name: 'Bob', address: 'bob@example.com' }],
  cc: [],
  replyTo: [],
  subject: 'Hi',
  bodyText: 'Hello',
  bodyHtml: '<p>Hello</p>',
}
```

### Using the type guard function

```typescript
import { isEmailData } from '@suin/email-data'

const email: unknown = {
  /* ... */
}

if (isEmailData(email)) {
  console.log(email.subject)
} else {
  console.log('The value is incompatible with EmailData')
}
```

### Using the validation function

```typescript
import { parseEmailData } from '@suin/email-data'

try {
  const email = parseEmailData(JSON.parse('{}'))
  console.log('The JSON value is compatible with EmailData', email)
} catch (error) {
  console.log(error)
}
```

### Using the assertion function

```typescript
import { assertEmailData } from '@suin/email-data'

try {
  const email: unknown = JSON.parse('{}')
  assertEmailData(email)
  console.log('The JSON value is compatible with EmailData', email)
} catch (error) {
  console.log(error)
}
```

## API Reference

https://suin.github.io/email-data/
