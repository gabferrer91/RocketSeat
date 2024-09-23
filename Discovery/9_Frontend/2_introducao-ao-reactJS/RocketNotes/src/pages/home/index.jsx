import { useState, useEffect } from 'react';
import { FiPlus } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

import { Container, Brand, Menu, Search, Content, NewNote} from './styles';

import { Header } from '../../components/header';
import { Input } from '../../components/input';
import { ButtonText } from '../../components/buttonText';
import { Section } from '../../components/Section'
import { Notes } from '../../components/notes'
import { api } from '../../services/api';


export function Home() {
    const [search, setSearch] = useState("");
    const [tags, setTags] = useState([]);
    const [tagSelected, setTagSelected] = useState([])
    const [notes, setNotes] = useState([])
    
    
    function handleTagSelected(tagName){
        if(tagName === "all"){
            return setTagSelected([]);
        }

        const alredySelected = tagSelected.includes(tagName)

        if(alredySelected){
            const filteredSelected = tagSelected.filter(tag => tag !== tagName)
            setTagSelected(filteredSelected)
        }else{
            setTagSelected(prevState => [...prevState, tagName])
        }
        
    }

    const navigate = useNavigate()

    function handleDetails(id){
        navigate(`details/${id}`);
    }
    
    useEffect(() => {
        async function fetchTags(){
           const response = await api.get("/tags")
            setTags(response.data);
        }

        fetchTags();
    }, []);

    useEffect(() => {
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${tagSelected}`);
            setNotes(response.data)
        }

        fetchNotes();
    }, [tagSelected, search])

    return(
        <Container>
            <Brand>
                <h1>RocketNotes</h1>
            </Brand>
            <Header/>

            <Menu>
                <li>
                    <ButtonText title="Todos" 
                    onClick={() => handleTagSelected("all")}
                    isActive={tagSelected.length === 0}
                    />
                </li>

                {
                    tags && tags.map(tag => (
                    <li key={String(tag.id)}>
                        <ButtonText 
                        title={tag.name}
                        onClick={()=>handleTagSelected(tag.name)}
                        isActive={tagSelected.includes(tag.name)}
                        />
                        </li>
                    ))
                }
                
            </Menu>

            <Search>
                <Input placeholder="Pesquisar pelo Título"
                    onChange={e => setSearch(e.target.value)}
                />

            </Search>
        
            <Content>
                <Section title='Minhas notas'> 
                {
                    notes.map(note =>(
                    <Notes
                    key={String(note.id)}
                    data={note}
                    onClick={() => handleDetails(note.id)}
                    />
                ))
                }
                </Section>
                
            </Content>

            <NewNote to="/new">
                <FiPlus/>
                Criar Nota
            </NewNote>
        </Container>

    );
}