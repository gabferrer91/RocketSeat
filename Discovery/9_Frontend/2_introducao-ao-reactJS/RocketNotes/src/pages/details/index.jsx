import { Container, Links, Content } from "./styles"
import { Button } from '../../components/button'
import { Header } from "../../components/header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/buttonText"
import {useParams, useNavigate} from 'react-router-dom'       // useParams: pega os params de uma url (rota)
import {useState, useEffect} from 'react'                     // useState: para armazenar as INFOs da(s) nota(s) carregada(s) useEffect: buscar as notas pelos params quando a interface for carregada
import {api} from '../../services/api'                        // importar a API para fazer as requisições

export function Details() {
  const [data, setData] = useState(null)

  const navigate = useNavigate()
  const params = useParams()

  function navigateBack(){
    return navigate('/')
  }

  async function handleRemove(){
    const confirm = window.confirm('Confirma remover a nota?')
    if(confirm){
      await api.delete(`/notes/${params.id}`)
      navigate('/')
    }
  }

  // useEffect abaixo executará no carregamento inicial da interface, somente -> ', [])'
  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`)
      // await console.log(response.data)
      setData(response.data)
    }

    fetchNote()
  }, [])

  return (
    <Container>
      <Header/>
    {
      data &&               // se existir data renderiza main
      <main>
        <Content>
          <ButtonText onClick={handleRemove} title="Excluir nota"/>
          <h1>{data.title}</h1>
          <p>
            {data.description}
          </p>

          {
            data.linksFromNote &&
            <Section title="Links Úteis">
              <Links>
              {
                data.linksFromNote.map(link => {
                  // console.log(link)
                  return <li key={String(link.id)}>
                    <a href={link.url}>
                      {link.url}
                      </a>
                    </li>
                })
              }
              </Links>
            </Section>
          }

          {
            data.tagsFromNote &&
            <Section title="Marcadores">
              {
                data.tagsFromNote.map(tag => {
                  console.log(tag)
                   return <Tag key={String(tag.id)} title={tag.name}/>
                })
              }
            </Section>
          }

          <Button onClick={navigateBack} innerText="Voltar"/>
        </Content>

      </main>
    }
    </Container>
  )
}

