import {Header} from '../../Components/header'
import {Button} from '../../Components/button'
import {FiPlus} from "react-icons/fi";
import {Container} from './styles'
import {MyMoviesContainer} from '../../Components/movieBlock'
import {MovieTag} from '../../Components/tag'
import {SectionTags} from '../../Components/sectionTags'


export function Home() {
    return (
        <Container>
            <Header/>
                <div>
                    <h1>Meus Filmes</h1>
                    <div className='addTitle'>
                        <Button icon={<FiPlus/>} title={'Adicionar filme'}/>
                    </div>
                </div>
                <div className='MoviesContainerClass'>
                    <MyMoviesContainer 
                        title={'Interestellar'}
                        rating={5}
                        text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, explicabo magnam. Necessitatibus, tempore. Laudantium voluptatum recusandae quam quasi repudiandae architecto minus dolores illum praesentium reiciendis. Soluta unde natus quisquam blanditiis!'}
                        >
                            <SectionTags>
                              <MovieTag title={'Ação'}/>
                              <MovieTag title={'Ficção'}/>
                            </SectionTags>
                        </MyMoviesContainer>
                    <MyMoviesContainer 
                        title={'Hellraiser 8'}
                        rating={2}
                        text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, explicabo magnam. Necessitatibus, tempore. Laudantium voluptatum recusandae quam quasi repudiandae architecto minus dolores illum praesentium reiciendis. Soluta unde natus quisquam blanditiis!'}
                    >
                        <SectionTags>
                          <MovieTag title={'Terror'}/>
                          <MovieTag title={'Suspense'}/>
                          <MovieTag title={'Sobrenatural'}/>
                        </SectionTags>
                    </MyMoviesContainer>
                    <MyMoviesContainer
                        title={'Titanic'}
                        rating={4}
                        text={'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, explicabo magnam. Necessitatibus, tempore. Laudantium voluptatum recusandae quam quasi repudiandae architecto minus dolores illum praesentium reiciendis. Soluta unde natus quisquam blanditiis!'}
                    >
                        <SectionTags>
                          <MovieTag title={'Clássico'}/>
                          <MovieTag title={'Drama'}/>
                          <MovieTag title={'Época'}/>
                        </SectionTags>
                    </MyMoviesContainer>
                </div>
        </Container>
    )
}
