import React from 'react'
import Inbox from './index'
import {render, screen, fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Inbox component: ', () => {
  it('should render add, inbox and process buttons', () => {
    render(<Inbox />)

    expect(screen.getByRole('button', {name: /add/i})).toBeInTheDocument()
    expect(screen.getByRole('button', {name: /inbox/i})).toBeInTheDocument()
    expect(screen.getByRole('button', {name: /process/i})).toBeInTheDocument()
  })

  it('should render a text input field, a submit button and a close button on add-button click', () => {
    render(<Inbox />)

    fireEvent.click(screen.getByRole('button', {name: /add/i}))

    expect(screen.queryByTestId(/add/i)).not.toBeInTheDocument()
    screen.getByRole('textbox', {name: /thing/i})
    screen.getByRole('button', {name: /submit/i})
  })
})
