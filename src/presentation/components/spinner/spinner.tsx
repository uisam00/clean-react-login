import React from 'react'
import Styles from './spinner-styles.scss'

type Props = React.HTMLAttributes<HTMLDivElement>

const Spinner: React.FC<Props> = ({ className, ...rest }) => {
  return (
    <div data-testid="spinner" className={[Styles.spinner, className].join(' ')} {...rest}>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

export default Spinner
