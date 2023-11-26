import React from 'react'
import Styles from './login-styles.scss'
import { UnauthenticatedHeader as Header } from '@/presentation/components/unauthenticated-header'
import Footer from '@/presentation/components/footer/footer'
import { Input } from '@/presentation/components/input'
import { FormStatus } from '@/presentation/components/form-status'

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
