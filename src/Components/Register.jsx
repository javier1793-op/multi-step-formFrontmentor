import { useState } from 'react'
import '../scss/registre.scss'
import { Nav } from './Nav'
import PersonalInfo from './PersonalInfo'

const Register = () => {
  const [active, setActive] = useState(1)
  return (
    <>
        <div className="contentRegister">
            <section className="nav">
                <Nav
                  active={active}
                />
            </section>
            <section className="form">
                <PersonalInfo/>
            </section>
        </div>
    </>
  )
}

export default Register