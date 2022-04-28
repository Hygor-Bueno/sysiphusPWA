import { Utils } from "../../Utils/utils.js";

export class ListChecklist {
    utils = new Utils
    dataSisyphus = localStorage.data_sisyphus ? JSON.parse(localStorage.data_sisyphus): "";
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
                response += `
                <div class="itemChecklist" id="itemChecklist${key}">
                    <header><p>${listChecklist[key]['title']}</p><button type="button" title="abrir checklist" data-function="controllerChecklist" value="${key}">E</button></header>
                    <section style="display: none">
                        ${this.itemsChecklistToday(listChecklist[key]['listItems'])}
                    </section>
                </div>`
                
            })
            return `${response}`
        }
    }
    itemsChecklistToday(item) {
        let response ="";
        Object.keys(item).forEach(key => {
            if(item[key].date == this.utils.toDay()){
                console.log(item[key].done)
                response += `<div><input data-function="checkedItem" type="checkbox" id='${item[key].idItem}' ${item[key].done && 'checked disabled'}/><i>${item[key].description}</i></div>`
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