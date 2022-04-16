import {Checklist} from "../../Object/Checklist.js"
import { Items } from "../../Object/Items.js";
import { Utils } from "../../Utils/utils.js";

export class ChecklistGenerator {
    currentItem = 1;
    checklist = new Checklist;    
    utils = new Utils;

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
                    <label>Quantidade máxima de dias/itens: </label> 
                    </br>  
                    <b> <label id="currentItem">${this.currentItem}</label> / <label id="dayQuantitsLabel">01</label></b> 
                </div>  
                <div id="listItems">
                    <label>Lista dos Itens:</label>
                    <div>

                    </div>
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
                    <div>
                        <button type="button" class="buttonDefualt" value="back" data-function="controllerItem" title="Voltar"> &#8678; </button>
                        <button type="button" class="buttonDefualt" value="next" data-function="controllerItem" title="Avançar"> &#8680; </button>
                    </div>
                </div>
            </section>
            <footer>
                <button type="button" data-function="cancelCehcklist" class="buttonDefualt"> Cancelar </button>
                <button type="button" data-function="finalizeChecklist" class="buttonDefualt"> Concluir </button> 
            </footer>
        </div>
        `
    }

    templateItemList(checklist){
        let response = "";
        let items = checklist.getListItems();
        Object.keys(items).forEach(element => {
            response += `<li>${items[element].getDescription()}</li>`
        });
        return `<ol type=1> ${response} </ol>`
    }

    setTitle(){ 
        document.querySelector('#checklistTitle input').addEventListener('change', ()=>{
            this.checklist.setTitle(document.querySelector('#checklistTitle input').value)
        })
        console.log(this.checklist.getTitle())
    }
    listItems(){
        let response =  '' ;    
        return response; 
    }
    controllerItems(buttonDay){
        let response = false;
        if(this.currentItem <= buttonDay.value){
            document.getElementById(buttonDay.getAttribute('data-link')).innerText = buttonDay.value
            this.checklist.setMaxItems(parseInt(buttonDay.value));
            response= true;
        }
        return response;
    }
    cleanForm(local){ 
        document.querySelectorAll(local).forEach(element=>{
            element.value = "";
        })
    }
    addCurrentItem(){  
        let maxItem = parseInt(document.getElementById('dayQuantitsLabel').innerText);     
        if(this.currentItem != maxItem){
            this.saveItem(maxItem);
        }else{
            alert(' Ops ! \n limite máximo de itens atingida. \n Por favor clicar em "Concluir"')
        }
    }
    saveItem(maxItem){
        let validation =this.utils.itemsMandatory('.mandatoryItem');
        if(this.currentItem <= maxItem &&  validation){ 
            this.addItemList()
            this.currentItem++;
            document.getElementById('currentItem').innerText = this.currentItem;
            this.cleanForm("#divCreateChecklist section article .formItemsStyle");
        }else  if(!validation){ 
            alert("Por favor, preencher todos os itens obrigatórios");
        }
    }

    addItemList(){
        let addItem = this.addItem()
        this.checklist.addItemList(addItem.getIdItem(), addItem)            
        this.addItemListHtml();
    }
    addItemListHtml(){ 
        document.querySelector('#listItems div').innerHTML = "";
        document.querySelector('#listItems div').insertAdjacentHTML('beforeend',this.templateItemList(this.checklist))
    }

    backItem(){ 
        if(this.currentItem > 1){ 
            this.currentItem--;
            document.getElementById('currentItem').innerText = this.currentItem;
        }
    }
    addItem(){ 
        let items = new Items(
            this.currentItem,
            document.querySelector('#taskDescription input').value,
            document.querySelector('#checklistDate input').value,
            document.querySelector('#scaleValue select').value,
            document.querySelector('#startTime input').value,
            document.querySelector('#endTime input').value
            );
        return items;
    }
    finalizeChecklist(){ 
        this.saveItem(parseInt(document.getElementById('dayQuantitsLabel').innerText))
        this.currentItem = 1;
        document.getElementById('currentItem').innerText=1;
        document.getElementById('clicked_1').click();
        document.querySelector('#listItems div').innerHTML = ""
        this.checklist= new Checklist;
        this.cleanForm('.formItemsStyle');
    }
}