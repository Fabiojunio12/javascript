// Variável que representa a previsão do tempo
// Pode ser "rainy" (chuvoso), "sunny" (ensolarado) ou "Cloudy" (nublado)

let weatherForecast = "cloudy";

// Analogia com a vida real: Decidindo se devemos levar um guarda-chuva
if (weatherForecast === "rainy") {
    console.log("devemos levar um guarda-chuva");
} else if (weatherForecast === "cloudy") { // senão se
    console.log("devemos levar um guarda-chuva, só por segurança!");
} else if (weatherForecast === "sunny") { // senão se
    console.log("devemos levar um guarda-sol, ou usar protetor solar!");
} else { // senão
    console.log("NÃO devemos levar um guarda-chuva");
};
