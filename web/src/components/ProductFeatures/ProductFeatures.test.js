import { render } from '@redwoodjs/testing/web'

import ProductFeatures from './ProductFeatures'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ProductFeatures', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProductFeatures />)
    }).not.toThrow()
  })
})
