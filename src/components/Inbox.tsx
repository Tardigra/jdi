import React from 'react'
import Icon from './Icon'
import Button from './Button'

const Inbox: React.FC<{}> = () => {
  return (
    <>
      <Button>
        <Icon icon={'add'} />
      </Button>
      <Button>Inbox</Button>
      <Button>Process</Button>
    </>
  )
}

export default Inbox
