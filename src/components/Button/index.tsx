import React from 'react'
import './styles.css'

export interface ButtonProps extends React.ComponentProps<'button'> {
  testId?: string
  className?: string
}

const Button: React.FC<ButtonProps> = function ({
  testId,
  className = '',
  ...rest
}) {
  return (
    <button className={'button' + className} data-testid={testId} {...rest} />
  )
}

export default Button
