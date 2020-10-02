import React from 'react'
import Icon from '../Icon'
import Button from '../Button'
import {InboxItem, saveInboxItem} from '../../services/api'

const AddInboxItem: React.FC<{}> = () => {
  const [showAddInput, setAddInput] = React.useState(false)
  const [itemValue, setItemValue] = React.useState('')

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItemValue(e.target.value)
  }
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newThing: InboxItem = {
      description: itemValue,
    }
    await saveInboxItem(newThing)
    setItemValue('')
  }

  if (showAddInput) {
    return (
      <form onSubmit={handleSubmit}>
        <Button type="button" aria-label="close input" />
        <label htmlFor="thing">Thing</label>
        <input
          type="text"
          id="thing"
          onChange={handleOnChange}
          value={itemValue}
        />
        <Button type="submit" aria-label="submit" />
      </form>
    )
  }

  return (
    <Button
      aria-label="add-item"
      onClick={(event) => {
        event.preventDefault()
        setAddInput(true)
      }}
    >
      <Icon className="add-icon" icon={'add'} />
    </Button>
  )
}

const Inbox: React.FC = () => {
  return (
    <>
      <AddInboxItem />
      <Button>Inbox</Button>
      <Button>Process</Button>
    </>
  )
}

export default Inbox
