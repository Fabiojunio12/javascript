let arraynum = [];
let maior = 0;
let menor = 100;
let soma = 0;
let media = 0;
let res = document.getElementById('res');

function adicionar() {
    let num = document.getElementById('numeros');
    let ressel = document.getElementById('ressel');

    let n = Number(num.value);

    if (n < 1 | n == "" | n > 100 | arraynum.indexOf(n) != -1) {
        alert('[ERRO!] Número inválido ou já adicionado. Digite um números entre 1 e 100');
    } else {
        res.innerHTML = '';
        soma += n;
        arraynum.push(n);
        let item = document.createElement('option');
        item.text = `Número ${n} foi adicionado`;
        ressel.appendChild(item);
        if (maior < n) {
            maior = n;
        }
        if (menor > n) {
            menor = n;
        }
    }
}

function finalizar() {
    if (arraynum != '') {
        media = soma / arraynum.length;
        res.innerHTML += `
            <p>Você digitou ${arraynum.length} números.</p>
            <p>O maior número foi ${maior}</p>
            <p>O menor número foi ${menor}</p>
            <p>A somar entre eles é ${soma}</p>
            <p>A média dos valores é ${media}</p>
        `;
    } else {
        alert('[ERROR!] sem valores adicionados')
    }
}