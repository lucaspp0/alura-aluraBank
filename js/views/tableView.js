class TableView extends View {
    template(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                </tbody>
                    ${model.getAll().map(negociacao => `
                            <tr>
                                <td> ${negociacao.data.getDay} </td>
                                <td> ${negociacao.quantidade} </td>
                                <td> ${negociacao.valor} </td>
                                <td> ${negociacao.volume} </td>
                            </tr>
                        `)}
                <tfoot>
                </tfoot>
            </table>
        `;
    }
}
