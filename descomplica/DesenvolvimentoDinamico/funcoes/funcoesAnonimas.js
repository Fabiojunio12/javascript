// Declaração de uma variável chamada resultado e atribuição de uma função anônima a ela

let somarParametros = function(parametro1, parametro2) {
    console.log("Parâmetro 1: " + parametro1);
    console.log("Parâmetro 2: " + parametro2);

    let resultado = parametro1 + parametro2;

    console.log("Resultado: " + resultado);

    return resultado;
};

// Chamada da função anômina através da variável
let resultado = somarParametros(5, 10);
console.log("Resultado da chamada da função somarParemetros: " + resultado);

// Definindo uma função que aceita outra função como argumento
function executarFuncao(funcao, valor1, valor2) {
    console.log("\nExecutando a função passada como argumento: ");
    return funcao(valor1, valor2);
}

// Passando a função anônima como argumento para outra função
let resultadoExercucao = executarFuncao(somarParametros, 7, 3);
console.log("Resultado da execuçãoda função passada como argumento: " + resultadoExercucao);

// Definindo e chamando uma função anônima imediatamente
let resultadoImediato = (function(a ,b){
    console.log("\nFunção de chamada imediata: ");
    return a * b;
})(4, 6);
console.log("Resultado da função anônima chamada imediatamente: "+ resultadoImediato);
