let num = [3, 5, 10, 6, 8];
num.push(1);
num.sort((a, b) => a - b);

console.log(num);
console.log(`o vetor tem ${num.length} posições.`);
console.log(`O primeiro valor do vetor é ${num[0]}`);

let pos = num.indexOf(10);
if (pos == -1) {
    console.log('Valor não foi encontrado!');
} else {
    console.log(`O valor está na posição ${pos}`);
}