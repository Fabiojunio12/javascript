function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'manha.png';
        window.document.body.style.backgroundColor = '#fdb776';
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE!
        img.src = 'tarde.png';
        window.document.body.style.backgroundColor = '#837373';
    } else {
        //BOA NOITE!
        img.src = 'noite.png';
        window.document.body.style.backgroundColor = '#564032';
    }
}