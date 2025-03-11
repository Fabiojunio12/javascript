function converterTemperatura() {
    let gcelsis = document.querySelector('input#temp');
    let res = document.querySelector('div#res');

    let t = Number.parseFloat(gcelsis.value);
    
    if (!isNaN(t)) {
        
        let resf = (t * 9 / 5) + 32;
        res.innerHTML = `A temperatura em Fahrenheit é: ${resf.toFixed(2)} °F`;
        
    } else {
        res.innerHTML = `[ERROR!] temperatura inválida.`;
    }
    gcelsis.focus();
    gcelsis.value = '';
}
