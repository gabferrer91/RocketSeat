import {useState} from 'react'
import {Container, Form} from './styles'
import {Input} from '../../components/input'
import {Button} from '../../components/button'
import { FiUser, FiMail, FiLock } from 'react-icons/fi'
import {Background} from './styles'
import {Link, useNavigate} from 'react-router-dom'

import {api} from '../../services/api'

export function SignUp() {
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  function handleSignUp() {
    console.log(name, email, password)

    if(!name || !email || !password) {
      return alert("Todos os campos devem ser preenchidos.")
    }

    api.post("/users", {name, email, password})
    .then(() => {
      alert("Cadastro realizado com sucesso!")
      navigate('/')
    })
    .catch(error =>{
      if (error.response){
        alert(error.response.data.message)
      } else {
        alert('Não foi possível cadastrar.')
      }
    })
  }

    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>
                    Aplicação para salvar e gerenciar seus links úteis.
                </p>
                <h2>Crie sua conta</h2>

                <Input
                  placeholder="Nome"
                  type="text"
                  icon={FiUser}
                  onChange={e => setName(e.target.value)}
                />
                <Input
                  placeholder="E-mail"
                  type="text"
                  icon={FiMail}
                  onChange={e => setEmail(e.target.value)}
                />
                <Input
                  placeholder="Senha"
                  type="password"
                  icon={FiLock}
                  onChange={e => setPassword(e.target.value)}
                />
                
                <Button innerText="Cadastrar" onClick={handleSignUp}/>

                <Link to='/'>Voltar para o login</Link>

            </Form>
            <Background/>
        </Container>
    )
}

