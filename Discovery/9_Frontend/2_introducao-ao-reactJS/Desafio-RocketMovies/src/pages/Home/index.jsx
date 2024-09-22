import {Header} from '../../Components/header'
import {Button} from '../../Components/button'
import {FiPlus} from "react-icons/fi";
import {Container} from './styles'
import {MyMoviesContainer} from '../../Components/movieBlock'
import {MovieTag} from '../../Components/tag'
import {SectionTags} from '../../Components/sectionTags'
import {Link} from 'react-router-dom'
import {api} from '../../services/api'
import {useState, useEffect} from 'react'

export function Home() {
    const [titles, setTitles] = useState([])
    const [search, setSearch] = useState('');

    useEffect(() => {
        async function searchMovies() {
            const response = await api.get(`/notes/read?title=${search}`)
            setTitles(response.data)
        }
        searchMovies()
    }, [search])


    return (
        <Container>
            <Header onSearchChange={(e)=>{setSearch(e)}}/>
                <div>
                    <h1>Meus Filmes</h1>
                    <div className='addTitle'>
                        <Link className='linkHref' to='/CreateMovie'>
                            <Button icon={<FiPlus/>} title={'Adicionar filme'}/>
                        </Link>
                    </div>
                </div>
                <div className='MoviesContainerClass'>
                    {
                        titles && titles.map(title => {
                            return <MyMoviesContainer 
                            key={title.id}
                            title={title.title}
                            rating={title.rating}
                            text={title.description}
                            note_id={title.id}                    /*prop definido no movieBlock para ao clicar no titulo o Link de router-dom redirecionar com o note_id no query param e carregar certinho o conteúdo na página MoviePreview*/
                            >
                                <SectionTags>
                                <MovieTag title={'Ação'}/>
                                <MovieTag title={'Ficção'}/>
                                </SectionTags>
                            </MyMoviesContainer>
                            })
                    }
                </div>
        </Container>
    )
}


