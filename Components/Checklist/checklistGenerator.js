export class checklistGenerator{
    template(){
        return `
        <div id="divCreateChecklist">
            <header>
                <p><b>+</b> Criar novo Checklist</p>                
                <div id="dayQuantits">
                    <button type="button" class="dayQuantitsButton" id="clicked_1" data-function="uniqueClicked" value="1" title="Lista de tarefas para o dia"> D </button>
                    <button type="button" class="dayQuantitsButton" id="clicked_7" data-function="uniqueClicked" value="7" title="Lista de tarefas para a semana" style="opacity:.5"> S </button>
                    <button type="button" class="dayQuantitsButton" id="clicked_31" data-function="uniqueClicked" value="31" title="Lista de tarefas para o mês" style="opacity:.5"> M </button>
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