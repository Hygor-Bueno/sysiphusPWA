import { checklistGenerator } from "../Components/Checklist/checklistGenerator.js"


export class Pages{
    checklistGenerator = new checklistGenerator
    newChecklist(){
        return`
            <section id="pageNewChecklist">
                <div id="createChecklist">
                    <h1>Parte para criar lista de tarefas</h1>
                    ${this.checklistGenerator.template()}
                </div>
                <div id="viewChecklist">
                    <h1>Ferramenta para vizualizar os checklists criados</h1>
                </div>
            </section>
        `
    }
    home(){
        return`<img src="./Assets/Images/ImageSisifu/SisifuColor.png" title="Logo Sisiphus System"/>`
    }
}