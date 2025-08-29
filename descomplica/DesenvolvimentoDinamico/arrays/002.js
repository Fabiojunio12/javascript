let arr = new Array;

arr.push(
    'Flamengo', 'Palmeiras', 'Cruzeiro',
    'Bahia', 'Botafogo', 'São Paulo',
    'Mirassol', 'Fluminense', 'Bragantino',
    'Ceará SC', 'Atlético MG', 'Internacional',
    'Grêmio', 'Corinthians', 'Santos',
    'Vasco da Gama', 'EC Vitória',
    'Juventude', 'Fortaleza', 'Sport Recife'
);

console.log(arr);

let primeiroLugar = arr[0];
let segundoLugar = arr[1];
let terceiroLugar = arr[2];
let quartoLugar = arr[3];

console.log(`
    1° ${primeiroLugar}\n
    2° ${segundoLugar}\n
    3° ${terceiroLugar}\n
    4° ${quartoLugar}\n
`);

let pos = 1;
for (let chave in arr) {
    console.log(`${pos}° ${arr[chave]}`);
    pos ++;
};

let timeEliminado = arr.pop(); // remove o último elemento da array

console.log(timeEliminado);
console.log(arr);

let segundoEliminado = arr.shift(); // remove o primeito elemento da array

console.log(segundoEliminado);
console.log(arr);

let pos1 = 1;
for (let chave in arr) {
    console.log(`${pos1}° ${arr[chave]}`);
    pos1++;
};

let quintoLugar = arr[4];
console.log("5° " + quintoLugar);

console.log(arr.length);

let comprimento = arr.push('Flamengo', 'Sport Recife'); // retorma o comprimento do array após adição. 

console.log(comprimento);
console.log(arr);
