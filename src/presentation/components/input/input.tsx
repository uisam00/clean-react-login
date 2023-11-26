import React from 'react'
import Styles from './input-styles.scss'

type Props = React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = (props) => {
  const enabledInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  return (
    <div className={Styles.inputWrap}>
      <input {...props} onFocus={enabledInput} />
      <span className={Styles.status}>🔴</span>
    </div>
  )
}

export default Input
