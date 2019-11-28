class NegociacaoController{

    private _dataInput: HTMLInputElement;
    private _valorInput: HTMLInputElement;
    private _quantidadeInput: HTMLInputElement;
    private _testeVariavel: String;

    /* Utils */
    private negociacoes: Negociacoes = new Negociacoes();
    private messageView: MessageView = new MessageView("#mensagemView");
    private tableview: TableView = new TableView("#tableComponente");

    constructor(){
        this._dataInput = <HTMLInputElement> document.querySelector("#data");
        this._valorInput = <HTMLInputElement> document.querySelector("#valor");
        this._quantidadeInput = <HTMLInputElement> document.querySelector("#quantidade");
    }

    adiciona(event: Event){
        event.preventDefault();

        const negociacao = new Negociacao(
            parseInt(this._quantidadeInput.value),
            parseInt(this._valorInput.value),
            new Date(this._dataInput.value)
        );
        this.negociacoes.adicionar(negociacao);
        this.tableview.update(this.negociacoes)
        this.messageView.update("Negociacao adicionada com sucesso");
    }
}