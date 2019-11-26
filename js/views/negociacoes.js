class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adicionar(negociacao) {
        this._negociacoes.push(negociacao);
    }
    getAll() {
        return [].concat('', this._negociacoes);
    }
}
