import {Container, Form} from './styles'
import {Input} from '../../components/input'
import {Button} from '../../components/button'
import { FiUser, FiMail, FiLock } from 'react-icons/fi'
import {Background} from './styles'
import {Link} from 'react-router-dom'

export function SignUp() {
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
                />
                <Input
                  placeholder="E-mail"
                  type="text"
                  icon={FiMail}
                />
                <Input
                  placeholder="Senha"
                  type="password"
                  icon={FiLock}
                />
                
                <Button innerText="Cadastrar"/>

                <Link to='/'>Voltar para o login</Link>

            </Form>
            <Background/>
        </Container>
    )
}

