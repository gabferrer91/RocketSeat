class apiHandler {
    constructor() {
        this.apiUrl = window.env.API_URL
        this.imdbKey = window.env.IMDBKEY
        
        this.fInputName = document.querySelector('.i1')
        this.fInputYear = document.querySelector('.i2')
        this.fInputTtype = document.querySelector('.i3')
        this.fBtn = document.querySelector('.header button')
        this.fParag = document.querySelector('main div p')
        this.ftbody = document.querySelector('tbody')

        this.btnSend()
        this.clearRows()
        this.loadLocals()
    }
    
    clearRows() {
        const rows = this.ftbody.querySelectorAll('tr')
        rows.forEach(row =>row.remove())
    }

    btnSend() {
        this.fBtn.addEventListener('click', (e) => {
            this.clearRows()
            e.preventDefault()
            
            const Input1 = this.fInputName.value
            const Input2 = this.fInputTtype.value
            const Input3 = this.fInputYear.value
            
            try {
                if (Input1==='') {
                    throw new Error("Diga pelo menos o nome do filme.");
                }
                const endpoint = `${this.apiUrl}?s=${Input1}&y=${Input2}&y=${Input3}&apikey=${this.imdbKey}`
                this.fetchData(endpoint)
            } catch (error) {
                alert(error)
            }
        })
    }
        
    fetchData(endpoint) {
        const fetchGet = fetch(endpoint)
        .then(json => {
            if(json.status!==200){
                throw new Error("Erro encontrado");
            }
            return json.json()
        })
        .then(data => {
            const contents = data.Search
            let obj = []
            contents.forEach(element => {
                console.log(element)
                console.log(typeof element)
                
                obj.push(
                    {
                        Title:element.Title,
                        Year:String(element.Year),
                        Type:element.Type
                    }
                )
                
                console.log(obj)
                
                const newTr = document.createElement('tr')
                newTr.innerHTML = `
                <td>${element.Title}</td>
                <td>${String(element.Year)}</td>
                <td>${element.Type}</td>
                `
                this.ftbody.prepend(newTr)
            })

            localStorage.setItem("moviesBk",JSON.stringify(obj))
        })
        .catch(err => {
            alert(err)
            console.log(err)
        })
    }


    loadLocals() {
        const locals = JSON.parse(localStorage.getItem("moviesBk"))
        let coisas
        locals.forEach(movie => {
            const newTr = document.createElement('tr')
            const trContent = `
            <td>${movie.Title}</td>
            <td>${movie.Year}</td>
            <td>${movie.Type}</td>
            `
            newTr.innerHTML=trContent
            this.ftbody.appendChild(newTr)
        })
    }

}

const classe = new apiHandler();
