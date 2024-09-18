import { useState } from "react"
import { Container, Form } from "./styles"
import {Header} from '../../components/header'
import {Input} from '../../components/input'
import {TextArea} from '../../components/TextArea'
import {NoteItem} from '../../components/NoteItem'
import {Section} from '../../components/Section'
import {Button} from '../../components/button'
import { Link } from "react-router-dom"
import {api} from '../../services/api'
import { useNavigate } from "react-router-dom"


export function New() {
    
    // >>>> title
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    async function handleNewNote(){
        if(!title){return alert('Digite o título da nota.')}
        if(newLink){return alert('Link deixado por adicionar.')}
        if(newTag){return alert('Tag deixada por adicionar.')}

        api.post('/notes', {
            title,
            description,
            tags,
            links
        })

        alert('Nota criada com sucesso!')
        navigate('/')
    }
    // <<<< title



    // >>>> links
    const [links, setLinks] = useState([])
    const [newLink, setNewLink] = useState("")

    function handleAddLink(){
        setLinks(prevState => [...prevState, newLink])
        setNewLink('')
    }
    
    function handleRemoveLink(deleted){
        setLinks(prevState => prevState.filter(link => link!== deleted))
    }
    // <<<< links
    

    
    // >>>> tags
    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    function handleAddTag(){
        setTags(prevState => [...prevState, newTag])
        setNewTag('')
    }
    
    function handleRemoveTag(deleted){
        setTags(prevState => prevState.filter(tag => tag!== deleted))
    }
    // <<<< tags


    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to={'/'}>voltar</Link>
                    </header>
                    <Input 
                    placeholder="título"
                    onChange={e => setTitle(e.target.value)}
                    />
                    <TextArea 
                    placeholder="Observações"
                    onChange={e => setDescription(e.target.value)}
                    />

                    <Section title="Links úteis">
                        {
                            links.map((link, index) => {
                                return <NoteItem 
                                    key= {String(index)}
                                    value={link}
                                    onClick={() => {
                                        return handleRemoveLink(link)
                                    }}
                                />
                            })
                        }
                        <NoteItem 
                            isNew 
                            placeholder="Novo link" 
                            value={newLink} 
                            onChange={e => setNewLink(e.target.value)}
                            onClick={handleAddLink}
                        />
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                            {
                                tags.map((tag, index) => {
                                    return <NoteItem 
                                    key={String(index)}               // sempre que um componente for gerado a partir de listas, uma key textual deve ser designada (padrão do React)
                                    value={tag}
                                    onClick={()=>handleRemoveTag(tag)}
                                    />
                                })
                            }
                        <NoteItem 
                        placeholder="Nova tag" 
                        isNew
                        onChange={e => setNewTag(e.target.value)}
                        value={newTag}
                        onClick={handleAddTag}
                        />
                        </div>
                    </Section>
                    <Button 
                    innerText="Salvar"
                    onClick={handleNewNote}
                    />
                </Form>
            </main>
        </Container>
    )
}