import { Container, Links, Content } from "./styles"
import { Button } from '../../components/button'
import { Header } from "../../components/header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/tag"
import { ButtonText } from "../../components/buttonText"


export function Details() {
  return (
    <Container>
      <Header/>

      <main>
        <Content>
          <ButtonText title="Excluir nota"/>
          <h1>Introdução ao React</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto perspiciatis 
            iure consectetur neque debitis dicta quo vitae placeat rem nulla, illo, distinctio ipsa? 
            Possimus doloremque eius aliquid tempora quod omnis.
          </p>

          <Section title="Links Úteis">
            <Links>
              <li><a href="http://www.rocketseat.com.br/">Link 1</a></li>
              <li><a href="http://www.rocketseat.com.br/">Link 2</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="nodejs"/>
          </Section>

          <Button innerText="Voltar"/>
        </Content>

      </main>
    </Container>
  )
}

