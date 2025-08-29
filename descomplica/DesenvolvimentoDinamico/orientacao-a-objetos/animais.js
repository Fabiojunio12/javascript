class Animal {

    constructor(corPelagem, quantPatas, tipoAlimentacao) {
        this._corPelagem = corPelagem;
        this._quantPatas = quantPatas;
        this._tipoAlimentacao = tipoAlimentacao;
    }

    get corPelagem() {
        return this._corPelagem;
    }

    set corPelagem(novaCorPelagem) {
        this._corPelagem = novaCorPelagem;
    }

    get quantPatas() {
        return this._quantPatas;
    }

    set quantPatas(novaQuantPatas) {
        this._quantPatas = novaQuantPatas;
    }

    get tipoAlimentacao() {
        return this._tipoAlimentacao;
    }

    set tipoAlimentacao(novaTipoAlimentacao) {
        this._tipoAlimentacao = novaTipoAlimentacao;
    }

    descrever() {
        let descricao = `Essa animal tem a pelagem de cor ${this._corPelagem}, tem ${this._quantPatas} pata(s), é animal ${this._tipoAlimentacao}`;
        return descricao;
    }

};

const cachorro = new Animal("pardo", 4, "carnívoro");

console.log(cachorro.descrever());


class Felino extends Animal {

    constructor(corPelagem, quantPatas, tipoAlimentacao, tamanhoGarra) {
        super(corPelagem, quantPatas, tipoAlimentacao);
        this._tamanhoGarra = tamanhoGarra;  
    };

    get tamanhoGarra() {
        return this._tamanhoGarra;
    };

    set tamanhoGarra(novaTamanhoGarra) {
        this._tamanhoGarra = novaTamanhoGarra;
    };

    descrever() {
        let descricao = super.descrever();
        descricao += ` Tamanho da Garra ${this._tamanhoGarra} metros.`;

        return descricao;
    }
};

const Gato = new Felino("vermlho", 4, "carnívoros", 0.01);

console.log(Gato.descrever());

Game.spawns['Spawn1'].spawnCreep( [WORK, CARRY, MOVE], 'Harvester1' );