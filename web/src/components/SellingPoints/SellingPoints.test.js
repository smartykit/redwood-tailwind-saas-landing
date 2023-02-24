import { render } from '@redwoodjs/testing/web'

import SellingPoints from './SellingPoints'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SellingPoints', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SellingPoints />)
    }).not.toThrow()
  })
})
