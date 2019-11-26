class Negociacao {
    constructor(_quantidade, _valor, _data) {
        this._quantidade = _quantidade;
        this._valor = _valor;
        this._data = _data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get data() {
        return this._data;
    }
    get volume() {
        return this._valor * this._quantidade;
    }
}
