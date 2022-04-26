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
        console.log(Object.keys(listChecklist))
        return '<p>PQP</p>'
    }
}