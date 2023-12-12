import { useState } from 'react'
import '../scss/registre.scss'
import { Nav } from './Nav'

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
                form
            </section>
        </div>
    </>
  )
}

export default Register