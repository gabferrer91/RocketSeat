import {Container} from './styles'
import {Link} from 'react-router-dom'

export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>
            <input type="text" placeholder='Pesquisar pelo título'/>
            <div>
                <div>
                    <Link className='hrefLink' to={'/User'}>
                        <span>Vitor Paiva</span>
                    </Link>
                    <Link to="/SignIn">sair</Link>
                </div>
                <Link to={'/User'}>
                    <img src="https://github.com/vihmalmsteen.png" alt="user img" />
                </Link>
            </div>
        </Container>
    )
}
