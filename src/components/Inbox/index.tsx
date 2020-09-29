import React from 'react'
import Icon from '../Icon'
import Button from '../Button'

const AddThing: React.FC<{}> = () => {
  const [showAddInput, setAddInput] = React.useState(false)

  if (showAddInput) {
    return (
      <form>
        <Button type="button" aria-label="close input" />
        <label htmlFor="add-thing">Add Thing</label>
        <input type="text" id="add-thing" />
        <Button type="submit" aria-label="submit" />
      </form>
    )
  }

  return (
    <Button
      aria-label="add"
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
      <AddThing />
      <Button>Inbox</Button>
      <Button>Process</Button>
    </>
  )
}

export default Inbox
