// importando o express
const express = require('express')


// iniciando o express
const app = express()

// setando requisições GET na API app
app.get('/', (req, res) => {
    res.send(`Esta é a raíz, a página principal!<br>
              Das rotas disponíveis:<br>
              GET -> /mensagem/<br>
              GET -> /usuarios/:id/:user/<br>
              GET -> /filmes/<br><br>
              em filmes, 2 req.query (title, year), logo<br>
              localhost:3000/filmes?title=nome-do-filme&year=ano<br><br>
              POST -> /novos-usuarios/<br>
              3 infos json do body da req: name, email, password<br>
              Logo, via Insomnia:<br>
              {<br>
                "name":"John Doe",<br>
                 "email":"john.doe@gmail.com",<br>
                 "password":"john123"<br>
              }
              `)
})

app.get('/mensagem/', (req, res) => {
    res.send('Este é uma rota diferente, contida na raíz.')
})


// setando um recurso (usuarios) e dois params de rota (id e user)
app.get('/usuarios/:id/:user', (req, res) => {

    const {id, user} = req.params
    
    res.send(`Nesta rota, "usuarios" é um recurso. Enquanto id e user são params da rota.<br><br>

              <b>const {id, user} = req.params</b><br><br>

              O parâmetro é "id" porque foi designado os dois pontos após a barra.<br><br>
              
              Se tentar colocar um número no final da rota, significa que se está buscando<br>
              do recurso "usuarios" o de "id" 5, por exemplo. <b>Recursos de rota são obrigatórios.</b><br><br>
              
              Ainda, para acessar o param com a variável da requisição:<br><br>

              Tente acessar a rota abaixo, setando os params de rota:<br><br>

              localhost:3000/usuarios/param1/param2<br><br>
              
              userId -> ${id}<br>
              usuário -> ${user}
              `)
})


app.get('/filmes/', (req, res) => {

    const {title, year} = req.query

    res.send(`Nesta rota chamada "filmes" dentro da raíz, não há params de rota.<br>
              Mas há parâmetros de consulta chamados com o método query na variável da requisição.<br><br>

            <b>const {title, year} = req.query</b><br><br>
              
            Uma rota com query params tem "?" no final da rota e, na sequência, são<br>
            os dados de consulta.<br><br>

            <b>https://enderecoservidor.com/rota/qualquer?paramQuery1=2&paramQuery2=Joao</b><br><br>

            Diferente dos params de rota, os <b>de query não são obrigatórios</b>.<br><br>

            Tente, por exemplo, acessar a rota abaixo alterando os params de query com o server online:

            localhost:3000/filmes?title=Gladiador&year=2005<br><br>

              Filme -> ${title}<br>
              Ano -> ${year}`)
})


// fazer requisicao via Insomnia
app.post('/novos-usuarios/', (req, res) => {
    const {name, email, password} = req.body
    res.json({name, email, password})
})


// Iniciando server, apontando uma porta para o express ficar atento
const port = 3000
app.listen(port, () => {
    console.log(`Server listening to port ${port}`)
})

/**
 * Acessar no navegador:
 * localhost:3000/
 * localhost:3000/mensagem
 * localhost:3000/usuarios/5
 * localhost:3000/filmes?title=Gladiador&year=2005
 */

