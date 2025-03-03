function geradorTabuada() {
    let numtxt = document.querySelector('input#num');
    let lista = document.querySelector('ul#lista');

    lista.innerHTML = '';

    let num = Number(numtxt.value);
    for (let c = 0;c <= 10; c++) {
        res = num * c;
        lista.innerHTML += `<li style='list-style: none'>${num} x ${c} = ${res}</li>`
    }
}
