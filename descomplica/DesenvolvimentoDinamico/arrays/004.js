let arrTimes = new Array;

arrTimes.push("Flamengo", "Palmeiras", "Cruzeiro", "Bahia", "Botafogo", "São Paulo", "Mirrasol", "Fluminense", "Bragantino", "Ceará SC", "Atlético MG", "Internacional", "Grêmio", "Corinthians", "Santos", "vasco", "EC Vitória", "Juventude", "Fortaleza", "Sport Recife");

let começaC = arrTimes.filter(function (arrTimes) {
    return arrTimes[0] === "C";
});

console.log(começaC);
