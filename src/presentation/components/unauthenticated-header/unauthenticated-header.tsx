import React, { memo } from 'react'
import Styles from './unauthenticated-header-styles.scss'
import { Logo } from '@/presentation/components'

const UnauthenticatedHeader: React.FC = () => {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>React Clean</h1>
    </header>
  )
}

export default memo(UnauthenticatedHeader)
