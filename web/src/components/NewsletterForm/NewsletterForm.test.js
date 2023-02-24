import { render } from '@redwoodjs/testing/web'

import NewsletterForm from './NewsletterForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewsletterForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewsletterForm />)
    }).not.toThrow()
  })
})
