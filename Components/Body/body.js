import { ListChecklist } from "../Checklist/listChecklist.js";

export class BodyApp{
    listChecklist = new ListChecklist;
    template(){
        return`
        <section id="bodyContent">
            <div id="contentDefault">
            </div>           
        </section>
        `
    }
    loadContent(elementHTML){       
        document.getElementById("contentDefault").insertAdjacentHTML("beforeend",elementHTML);
        this.setting();
    }
    setting(){ 
        this.listChecklist.settingsList();
    }
}