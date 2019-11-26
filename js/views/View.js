class View {
    constructor(dom) {
        this._element = document.querySelector(dom);
    }
    update(model) {
        this._element.innerHTML = this.template(model);
    }
}
