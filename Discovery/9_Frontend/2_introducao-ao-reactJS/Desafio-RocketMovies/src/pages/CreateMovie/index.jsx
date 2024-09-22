import {Container} from './styles'
import {Header} from '../../Components/header'
import {BackBtn} from '../../Components/BackButton'
import {Input} from '../../Components/input'
import {TextArea} from '../../Components/textArea'
import {Button} from '../../Components/button'
import {Marker} from '../../Components/marker'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {api} from '../../services/api'

export function CreateMovie() {
    const [name, setName] = useState('')
    const [score, setScore] = useState(0)
    const [observation, setObservation] = useState('')

    function handleNewMovie() {
        if(name === '' || score == '' || observation === '') {
            return alert('Preencha todos os campos')
        }

        try {
            api.post('/notes/create', {
                title: name, 
                rating: score,
                description: observation
            })
            alert('Nota de filme criada com sucesso!')
        } catch (error) {
            if(error.response) {
                return alert(error.response)
            }
            console.log(error)
            alert('Ocorreu um erro. Tente novamente mais tarde.')
        }
    }

    function handleRemoveMovie(){
        alert('Removido com sucesso!')
    }

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
                  <Input type={'text'} placeTitle={'Título'} 
                  onChange={(e)=>{setName(e.target.value)}}
                  />
                  <Input type={'number'} max='5' min='0' placeTitle={'Sua nota (de 0 a 5)'}
                  onChange={(e)=>{setScore(e.target.value)}}
                  />
                </div>
                <TextArea
                    value={observation}
                    onChange={(e) => { setObservation(e.target.value) }}
                />
                <p>Marcadores</p>
                <div className='Markers'>
                    <Marker title={'Família'} isactive/>
                    <Marker title={'Ação'} isactive/>
                    <Marker title={'Aventura'} isactive/>
                    <Marker title={'Novo marcador'}/>
                </div>
                <div className='saveBtns'>
                    <Button title={'Excluir filme'}
                    onClick={handleRemoveMovie}
                    />
                    <Button title={'Salvar alterações'}
                    onClick={handleNewMovie}
                    />
                </div>
            </div>
        </Container>
    )
}

