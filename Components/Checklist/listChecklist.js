import { Utils } from "../../Utils/utils.js";
import { Points } from "../Points/Points.js";

export class ListChecklist {
    utils = new Utils
    point = new Points
    template() { 
        return `
        <div id='divListChecklist'>
            <header>
                <h1>Checklists criados.</h1>
            </header>
            <section>
                ${this.list() || ""}
            </section>
        </div>
        `
    }
    list() {
        if (localStorage.getItem('data_sisyphus')) {
            let listChecklist = JSON.parse(localStorage.data_sisyphus);
            let response = "";
            Object.keys(listChecklist).forEach(key => {
                response += `<li><i>${listChecklist[key]['title']}</i> <button type="button" data-function="deleteChecklist" value='${key}'>X</button></li>`
            })
            return `<ol>${response}</ol>`
        }
    }
    listHome() {
        if (localStorage.getItem('data_sisyphus')) {
            let listChecklist = JSON.parse(localStorage.data_sisyphus);
            let response = "";
            Object.keys(listChecklist).forEach(key => {
                if(this.utils.biggestDate(listChecklist[key]['listItems']) >= this.utils.toDay()){                
                    response += `
                    <div class="itemChecklist" id="itemChecklist${key}">
                        <header><p>${listChecklist[key]['title']}</p><button type="button" title="Abrir checklist" data-function="controllerChecklist" value="${key}">E</button></header>
                        <section style="display: none">
                            ${this.itemsChecklistToday(listChecklist[key]['listItems'],key)}
                        </section>
                    </div>`
                }
            })
            return `${response}`
        }
    }
    itemsChecklistToday(item,keyChecklist) {
        let response ="";
        Object.keys(item).forEach(key => {
            if(item[key].date == this.utils.toDay()){
                console.log(item[key].done)
                response += `<div><input data-function="checkedItem" value=${key} data-checklist=${keyChecklist} type="checkbox" id='${item[key].idItem}' ${item[key].done && 'checked disabled'}/><i>${item[key].description}</i></div>`
            }
        })
        return response;
    }
    openChecklist(element){
        document.querySelector(`#itemChecklist${element.value} section`).style.display = 'none';
    }
    closeChecklist(element){ 
        document.querySelector(`#itemChecklist${element.value} section`).style.display = 'flex';
    }
    doneItem(element){ 
        let dataSisyphus = JSON.parse(localStorage.data_sisyphus)        
        let item = dataSisyphus[element.getAttribute('data-checklist')].listItems[element.value];
        item.done = true;
        element.disabled = true;
        this.utils.setDataSisyphus(dataSisyphus)
        this.point.setPoint(parseInt(item.level) * 20 + this.point.getPoint())
    }

    controllerChecklist(element){ 
        if(document.querySelector(`#itemChecklist${element.value} section`).style.display == 'flex'){
            this.openChecklist(element);
        }else{
            this.closeChecklist(element);
        }
    }
    deleteChecklist(key) {
        let listChecklist = JSON.parse(localStorage.data_sisyphus);
        delete listChecklist[key];
        localStorage.data_sisyphus = JSON.stringify(listChecklist);
        this.reloadList();
    }
    reloadList() {
        document.querySelector('#divListChecklist section').innerHTML = "";
        document.querySelector('#divListChecklist section').insertAdjacentHTML('beforeend', this.list())
    }
}