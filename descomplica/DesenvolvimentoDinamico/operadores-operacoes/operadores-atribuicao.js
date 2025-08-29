// Exemplos de Operadores de atribuição em JavaScript

// Operador de Atribuição Básico (=)
let a = 10;
console.log(`Valor inicial de a: ${a}`);

// Operador de Atribuição de Adição (+=)
a += 5; // equivalente a = a + 5
console.log(`Após a += 5, valor de a: ${a}`)

// Operador de Atribuição de Subtração (-=)
a -= 3; // equivalente a = a - 3
console.log(`Após a -= 3, valor de a: ${a}`);

// Operador de Atribuição de Multiplicação (*=)
a *= 2; // equivalente a = a * 2
console.log(`Após a *= 2, valor de a: ${a}`);

// Operador de Atribuição de Divisão (/=)
a /= 4; // equivalente a = a / 4
console.log(`Após a /= 4, valor de a: ${a}`);

// Operador de Atribuição de Resto (%=)
a %= 4; // equivalente a = a % 4
console.log(`Após a %= 4, valor de a: ${a}`);

// Operador de Atribuição de Exponenciação (**=)
a **= 3;
console.log(`Após a **= 3, valor de a: ${a}`);

let b = 10 / 0;
console.log(`Valor da divisão por zero: ${b}`); // O JavaScript não permitir divisão por zero, resultado é infinity.
