class Negociacao{

    constructor(private _quantidade: number, private _valor: number, private _data: Date) {}

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }
    get data(){
        return this._data;
    }
    
}