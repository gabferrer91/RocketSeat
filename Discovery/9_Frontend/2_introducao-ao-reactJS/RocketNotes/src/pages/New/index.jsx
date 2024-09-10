import { Container, Form } from "./styles"
import {Header} from '../../components/header'
import {Input} from '../../components/input'
import {TextArea} from '../../components/TextArea'
import {NoteItem} from '../../components/NoteItem'
import {Section} from '../../components/Section'
import {Button} from '../../components/button'
import { Link } from "react-router-dom"



export function New() {
    return(
        <Container>
            <Header/>
            <main>
                <Form>
                    <header>
                        <h1>Criar nota</h1>
                        <Link to={'/'}>voltar</Link>
                    </header>
                    <Input placeholder="título"/>
                    <TextArea placeholder="Observações"/>

                    <Section title="Links úteis">
                        <NoteItem/>
                        <NoteItem placeholder="Novo link" isNew/>
                    </Section>

                    <Section title="Marcadores">
                        <div className="tags">
                        <NoteItem value="react"/>
                        <NoteItem placeholder="Nova tag" isNew/>
                        </div>
                    </Section>
                    <Button innerText="Salvar"/>
                </Form>
            </main>
        </Container>
    )
}