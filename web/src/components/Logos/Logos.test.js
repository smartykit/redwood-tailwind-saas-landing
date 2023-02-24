import { render } from '@redwoodjs/testing/web'

import Logos from './Logos'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Logos', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Logos />)
    }).not.toThrow()
  })
})
