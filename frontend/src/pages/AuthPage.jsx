import { useState } from 'react'
import LoginForm from '../Components/LoginForm'
import RegisterForm from '../Components/RegisterForm'
import Navbar from '../Components/Navbar'

const AuthPage = () => {
            const [login, setLogin] = useState(true)

  return (
    <>

            {login ? <LoginForm  state={setLogin} /> : <RegisterForm state={setLogin} />}

    </>
  )
}

export default AuthPage
