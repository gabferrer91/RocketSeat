// arquivo para iniciar a aplicacao

const PORT = 3333

require('express-async-errors');                  // para lidar com erros. deve ser instalado -> npm install express-async-errors --save
const migrationsRun = require('./database/sqlite/migrations');

const appError = require('./utils/appError.js');


const express = require('express')                // importa o express para uma const
const routes = require('./routes/index.js')       // importa as rotas definidas no index.js
const cors = require('cors')

migrationsRun()

const app = express()                             // cria um obj "app" express
app.use(cors())
app.use(express.json())                           // define a interpretação como json
app.use(routes)

// carregar avatar no insomnia ->>
const {uploads_folder} = require('./configs/upload.js')
app.use('/files', express.static(uploads_folder))
// <<- carregar avatar no insomnia

app.use((error, req, res, next) => {
    // response do erro do cliente (appError)
    if(error instanceof appError) {
        return res.status(error.statusCode).json({
            status: 'error',
            message: error.message
        })
    }
    console.error(error)

    // response de erro do servidor (500)
    return res.status(500).json({
        status:'error',
        message:'internal server error'
    })
})



app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`))


