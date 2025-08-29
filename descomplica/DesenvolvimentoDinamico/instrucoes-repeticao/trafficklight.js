// Função que recebe a cor do semáforo e decide a ação do pedestre
function checkTraffickLight(lightColor) {
    switch(lightColor) {
        case "verde":
            console.log("Pode atravessar a rua.");
            break;
        case "amarelo":
            console.log("Prepare-se para parar.");
            break;
        case "vermelho":
            console.log("Pare! Não atravesse a rua.");
            break;
        default:
            console.log("Cor inválida! Aguarde até que o semáforo esteja em uma cor válida.");
    };
};

// exemplo de uso.
checkTraffickLight('verde');
checkTraffickLight('amarelo');
checkTraffickLight('vermelho');
checkTraffickLight('azul');
