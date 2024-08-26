export class router {

    constructor() {
        this.headerLinks = document.querySelectorAll('.pages a');
        this.assetsDefault = "'Discovery/7_JS-antes-do-framework/1_SPA/Desafio-SPA/assets/"
        this.init()
        this.routes = {}
    }

    
    add(routeName, page) {
        this.routes[routeName] = page
    }

    
    init() {
        this.headerLinks.forEach(element => {
            element.addEventListener('click', (event)=>{
                event = event || window.event
                event.preventDefault()
                window.history.pushState({},"",event.target.href)
            
                const currentLink = element.id
                if (currentLink == 'link1') {document.body.style.backgroundImage = "url(" + this.assetsDefault + "mountains-universe-1.png')"}
                else if (currentLink == 'link2') {document.body.style.backgroundImage = "url(" + this.assetsDefault + "mountains-universe-2.png')"}
                else if (currentLink == 'link3') {document.body.style.backgroundImage = "url(" + this.assetsDefault + "mountains-universe-3.png')"}
            
                this.handle()
            })
        });
    }

    handle() {
        console.log(window.location)
        const { pathname } = window.location                            /* desestruturação de objetos em JavaScript. É o mesmo que const pathname = window.location.pathname e com isso da pra pegar varios de uma vez desde que o nome seja igual ->> const {attr1, attr2} = obj.sub*/
        console.log(pathname)
        const route = this.routes[pathname] || this.routes[404]
        
        console.log('rota: ', route)
        console.log('pathname: ', pathname)
        
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
    }

    clickHandle() {
        const route = '/Discovery/7_JS-antes-do-framework/1_SPA/Desafio-SPA/pages/universe.html'
        const imgbg = "url('Discovery/7_JS-antes-do-framework/1_SPA/Desafio-SPA/assets/mountains-universe-2.png')"
        fetch(route)
        .then(data => data.text())
        .then(html => {
            document.querySelector('#app').innerHTML = html
        })
        
        if(document.body.style.backgroundImage=='') {
            document.body.style.backgroundImage = "url('assets/mountains-universe-2.png')"
        } else {
            document.body.style.backgroundImage = imgbg
        }
    }
}

