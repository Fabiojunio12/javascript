class Carro {

    // Construtor define as propriedades da classe
    constructor (tipoCombustivel, quantPortas, cor, quantRoda) {
        this.tipoCombustivel = tipoCombustivel;
        this.quantPortas = quantPortas;
        this.cor = cor;
        this.quantRoda = quantRoda;
    }

    // Método para descrever o carro
    descrever() {
        let descricao = `Este carro usar ${this.tipoCombustivel} como combustivel, possui ${this.quantPortas} porta(s), é de cor ${this.cor} e possui ${this.quantRoda} rodas.`;

        return descricao;
    }
    
}

// Criação de objetos (Instâncias da classe carro)
const meuCarro = new Carro("Gasolina", 4, "prata", 4);
const seuCarro = new Carro("Etanol", 4, "preto", 4);

// Manipulação dos objetos e exibição das descrições
console.log(meuCarro.descrever());
console.log(seuCarro.descrever());
