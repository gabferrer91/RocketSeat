import {Container} from './styles'


export function Header() {
    return (
        <Container>
            <h1>RocketMovies</h1>
            <input type="text" placeholder='Pesquisar pelo título'/>
            <div>
                <div>
                    <span>Vitor Paiva</span>
                    <a href="/">sair</a>
                </div>
                <img src="https://github.com/vihmalmsteen.png" alt="user img" />
            </div>
        </Container>
    )
}
