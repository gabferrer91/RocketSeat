import {Container} from './styles'
import {Link} from 'react-router-dom'
import {useAuth} from '../../hooks/auth'


export function Header() {
    const {signOut} = useAuth()
    
    function handleSignOut() {
        signOut()
    }

    return (
        <Container>
            <h1>RocketMovies</h1>
            <input type="text" placeholder='Pesquisar pelo título'/>
            <div>
                <div>
                    <Link className='hrefLink' to={'/User'}>
                        <span>Vitor Paiva</span>
                    </Link>
                    <a className='signOutLink' onClick={handleSignOut} href='/signin'>sair</a>
                </div>
                <Link to={'/User'}>
                    <img src="https://github.com/vihmalmsteen.png" alt="user img" />
                </Link>
            </div>
        </Container>
    )
}
