// classe que vai conter a lógica dos dados
// como os dados serão estruturados
export class favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
    }

    load() {
        this.entries = [
            {
                login: 'diego3g',
                name: 'Diego Fernandes',
                public_repos: '48',
                followers: '21700'
            },
            {
                login: 'tarikfaro',
                name: 'Tarik Faro',
                public_repos: '23',
                followers: '12530'
            }
        ]
    }

    delete(user) {
        const filteredEntries = this.entries.filter(entry => entry.login !== user.login)    /* aqui n precisa de return */

        // const filteredEntries = this.entries.filter(entry=>{
            // return user.login !== entry.login
        // })

        console.log(filteredEntries)
        this.entries = filteredEntries
        this.update()
    }

} 


// classe que vai criar  a visualização e eventos do HTML
export class favoritesView extends favorites {
    constructor(root) {
        super(root)
        this.tbody = this.root.querySelector('table tbody')
        this.trs = this.root.querySelectorAll('tbody tr')
        this.update()
    }

    update() {
        this.removelAllTr()

        this.entries.forEach(entry => {
            const row = this.createRow()
            row.querySelector('td p').textContent = entry.name
            row.querySelector('td img').src = `https://github.com/${entry.name}.png`
            row.querySelector('td a').href = `https://github.com/${entry.login}`
            row.querySelector('td span').textContent = entry.login
            row.querySelector('.followers').textContent = entry.followers
            row.querySelector('.repositories').textContent = entry.public_repos

            row.querySelector('.remove').addEventListener('click', () => {
                const isOk = confirm('Certeza que quer deletar?')
                if(isOk) {
                    this.delete(entry)
                }
            })

            this.tbody.append(row)
        })
    }


    
    createRow() {
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <td class="user">
        <img src="https://github.com/ALTERAR.png" alt="user1">
        <a href="https://github.com/ALTERAR" target="_blank">link</a>
        <p>ALTERAR</p>
        <span>ALTERAR</span>
        </td>
        <td class="repositories">
        ALTERAR
        </td>
        <td class="followers">
        ALTERAR
        </td>
        <td><button class="remove">&times;</button></td>
        `
        return tr
    }



    removelAllTr() {
        this.trs.forEach((tr) => {
            tr.remove()
          })
    }

}


