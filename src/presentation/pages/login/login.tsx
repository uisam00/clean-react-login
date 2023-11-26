import React from 'react'
import Styles from './login-styles.scss'
import { UnauthenticatedHeader as Header, Footer, Input, FormStatus } from '@/presentation/components'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite seu e-mail" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <button className={Styles.submit} type="submit">
          Entrar
        </button>
        <a className={Styles.link} href="https://www.google.com/">
          Criar conta
        </a>
        <FormStatus />
      </form>
      <Footer />
    </div>
  )
}

export default Login
