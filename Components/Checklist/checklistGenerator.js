export class ChecklistGenerator{
    currentItem = 1;
    template(){
        return `
        <div id="divCreateChecklist">
            <header>
                <h1>Criar novo Checklist</h1>                
                <div id="dayQuantits">
                    <button type="button" class="dayQuantitsButton" id="clicked_1" data-function="uniqueClicked" data-link="dayQuantitsLabel" value="01" title="Lista de tarefas para o dia"> D </button>
                    <button type="button" class="dayQuantitsButton" id="clicked_7" data-function="uniqueClicked" data-link="dayQuantitsLabel" value="07" title="Lista de tarefas para a semana" style="opacity:.5"> S </button>
                    <button type="button" class="dayQuantitsButton" id="clicked_31" data-function="uniqueClicked" data-link="dayQuantitsLabel" value="31" title="Lista de tarefas para o mês" style="opacity:.5"> M </button>
                </div> 
            </header>            
            <aside>
                <div id="checklistTitle">
                    <label>Titulo do Checklist:</label>
                    <input class="formItemsStyle" type="text" title="Titulo do Checklist" />
                </div>                    
                <div id="controllerItens">
                    <label>Quantidade máxima de dias: </label> 
                    </br>  
                    <b>${this.currentItem} / <label id="dayQuantitsLabel">01</label></b> 
                </div>               
            </aside>
            <section>
                <article>
                    <div id="taskDescription" class="mandatoryItem">
                        <label><b>* </b>Descrição da tarefa:</label>
                        <input class="formItemsStyle" type="text" title="Descrição da tarefa" />
                    </div>
                    <div id="checklistDate" class="mandatoryItem">
                        <label><b>* </b>Data da tarefa:</label>
                        <input class="formItemsStyle" type="date" title="data da tarefa" />
                    </div>
                    <div id="scaleValue" class="mandatoryItem">
                        <label><b>* </b>Dificuldade:</label>
                        <select class="formItemsStyle">
                            <option value="0" hidden="true">Selecione o Nível:</option>
                            <option value="1">Fácil</option>
                            <option value="2">Médio</option>
                            <option value="3">Alto</option>
                        </select>
                    </div>
                    <div id="startTime">
                        <label>Início (hr):</label>
                        <input class="formItemsStyle" type="time" title="Hora inicial da tarefa" />
                    </div>
                    <div id="endTime">
                        <label>Fim (hr):</label>
                        <input class="formItemsStyle" type="time" title="Hora final da tarefa">
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
    controllerItens(buttonDay){
        document.getElementById(buttonDay.getAttribute('data-link')).innerText = buttonDay.value
    }
}