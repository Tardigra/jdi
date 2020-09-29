import React from 'react'
import path, {IconType} from '../../assets/icons'
import './styles.css'

const defaultStyles = {display: 'inline-block', verticalAlign: 'middle'}

const Index: React.FC<IconProps> = ({
  icon,
  size = 16,
  viewBox = '0 0 24 24',
  style = {},
  className = '',
}) => {
  const styles = {...defaultStyles, ...style}

  return (
    <svg
      className={className}
      viewBox={viewBox}
      style={styles}
      width={`${size}px`}
      height={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path d={path[icon]} />
    </svg>
  )
}

interface IconProps {
  size?: number
  color?: string
  icon: IconType
  className?: string
  style?: React.CSSProperties
  viewBox?: string
}

export default Index
