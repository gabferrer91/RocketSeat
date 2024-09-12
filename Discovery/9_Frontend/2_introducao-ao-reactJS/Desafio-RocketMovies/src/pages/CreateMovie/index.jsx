import {Container} from './styles'
import {Header} from '../../Components/header'
import {BackBtn} from '../../Components/BackButton'
import {Input} from '../../Components/input'
import {TextArea} from '../../Components/textArea'
import {Button} from '../../Components/button'
import {Marker} from '../../Components/marker'
import {Link} from 'react-router-dom'


export function CreateMovie() {
    return (
        <Container>
            <div className='PageHeader'>
                <Header />
            </div>
              <div className='main'>
                <Link className='hrefLink' to={'/'}>
                    <BackBtn text={'Voltar'}/>
                </Link>
                <h1>Novo Filme</h1>
                <div>
                  <Input type={'text'} placeTitle={'Título'}/>
                  <Input type={'number'} max='5' min='0' placeTitle={'Sua nota (de 0 a 5)'}/>
                </div>
                <TextArea/>
                <p>Marcadores</p>
                <div className='Markers'>
                    <Marker title={'Família'} isactive/>
                    <Marker title={'Ação'} isactive/>
                    <Marker title={'Aventura'} isactive/>
                    <Marker title={'Novo marcador'} />
                </div>
                <div className='saveBtns'>
                    <Button title={'Excluir filme'}/>
                    <Button title={'Salvar alterações'}/>
                </div>
            </div>
        </Container>
    )
}

