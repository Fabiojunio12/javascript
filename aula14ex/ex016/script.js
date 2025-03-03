function contar() {
    let inicio = document.getElementById('inicio');
    let fim = document.querySelector('input#fim');
    let passos = document.querySelector('input#passos');
    let res = document.getElementById('resultado');

    if (inicio.value.length == 0 || fim.value.length == 0 || passos.value.length == 0) {
        res.innerHTML = 'Impossivel contar';
    } else {
        res.innerHTML = `Contando: <br>`;
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passos.value);

        if (p <= 0) {
            alert(`Passo INVÁLIDO! Considerando PASSO 1`)
            p = 1;
        } 

        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449} `;
            }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449} `;
            }
        }
        
        res.innerHTML += `\u{1F3C1}`;
    }
}
