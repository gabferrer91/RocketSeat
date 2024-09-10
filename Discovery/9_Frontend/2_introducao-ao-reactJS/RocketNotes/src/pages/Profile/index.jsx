import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'
import {Container, Form, Avatar} from './styles'
import {Input} from '../../components/input'
import {Button} from '../../components/button'
import { Link } from 'react-router-dom'

export function Profile() {
    return (
        <Container>
            <header>
                <Link to={'/'}>
                    <FiArrowLeft/>
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/vihmalmsteen.png" alt="User img" />
                    <label htmlFor="avatar"><FiCamera/></label>
                    
                    <input type="file" id="avatar"/>
                </Avatar>

                <Input type="text" placeholder="Nome" icon={FiUser}/>
                <Input type="text" placeholder="E-mail" icon={FiMail}/>
                <Input type="password" placeholder="Senha atual" icon={FiLock}/>
                <Input type="password" placeholder="Nova senha" icon={FiLock}/>

                <Button innerText="Salvar"/>
            </Form>
        </Container>
    )
}

