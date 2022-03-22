export class checklistGenerator{
    currentItem=1;
    template(){
        return `
        <div id="divCreateChecklist">
            <header>
                <p><b>+</b> Criar novo Checklist</p>                
                <div id="dayQuantits">
                    <button type="button" class="dayQuantitsButton" id="clicked_1" data-function="uniqueClicked" value="1" title="Lista de tarefas para o dia"> D </button>
                    <button type="button" class="dayQuantitsButton" id="clicked_7" data-function="uniqueClicked" value="7" title="Lista de tarefas para a semana" style="opacity:.5"> S </button>
                    <button type="button" class="dayQuantitsButton" id="clicked_31" data-function="uniqueClicked" value="31" title="Lista de tarefas para o mês" style="opacity:.5"> M </button>
                </div> 
            </header>            
                ${this.asideTemplate(7)}
            <section>
                
            </section>
           
            <footer>
                <button type="button" class="buttonDefualt"> Limpar </button>
                <button type="button" class="buttonDefualt"> Cancelar </button>
                <button type="button" class="buttonDefualt"> Concluir </button> 
            </footer>
        </div>
        `
    }
    asideTemplate(quantitiesItems){
        return `
            <aside>
                <div id="checklistDate">
                    <label>Data da tarefa:</label>
                    <input type="date" title="data da tarefa" />
                </div>
                <div id="controllerItens">
                    <label>Quantidade de dias: <b>${this.currentItem} / ${quantitiesItems}</b></label>
                </div>
                <div id="scaleValue">
                    <label>Dificuldade:</label>
                    <select>
                        <option value="0" hidden="true">Selecione o Nível:</option>
                        <option value="1">Fácil</option>
                        <option value="2">Médio</option>
                        <option value="3">Alto</option>
                    </select>
                </div>
            </aside>
        `
    }
}