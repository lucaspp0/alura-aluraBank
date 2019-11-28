class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adicionar(negociacao) {
        this._negociacoes.push(negociacao);
    }
    getAll() {
        console.log([].concat(',', this._negociacoes));
        return [].concat(this._negociacoes);
    }
}
