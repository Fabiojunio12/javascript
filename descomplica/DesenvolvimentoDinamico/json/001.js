let pessoa1 = {
    "nome": "Fábio Junio",
    "idade": 25,
    "altura": 1.75,
    "estudante": "Análise e desenvolvimento de sistemas",
    "periodo": "2° semestre",
    "estado": "Bahia"
}

for (let chave in pessoa1) {
    console.log(`${chave}: ${pessoa1[chave]}`);
};
pessoa1.cabelo = ["preto"];
pessoa1.cabelo.push("liso");

for (let chave in pessoa1) {
    console.log(`${chave}: ${pessoa1[chave]}`);
};

console.log(pessoa1);

delete pessoa1.cabelo[0];
console.log(pessoa1);
