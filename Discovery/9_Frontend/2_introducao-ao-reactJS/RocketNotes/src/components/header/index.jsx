import { Container, Profile, Logout } from "./styles"
import {RiShutDownLine} from 'react-icons/ri'

export function Header(){
    return (
    <Container>
        <Profile to='/profile'>
            <img src="https://via.placeholder.com/100x100" alt="img do user" />
            <div>
              <span>Bem vindo!</span>
              <strong>João sem Braço</strong>
            </div>
        </Profile>

        <Logout>
            <RiShutDownLine/>
        </Logout>
    </Container>
    )
}
