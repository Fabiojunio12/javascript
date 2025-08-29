// Exemplo de uso de var, let e const em JavaScript

const externo = "Olá, eu sou uma constante global!";

// Declaração de uma variável usando var
function exemploVar() {
    if (true) {
        var mensagem = "Olá, Faculdade Descomplica! Eu sou uma var..."
    }
    console.log(mensagem);
}

// Chamando a função exemploVar
exemploVar();

// Exemplo de erro e correção
let mensagem1 = "Olá, Faculdade Descomplica! Escopo Externo!";
console.log(mensagem1);

// Declaração de uma variável usando let
function exemploLet() {
    if (true) {
        let mensagem = "Olá, Faculdade Descomplica! Eu sou uma let..."
        console.log(mensagem); // só consigo acessa essa let por aqui, pois tem um declaração global.
    }
    //console.log(mensagem);
}

// Chamando a função exemploLet
exemploLet();

// Exemplo de erro e correção
let mensagem = "Olá, Descomplica! Let externo!";
console.log(mensagem);

// Declaração de uma constante usando const
function exemploConstante() {
    const mensagem = "Olá, Faculdade Descomplica! Eu sou uma constante...";
    console.log(mensagem);
}

// Chamando a função exemploConst
exemploConstante();

// Exemplo externo de const
console.log(externo);

// Exemplo externo tentar alterar constante global

// Demonstrando o escopo global de var

// Demonstrando o escopo de bloco de let

// Exemplo do escopo inacessível
