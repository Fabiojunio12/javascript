let arrNumeros = new Array;

arrNumeros.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

for (let chave in arrNumeros) {
    console.log(` ${arrNumeros[chave]} `);
}

let rem = arrNumeros.shift();
console.log(rem);
console.log(arrNumeros);

arrNumeros.unshift(rem);
console.log(arrNumeros);
