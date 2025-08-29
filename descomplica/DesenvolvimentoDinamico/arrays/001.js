let arrayFrutas = new Array;

arrayFrutas.push("banana");
console.log(`fruta: ${arrayFrutas[0]}`);

arrayFrutas.push("pera");
for (let chave in arrayFrutas) {
    console.log(`fruta ${chave}: ${arrayFrutas[chave]}`);
};
