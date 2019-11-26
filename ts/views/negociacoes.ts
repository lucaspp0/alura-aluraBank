class Negociacoes{
    private _negociacoes: Negociacao[] = [];
    
    public adicionar(negociacao: Negociacao): void{
        this._negociacoes.push(negociacao);
    }

    public getAll(): Negociacao[]{
        return [].concat('',this._negociacoes);
    }
}