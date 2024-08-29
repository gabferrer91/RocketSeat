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
    }


    inputValue() {
        const buttonTag = this.fullBody.querySelector('header button')
        buttonTag.addEventListener('click', () => {
            const inputTag = this.fullBody.querySelector('header input')
            this.getUserData(inputTag.value)
        })
    }


    getUserData(username) {
        const url = `https://api.github.com/users/${username}`
        const resPromise = fetch(url)
                            .then(req => req.json())
                            .then(jsonObj => {
                                const { name, public_repos, followers, login } = jsonObj
                                console.log(name, public_repos, followers, login)
                                this.parseElement(name, public_repos, followers, login)
                            })
        return resPromise
    }


    deleteEntryFeature(entry) {
        const removeBtn = entry.querySelector('.fourthDim button')

        removeBtn.addEventListener('click', () => {
            const removingUser = entry.querySelector('.NameAndAdr a').textContent

            this.clearRows()

            const bkDatas = JSON.parse(localStorage.getItem('usersLocalBK'))
            bkDatas.forEach(bkData => {
                if (bkData.login !== removingUser) {
                    this.parseElement(
                        bkData.name, 
                        bkData.repos, 
                        bkData.followers, 
                        bkData.login.replace('/','')
                    )
                }
            })
        })
    }

    clearRows() {
        const rows = this.fullBody.querySelectorAll('tbody tr')
        rows.forEach(row => {
            row.remove()
        });
    }


    parseElement(ghname, ghrepos, ghfollowers, ghlogin) {
        const tableBody = this.fullBody.querySelector('tbody')
        const newRow = document.createElement('tr')
        
        const element = `
        <td class="firstDim">
                        <div class="conteiner">
                            <img src="https://github.com/${ghlogin}.png">
                            <div class="NameAndAdr">
                                <span>${ghname}</span>
                                <a href="https://github.com/${ghlogin}" target="_blank">/${ghlogin}</a>
                            </div>
                        </div>
                    </td>
                    <td class="secondDim">${ghrepos}</td>
                    <td class="thirdDim">${ghfollowers}</td>
                    <td class="fourthDim">
                        <button>Remover</button>
                    </td>`

        newRow.innerHTML = element
        console.log(newRow)
        this.deleteEntryFeature(newRow)
        tableBody.prepend(newRow)
        this.setLocals()
    }
    
    
    setLocals() {
        const rowsEntries = this.fullBody.querySelectorAll('tbody tr')
        
        let list = []

        rowsEntries.forEach(rowEntry => {

            const entryUsername = rowEntry.querySelector('.NameAndAdr span').textContent
            const entryLogin = rowEntry.querySelector('.NameAndAdr a').textContent
            const entryrepos = rowEntry.querySelector('.secondDim').textContent
            const entryFollows = rowEntry.querySelector('.thirdDim').textContent

            const entryObj = {
                name:entryUsername,
                login:entryLogin,
                repos:entryrepos,
                followers:entryFollows
            }

            list.push(entryObj)
        });

        localStorage.setItem('usersLocalBK', JSON.stringify(list))
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



