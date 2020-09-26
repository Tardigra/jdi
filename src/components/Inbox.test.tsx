import React from 'react'
import Inbox from './Inbox'
import {render} from '@testing-library/react'

describe('Inbox component: ', () => {
  it('should render add, inbox and process buttons', () => {
    const {getByText} = render(<Inbox />)

    getByText(/add/i)
    getByText(/inbox/i)
    getByText(/process/i)
  })
})
