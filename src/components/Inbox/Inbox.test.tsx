import React from 'react'
import Inbox from './index'
import {fireEvent, render, screen, wait} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import {saveInboxItem} from '../../services/api'
import {mocked} from 'ts-jest/utils'

jest.mock('../../services/api')

describe('Inbox component: ', () => {
  it('should render add, inbox and process buttons', () => {
    render(<Inbox />)

    expect(screen.getByRole('button', {name: /add-item/i})).toBeInTheDocument()
    expect(screen.getByRole('button', {name: /inbox/i})).toBeInTheDocument()
    expect(screen.getByRole('button', {name: /process/i})).toBeInTheDocument()
  })

  describe('on add-inbox-item-button click', () => {
    beforeEach(() => {
      render(<Inbox />)

      fireEvent.click(screen.getByRole('button', {name: /add-item/i}))
    })

    it('should render a text input field, a submit button and a close button ', () => {
      expect(
        screen.queryByRole('button', {name: /add-item/i})
      ).not.toBeInTheDocument()
      expect(screen.getByRole('textbox', {name: /thing/i})).toBeInTheDocument()
      expect(screen.getByRole('button', {name: /submit/i})).toBeInTheDocument()
    })

    it('should save new item on click', async () => {
      let newThing = 'new thing'
      mocked(saveInboxItem).mockImplementation()

      userEvent.type(screen.getByRole('textbox', {name: /thing/i}), newThing)

      userEvent.click(screen.getByRole('button', {name: /submit/i}))

      await wait(() => {
        expect(mocked(saveInboxItem)).toHaveBeenCalledWith({
          description: newThing,
        })
      })
      expect(mocked(saveInboxItem)).toHaveBeenCalledTimes(1)
    })
  })
})
