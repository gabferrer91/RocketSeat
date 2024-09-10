import {FiPlus, FiSearch} from 'react-icons/fi'
import { Container, Brand, Menu, Search, Content, NewNote } from './styles'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/buttonText'
import { Input } from '../../components/input'
import {Section} from '../../components/section'
import {Notes} from '../../components/notes'


export function Home() {
  return (
    <Container>
      <Brand>
        <h1>Rocketnotes</h1>
      </Brand>

      <Header></Header>

      <Menu>
        <li><ButtonText title="Todos"/></li>
        <li><ButtonText title="React"/></li>
        <li><ButtonText title="Nodejs"/></li>
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título." icon={FiSearch}/>
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Notes data={{
            title: 'React',
            tags: [
              { id: '1', name: 'react' },
              { id: '2', name: 'rocketseat' }
            ]
          }}
          />
        </Section>
      </Content>

      <NewNote to={'/new'}>
        <FiPlus/>
        Criar nota
      </NewNote>
    </Container>
  )
}