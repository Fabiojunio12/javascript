let valores = [2, 9, 7, 5, 4, 8];

console.log(valores);

/*
console.log(valores[0]);
console.log(valores[1]);
console.log(valores[2]);
console.log(valores[3]);
console.log(valores[4]);
console.log(valores[5]);


for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)
}
*/
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)
}