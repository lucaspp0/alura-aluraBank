abstract class View<T>{

    protected _element: HTMLElement;
    protected _value: T;

    constructor(dom: string){
        this._element = <HTMLElement> document.querySelector(dom);
    }

    update(model: T): void{
        this._element.innerHTML = this.template(model);
    }

    abstract template(model: T): string;

}