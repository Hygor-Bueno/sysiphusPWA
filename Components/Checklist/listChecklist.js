export class ListChecklist{
    limit = 5;
    template() {
        return `
        <div id='divListChecklist'>
            <header>
                <h1>Checklists criados.</h1>
            </header>
            <section>
                ${this.list()}
            </section>
        </div>
        `   
    }
    list(){ 
        let listChecklist = JSON.parse(localStorage.data_sisyphus);
        let response = "";
        Object.keys(listChecklist).forEach(key => {
            response += `<li><i>${listChecklist[key]['title']}</i> <button valur='${listChecklist[key]['id']}'>&#128465;</button></li>`
        })
        return `<ol>${response}</ol>`
    }
}