import {Container, Form} from './styles'
import {Input} from '../../components/input'
import {Button} from '../../components/button'
import {FiMail, FiLock} from 'react-icons/fi'   // FiLogIn
import {Background} from './styles'
import {Link} from 'react-router-dom'


export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>Rocket Notes</h1>
                <p>
                    Aplicação para salvar e gerenciar seus links úteis.
                </p>
                <h2>Faça seu login</h2>

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
                
                <Button innerText="Entrar"/>

                <Link to={'/register'}>Criar conta</Link>

            </Form>
            <Background/>
        </Container>
    )
}

