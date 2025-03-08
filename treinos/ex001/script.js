function verificarCor() {
    let cor = document.querySelector('input#cor');
    let res = document.querySelector('div#res');
    if (cor.value == '') {
        window.alert('Digite um valor válido.');
    } else if (cor.value.toLowerCase() == 'red'){
            res.innerHTML = `<p>Essa cor é vibrante.</p>`;
    } else if (cor.value.toLowerCase() == 'blue') {
            res.innerHTML = `<p>Essa cor transmite calma.</p>`;
    } else if (cor.value.toLowerCase() == 'green') {
            res.innerHTML = `<p>Essa cor está ligada à natureza.</p>`;
    } else {
            res.innerHTML = `<p>Cor não reconhecida.</p>`;
    }
}
