import { Checklist } from "../../Object/Checklist.js"
import { Items } from "../../Object/Items.js";
import { Utils } from "../../Utils/utils.js";

export class ChecklistGenerator {
    currentItem = 1;
    taskId=1;
    checklist = new Checklist;
    utils = new Utils;

    template() {
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
                <div id="checklistDate" class="mandatoryItem">
                        <label><b>* </b>Data da tarefa:</label>
                        <input class="formItemsStyle" type="date" title="data da tarefa" />
                </div>                   
                <div id="controllerItens">
                    <label>Qtd. máx. de dias: </label> 
                    </br>  
                    <b> <label id="currentItem">${this.currentItem}</label> / <label id="dayQuantitsLabel">01</label></b> 
                </div>  
                <div id="listItems">
                    <label>Lista dos Itens:</label>
                    <div>
                        <ol>
                        </ol>
                    </div>
                </div>          
                <button type="button" id="buttonNextDay" class="buttonDefualt" value="next" data-function="nextDay" title="Avançar"> &#10149; </button>                  
            </aside>
            <section>
                <article>
                    <div id="taskDescription" class="mandatoryItem">
                        <label><b>* </b>Descrição da tarefa:</label>
                        <input class="formItemsStyle" type="text" title="Descrição da tarefa" />
                    </div>
                    
                    <div id="scaleValue" class="mandatoryItem">
                        <label><b>* </b>Dificuldade:</label>
                        <select class="formItemsStyle">
                            <option value="" hidden="true">Selecione o Nível:</option>
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
                    <button type="button" class="buttonDefualt" data-function="cleanForm" title="Limpar"> &#10006; </button>
                    <button type="button" class="buttonDefualt" value="next" data-function="controllerItem" title="Avançar">&#10132;</button>
                </div>   
            </section>
            <footer>
                <button type="button" data-function="cancelCehcklist" class="buttonDefualt"> Cancelar </button>
                <button type="button" data-function="finalizeChecklist" class="buttonDefualt"> Concluir </button> 
            </footer>
        </div>
        `
    }

    templateItemList(item) {   
        document.querySelector('#listItems div ol').insertAdjacentHTML('beforeend',`<li>${item}</li>`) 
    }

    setTitle() {
        document.querySelector('#checklistTitle input').addEventListener('change', () => {
            this.checklist.setTitle(document.querySelector('#checklistTitle input').value)
        })
    }
    controllerItems(buttonDay) {
        let response = false;
        if (this.currentItem <= buttonDay.value) {
            document.getElementById(buttonDay.getAttribute('data-link')).innerText = buttonDay.value
            this.checklist.setMaxItems(parseInt(buttonDay.value));
            response = true;
        }
        return response;
    }
    cleanForm(local) {
        document.querySelectorAll(local).forEach(element => {
            element.value = "";
        })
    }
    addCurrentItem() {
            this.saveItem();    
    }
    nextDay(){
        if (this.currentItem < this.checklist.getMaxItems() && document.querySelector('#listItems div ol li')){
            this.currentItem++;
            document.getElementById('currentItem').innerText = this.currentItem;
            document.querySelector('#listItems div ol').innerHTML = "";
            this.cleanForm('#checklistDate input');
        }else if(this.currentItem >= this.checklist.getMaxItems() && document.querySelector('#listItems div ol li') ){ 
            alert(' Ops ! \n limite máximo de itens atingida. \n Por favor clicar em "Concluir"')
        }else{
            alert('Para ir para o próximo dia, adicione ao menos um item.')
        }
    }
    saveItem() {
        let validation = this.utils.itemsMandatory('.mandatoryItem');
        if(validation) {
            this.addItemList()            
            this.cleanForm("#divCreateChecklist section article .formItemsStyle");
        } else if (!validation) {
            alert("Por favor, preencher todos os itens obrigatórios");
        }
    }

    addItemList() {
        let addItem = this.addItem()
        this.checklist.addItemList(addItem.getIdItem(), addItem.returnItem())
        this.templateItemList(addItem.getDescription());
        this.taskId++;
    }

    backItem() {
        if (this.currentItem > 1) {
            this.currentItem--;
            document.getElementById('currentItem').innerText = this.currentItem;
        }
    }
    addItem() {
        let items = new Items(
            this.taskId,
            document.querySelector('#taskDescription input').value,
            document.querySelector('#checklistDate input').value,
            document.querySelector('#scaleValue select').value,
            document.querySelector('#startTime input').value,
            document.querySelector('#endTime input').value
        );
        return items;
    }
    finalizeChecklist() {
        this.checklist.setTitle(document.querySelector('#checklistTitle input').value);
        console.log(this.checklist)
        this.saveChecklist();
        this.cleanFormGeneral();
        this.cleanForm('.formItemsStyle');
    }
    saveChecklist() {
        let listChecklist = JSON.parse(localStorage.getItem('data_sisyphus')) || "";
        if (listChecklist) {
            let lastId = parseInt(this.utils.highestValue(Object.keys(listChecklist))) + 1
            listChecklist[lastId] = this.checklist.returnCheckslist();
            localStorage.setItem('data_sisyphus', JSON.stringify(listChecklist));
        } else {
            localStorage.setItem('data_sisyphus', JSON.stringify({ 1: this.checklist.returnCheckslist() }))
        }
    }
    cleanFormGeneral() {
        this.currentItem = 1;
        document.getElementById('currentItem').innerText = 1;
        document.getElementById('clicked_1').click();
        document.querySelector('#listItems div ol').innerHTML = ""
        this.checklist = new Checklist;
    }
}