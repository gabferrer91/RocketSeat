import { higherClass, LowerClass } from './Proms.js'
const varClasse = new LowerClass();



// export class getUserData {
//     static fetchData() {
//         fetch(`https://api.github.com/users/vihmalmsteen`)
//             .then(res => res.json())
//             .then(json => {
//                 const {login, name, public_repos, followers} = json
//                return {login, name, public_repos, followers}
//             })
//       }
// }



// let x = getUserData.fetchData()
// console.log('depois')

/*
export async function fetchData() {
    const url = `https://api.github.com/users/vihmalmsteen`;
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

async function main() {
    const userData = await fetchData();
    
    const userInfo = {
        name: userData.name,
        bio: userData.bio,
        followers: userData.followers
    };

    console.log(userInfo);
    return userInfo
}

main()
*/










// console.log('fora fn\n',res);








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