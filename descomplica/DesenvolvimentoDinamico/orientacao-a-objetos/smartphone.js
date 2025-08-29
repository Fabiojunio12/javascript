class Smartphone {
    constructor(menoriaInterna, menoriaRam, versaoAndroid) {
        this._menoriaInterna = menoriaInterna;
        this._menoriaRam = menoriaRam;
        this._versaoAndroid = versaoAndroid;
    };

    get menoriaInterna() {
        return this._menoriaInterna;
    }

    set menoriaInterna(novaMenoriaInterna) {
        this._menoriaInterna = novaMenoriaInterna;
    }

    get menoriaRam() {
        return this._menoriaRam;
    }

    set menoriaRam(novaMenoriaRam) {
        this._menoriaRam = novaMenoriaRam;
    }

    get versaoAndroid() {
        return this._versaoAndroid;
    }

    set versaoAndroid(novaVersaoAndroid) {
        this._versaoAndroid = novaVersaoAndroid;
    }

    descrever() {
        let descricao = `Esse smartphone tem ${this._menoriaInterna}GB de menória interna, ${this._menoriaRam}GB de menória ram, a versão do android é ${this._versaoAndroid}.`;
        return descricao;
    }
};

const motoG52 = new Smartphone(128, 4, 12);
console.log(motoG52.descrever());
console.log(motoG52.versaoAndroid);
motoG52.versaoAndroid = 13;
console.log(motoG52.descrever());


let listaCaracteristica = new Array();
listaCaracteristica.push(64, 4, 9, 10);
listaCaracteristica.pop();
console.log(listaCaracteristica);

let oneMacro = new Smartphone(listaCaracteristica[0], listaCaracteristica[1], listaCaracteristica[2]);

console.log(oneMacro.descrever());
