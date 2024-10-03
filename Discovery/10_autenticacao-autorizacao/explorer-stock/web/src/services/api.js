import axios from "axios";

export const api = axios.create({
  baseURL: 'http://localhost:3333',
  // withCredentials: true, 
});

/**
 * Colocar withCredentials acima 
 * insere o uso de credenciais do token em todas as rotas.
 */