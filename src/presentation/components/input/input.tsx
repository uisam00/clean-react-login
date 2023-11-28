import React, { useContext } from 'react'
import Styles from './input-styles.scss'
import Context from '@/presentation/contexts/form/form-context'

type Props = React.InputHTMLAttributes<HTMLInputElement>

const Input: React.FC<Props> = (props) => {
  const { errorState } = useContext(Context)
  const error = errorState[props.name]

  const enabledInput = (event: React.FocusEvent<HTMLInputElement>): void => {
    event.target.readOnly = false
  }

  const getStatus = (): string => {
    return '🔴'
  }

  const getTitle = (): string => {
    return error
  }

  return (
    <div className={Styles.inputWrap}>
      <input {...props} onFocus={enabledInput} />
      <span data-testid={`${props.name}-status`} title={getTitle()} className={Styles.status}>
        {getStatus()}
      </span>
    </div>
  )
}

export default Input
