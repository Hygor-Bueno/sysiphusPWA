export class checklistGenerator{
    currentItem=1;
    template(){
        return `
        <div id="divCreateChecklist">
            <header>
                <h1>Criar novo Checklist</h1>                
                <div id="dayQuantits">
                    <button type="button" class="dayQuantitsButton" id="clicked_1" data-function="uniqueClicked" data-link="dayQuantitsLabel" value="1" title="Lista de tarefas para o dia"> D </button>
                    <button type="button" class="dayQuantitsButton" id="clicked_7" data-function="uniqueClicked" data-link="dayQuantitsLabel" value="7" title="Lista de tarefas para a semana" style="opacity:.5"> S </button>
                    <button type="button" class="dayQuantitsButton" id="clicked_31" data-function="uniqueClicked" data-link="dayQuantitsLabel" value="31" title="Lista de tarefas para o mês" style="opacity:.5"> M </button>
                </div> 
            </header>            
            <aside>
                <div id="checklistTitle">
                    <label>Tituli do Checklist:</label>
                    <input class="formItemsStyle" type="text" title="Titulo do Checklist" />
                </div>                    
                <div id="controllerItens">
                    <label>Quantidade de dias: </label> 
                    </br>  
                    <b>${this.currentItem} / <label id="dayQuantitsLabel">7</label></b> 
                </div>
                
            </aside>
            <section>
                <article>
                    <div id="taskDescription">
                        <label>Descrição da tarefa:</label>
                        <input class="formItemsStyle" type="text" title="Descrição da tarefa" />
                    </div>
                    <div id="checklistDate">
                        <label>Data da tarefa:</label>
                        <input class="formItemsStyle" type="date" title="data da tarefa" />
                    </div>
                    <div id="scaleValue">
                        <label>Dificuldade:</label>
                        <select class="formItemsStyle">
                            <option value="0" hidden="true">Selecione o Nível:</option>
                            <option value="1">Fácil</option>
                            <option value="2">Médio</option>
                            <option value="3">Alto</option>
                        </select>
                    </div>
                </article>
                <div id="divItemButtonGroup">
                    <button type="button" class="buttonDefualt" title="Limpar"> &#10006; </button>
                    <div>
                    <button type="button" class="buttonDefualt" title="Próximo"> &#8678; </button>
                        <button type="button" class="buttonDefualt" title="Voltar"> &#8680; </button>
                    </div>
                </div>
            </section>
           
            <footer>
                <button type="button" class="buttonDefualt"> Cancelar </button>
                <button type="button" class="buttonDefualt"> Concluir </button> 
            </footer>
        </div>
        `
    }
}