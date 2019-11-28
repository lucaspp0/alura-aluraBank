class NegociacaoController {
    constructor() {
        /* Utils */
        this.negociacoes = new Negociacoes();
        this.messageView = new MessageView("#mensagemView");
        this.tableview = new TableView("#tableComponente");
        this._dataInput = document.querySelector("#data");
        this._valorInput = document.querySelector("#valor");
        this._quantidadeInput = document.querySelector("#quantidade");
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(parseInt(this._quantidadeInput.value), parseInt(this._valorInput.value), new Date(this._dataInput.value));
        this.negociacoes.adicionar(negociacao);
        this.tableview.update(this.negociacoes);
        this.messageView.update("Negociacao adicionada com sucesso");
    }
}
