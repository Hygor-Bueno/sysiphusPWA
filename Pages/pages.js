import { ChecklistGenerator } from "../Components/Checklist/checklistGenerator.js"
import { ListChecklist } from "../Components/Checklist/listChecklist.js";
import { HomeTemplate } from "../Components/Home/homeTemplate.js";



export class Pages{
    checklistGenerator = new ChecklistGenerator;
    listChecklist = new ListChecklist;
    homeTemplate = new HomeTemplate;
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
        let response = "";
        if(localStorage.data_sisyphus){
            response = this.homeTemplate.template(); 
        }else{
            response = `<img src="./Assets/Images/ImageSisifu/SisifuColor.png" title="Logo Sisiphus System"/>`
        }
        return response;
    }
}