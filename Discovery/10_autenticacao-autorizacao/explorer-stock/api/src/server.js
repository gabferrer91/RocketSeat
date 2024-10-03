require("express-async-errors");

const cors = require("cors");
const express = require("express");
const routes = require("./routes");
const cookieParser = require('cookie-parser')

const AppError = require("./utils/AppError");

const app = express();
app.use(express.json());
app.use(cookieParser());    // middleware que ajuda no parse do cookie
app.use(cors({
  /* define as URLs que o servidor permite acesso para fazer requisições */
  origin: [
    "http://localhost:5173" ,"http://localhost:5173/",
    "https://localhost:5173","https://localhost:5173/",
    "http://127.0.0.1:5173" ,"http://127.0.0.1:5173/",
    "https://127.0.0.1:5173","https://127.0.0.1:5173/"
  ],
  /* leva o cookie pro front nas respostas de requisições */
  credentials: true
}));
app.use(routes);

app.use((err, request, response, next) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: "error",
        message: err.message,
      });
    }
  
    console.error(err);
  
    return response.status(500).json({
      status: "error",
      message: "Internal server error",
    });
});


const PORT = 3333;
app.listen(PORT, () => console.log(`Server is running on Port ${PORT}`));