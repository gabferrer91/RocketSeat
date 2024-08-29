export class higherClass {
    constructor() {
        this.fullBody = document.querySelector('#app')
    }
}

export class LowerClass extends higherClass {
    constructor() {
        super()
        this.inputValue()
        this.clearRows()
        this.parseElement()
    }
    

    inputValue() {
        const buttonTag = this.fullBody.querySelector('header button')
        buttonTag.addEventListener('click', (event) => {
            const inputTag = this.fullBody.querySelector('header input')
            console.log(inputTag.value)
            this.getUserData(inputTag.value)
        })
    }

    getUserData(username) {
        const url = `https://api.github.com/users/${username}`
        const res = fetch(url)
                        .then(req => req.json())
                        .then(jsonObj => {
                            const { name, public_repos, followers, login } = jsonObj
                            console.log(name, public_repos, followers, login)
                            return { name, public_repos, followers, login }
                        })
                        return res
    }

    

    clearRows() {
        const rows = this.fullBody.querySelectorAll('tbody tr')
        rows.forEach(row => {
            row.remove()
        });
    }


    parseElement() {
        const tableBody = this.fullBody.querySelector('tbody')
        const newRow = document.createElement('tr')     // tableBody.createElement('tr')
        
        const element = `
        <td class="firstDim">
                        <div class="conteiner">
                            <img src="https://github.com/vihmalmsteen.png">
                            <div class="NameAndAdr">
                                <span>Vih Malmsteen</span>
                                <a href="https://github.com/vihmalmsteen" target="_blank">/vihmalmsteen</a>
                            </div>
                        </div>
                    </td>
                    <td class="secondDim">123</td>
                    <td class="thirdDim">1234</td>
                    <td class="fourthDim">
                        <button>Remover</button>
                    </td>`
                    newRow.innerHTML = element
                    console.log(newRow)
                    tableBody.append(newRow)
    }


    // getUserData() {
    //     const endpoint = `https://api.github.com/users/vihmalmsteen`

    //     fetch(endpoint)
    //     .then(res => {
    //         if(res.status!==200) {
    //             throw new Error(`Fetch falhou ->> ${res.status}`);
    //         }
    //         console.log(res)
    //         return res.json()
    //     })
    //     .then(res => {
    //         console.log(res)
    //     })
    //     .catch(error=>{
    //         console.log(error)
    //     })
        

    //     // console.log(req)
    // }



    
}



