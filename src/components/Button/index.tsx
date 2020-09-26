import React from 'react'

const Button: React.FC<{className?: string}> = function ({
  children,
  className,
}) {
  return <button className={'button' + className}>{children}</button>
}

export default Button
