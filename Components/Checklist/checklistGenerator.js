export class checklistGenerator{
    template(){
        return `
        <div id="divCreateChecklist">
            <header>
                <p><b>+</b> Criar novo Checklist</p>
                
                <div id="dayQuantits">
                    <button type="button" class="dayQuantitsButton" value="1" title="Lista de tarefas para o dia"> D </button>
                    <button type="button" class="dayQuantitsButton" value="7" title="Lista de tarefas para a semana" disabled> S </button>
                    <button type="button" class="dayQuantitsButton" value="31" title="Lista de tarefas para o mês" disabled> M </button>
                </div> 
            </header>            
            
            <aside>
                
            </aside>
                
            <section>
                
            </section>
           
            <footer>
                <button type="button" class="buttonDefualt"> Limpar </button>
                <button type="button" class="buttonDefualt"> Cancelar </button>
                <button type="button" class="buttonDefualt"> Enviar </button> 
            </footer>
        </div>
        `
    }
}