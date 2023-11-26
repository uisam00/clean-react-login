import React from 'react'
import Styles from './form-status-styles.scss'
import Spinner from '../spinner/spinner'

const FormStatus: React.FC = () => {
  return (
    <div className={Styles.errorWrap}>
      <Spinner />
      <span className={Styles.error}>Erro</span>
    </div>
  )
}

export default FormStatus
