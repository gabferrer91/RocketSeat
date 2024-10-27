class MyCustomError {
    constructor(message) {
        this.message = message;
    }
}

try {
    throw new MyCustomError("Meu erro personalizado");
} catch (error) {
    if(error instanceof MyCustomError) {
        console.log(error)
    } else {
        console.log(error)
    }
}