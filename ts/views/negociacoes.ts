class Negociacoes{
    private _negociacoes: Negociacao[] = [];

    adicionar(negociacao: Negociacao){
        this._negociacoes.push(negociacao);
    }

    getAll(){
        return this._negociacoes;
    }
}