class MessageView extends View<string>{
    
    template(model: string): string{
        return ` <div class="alert alert-dialgo alert-info closable"> ${model} </dic> `;
    }

}