class hero {
    constructor(nome,idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
        if (tipo === "guerreiro") {
            this.atack = "espada"
        } else if (tipo === "mago") {
            this.atack = "magia"
        } else if (tipo === "monge") {
            this.atack = "artes marciais"
        } else if (tipo === "ninja") {
            this.atack = "shuriken"
        }
    }

    escrever(){
        console.log(`O ${this.tipo} atacou usando ${this.atack}`)
    }
    
}

let heroi = new hero("Magno", 37, "guerreiro")

heroi.escrever();