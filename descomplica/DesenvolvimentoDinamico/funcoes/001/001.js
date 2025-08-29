let nome = "Fábio Junio";
let age = 25;
let empregado = false;
let city = "wanderley";

// A função getNome ela imprime no console o nome que forneceu no paramento nome
function getNome(nome) {
    console.log("Olá " + nome + "!");
};

// A função getAge ela imprime no console a idade que foi adquirida no paramento age
function getAge(age) {
    console.log("Sua idade é: " + age + ".");
};

// A função getEmpregado imprime no console um valor booleano de acordo se paramentro informando status de emprego
function getEmpregado(empregado) {
    console.log("empregado: " + empregado + ".");
};

// A função getCity imprime no console a cidade passado pelo paramentro city
function getCity(city) {
    console.log("Morador de " + city + "!");
};

getNome(nome);
getAge(age);
getEmpregado(empregado);
getCity(city);
// Enquanto o valor da variável c for menor 6 imprime c e incrementa a variável c.
let c = 1;

while (c < 6) {
    console.log(c);
    c++;
};
