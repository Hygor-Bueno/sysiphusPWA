export class ListChecklist{
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
    list(){ 
        if(localStorage.getItem('data_sisyphus')){            
            let listChecklist = JSON.parse(localStorage.data_sisyphus);
            let response = "";
            Object.keys(listChecklist).forEach(key => {
                response += `<li><i>${listChecklist[key]['title']}</i> <button data-function="deleteChecklist" value='${key}'>X</button></li>`
            })
            return `<ol>${response}</ol>`
        }
    }
    listHome(){
        
    }
    deleteChecklist(key){
        let listChecklist = JSON.parse(localStorage.data_sisyphus);
        delete listChecklist[key];
        localStorage.data_sisyphus = JSON.stringify(listChecklist);
        this.reloadList();
    }
    reloadList(){
        document.querySelector('#divListChecklist section').innerHTML = "";
        document.querySelector('#divListChecklist section').insertAdjacentHTML('beforeend',this.list())
    }
}