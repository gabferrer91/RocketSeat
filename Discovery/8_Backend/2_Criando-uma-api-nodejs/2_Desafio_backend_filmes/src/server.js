require('express-async-errors')
const express = require('express')
const {connAndMigrate} = require('./database/migrations/connection_and_migrate')
const { sqliteConn } = require('./database/db_connection')
const {assembled_routes} = require('./routes/assembler')
const cors = require('cors')  // Para que o backend tenha acesso ao frontend e possa atender às solicitações (já o front se usa fetch ou axios para mandar solicitações ao backend)


connAndMigrate()

const app = express()
app.use(cors())
app.use(express.json())
app.use(assembled_routes)

const port = 3000

app.get('/', (req, res) => {
    console.log('GET at localhost:3000')
    const info = {
        nome:"movies API",
        url:`localhost:${port}`
    }
    res.json(info)
})

app.get('/filmes', (req, res) => {
    console.log('GET at localhost:3000/filmes')
    console.log(sqliteConn)
    res.json(req.body)
})


app.listen(port, () => {
    console.log(`Running... port -> ${port}`)
})

