let numeros1 = [1, 2];
let numeros2 = [3, 4];

let numerosCombinados = numeros1.concat(numeros2);

console.log("Array do numeros1");
for (let chave in numeros1) {
    console.log(numeros1[chave]);
}

console.log("Array do numeros2");
for (let chave in numeros2) {
    console.log(numeros2[chave]);
}

console.log("Array do numeroCombinados");
for (let chave in numerosCombinados) {
    console.log(numerosCombinados[chave]);
}
