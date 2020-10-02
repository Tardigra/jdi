import React from 'react'
import './styles.css'

export interface ButtonProps extends React.ComponentProps<'button'> {
  className?: string
}

const Button: React.FC<ButtonProps> = function ({className = '', ...rest}) {
  return <button className={'button' + className} {...rest} />
}

export default Button
