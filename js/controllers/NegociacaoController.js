class NegociacaoController {
    constructor() {
        this._dataInput = document.querySelector("#data");
        this._valorInput = document.querySelector("#valor");
        this._quantidadeInput = document.querySelector("#quantidade");
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(parseInt(this._quantidadeInput.value), parseInt(this._quantidadeInput.value), new Date(this._quantidadeInput.value));
        console.log("Valor: " + negociacao.valor);
    }
}
