class Negociacao{
    
    constructor(private _quantidade: number, private _valor: number, private _data: Date) {}

    get quantidade(): number{
        return this._quantidade;
    }

    get valor(): number{
        return this._valor;
    }
    get data(): Date{
        return this._data;
    }

    get volume(): number{
        return this._valor * this._quantidade;
    }
    
}