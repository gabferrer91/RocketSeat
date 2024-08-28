export class higherClass {
    constructor() {
        this.fullBody = document.querySelector('#app')
    }
}

export class LowerClass extends higherClass {
    constructor() {
        super()
        this.inputValue()
    }
    
    inputValue() {
        const buttonTag = this.fullBody.querySelector('header button')
        
        buttonTag.addEventListener('click', (event) => {
            const inputTag = this.fullBody.querySelector('header input')
            console.log(inputTag.value)
        })
    }
}

const varClasse = new LowerClass();


// export class childClass extends higherClass {
    
// }




class classe {
    constructor() {
        this.metodoQualquer
    }
    metodoQualquer(a,b) {
        return a+b
    }
}

const variavel = new classe();
// variavel.metodoQualquer
//variavel.metodoQualquer(2,5)
