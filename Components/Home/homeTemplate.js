import { ListChecklist } from "../Checklist/listChecklist.js";

export class HomeTemplate{
    listChecklist = new ListChecklist;
    template() {        
        return `
            <div id="divTemplateHome">
                <p>Deu bom companheiro! </p>
                ${this.listChecklist.listHome()}
            </div>
        `
    }
 
}