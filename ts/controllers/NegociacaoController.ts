class NegociacaoController{

    private _dataInput: HTMLInputElement;
    private _valorInput: HTMLInputElement;
    private _quantidadeInput: HTMLInputElement;

    constructor(){
        this._dataInput = <HTMLInputElement> document.querySelector("#data");
        this._valorInput = <HTMLInputElement> document.querySelector("#valor");
        this._quantidadeInput = <HTMLInputElement> document.querySelector("#quantidade");
    }

    adiciona(event: Event){
        event.preventDefault();

        const negociacao = new Negociacao(
            parseInt(this._quantidadeInput.value),
            parseInt(this._quantidadeInput.value),
            new Date(this._quantidadeInput.value)
        );
        console.log("Valor: " + negociacao.valor);
    }

}