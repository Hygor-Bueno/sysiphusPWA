import { ListChecklist } from "../Checklist/listChecklist.js";
import { Points } from "../Points/Points.js";

export class HomeTemplate{
    listChecklist = new ListChecklist;
    points = new Points;
    template() {        
        return `
            <div id="divTemplateHome">
                ${this.points.template()}
                ${this.listChecklist.listHome()}
            </div>
        `
    }
 
}