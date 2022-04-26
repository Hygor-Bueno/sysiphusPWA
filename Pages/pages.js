import { ChecklistGenerator } from "../Components/Checklist/checklistGenerator.js"
import { ListChecklist } from "../Components/Checklist/listChecklist.js";


export class Pages{
    checklistGenerator = new ChecklistGenerator;
    listChecklist = new ListChecklist;

    newChecklist(){
        return`
            <section id="pageNewChecklist">
                <div id="createChecklist">
                    ${this.checklistGenerator.template()}
                </div>
                <div id="viewChecklist">
                    ${this.listChecklist.template()}
                </div>
            </section>
        `
    }
    home(){
        return`<img src="./Assets/Images/ImageSisifu/SisifuColor.png" title="Logo Sisiphus System"/>`
    }
}