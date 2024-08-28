import { higherClass, LowerClass } from './Proms.js'


const varClasse = new LowerClass();
const x = varClasse.inputValue()
// console.dir(x)



/*
function resposta() {
    const req = `https://api.github.com/users/vihmalmsteen`
    return fetch(req)
    .then(conteudo => conteudo.json())
    .then((data) => {
        const {login, name, public_repos, followers} = data
       return {login, name, public_repos, followers}
    })
}

console.log(resposta())
*/