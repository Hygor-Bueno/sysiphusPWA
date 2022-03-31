import { Routers } from "../Routers/router.js";
import { Utils } from "../Utils/utils.js";
import { ChecklistGenerator } from "../Components/Checklist/checklistGenerator.js";

export class SisyphusTools{
    navRouter = new Routers;
    utils = new Utils;
    checklistGenerator = new ChecklistGenerator;
    pageClick(){      
        document.addEventListener("click", element=>{             
            this.validateElement(element.target) && this.filterFunction(element.target);
        })
    }

    filterFunction(element){       
        switch(element.getAttribute("data-function")){
            case 'menuViewSwitch':
                this.openOrCloseElement("#headerMenu nav");
                break;
            case 'navPages':
                this.navPages(element);
                break;
            case 'uniqueClicked':
                this.utils.selectUniqueButton(element.getAttribute("class"),element);
                this.checklistGenerator.controllerItems(element);
                break;
            case 'cleanForm':
                this.checklistGenerator.cleanForm("#divCreateChecklist section article .formItemsStyle")
                break;
            case 'controllerItem':
                element.value == 'next' ? this.checklistGenerator.addCurrentItem() : this.checklistGenerator.backItem();
                break;
            case 'cancelCehcklist':
                localStorage.setItem('router_sisyphus',"home")
                this.navRouter.router()
                break;
            case 'finalizeChecklist':
                if(this.utils.itemsMandatory('.mandatoryItem')){
                   this.checklistGenerator.finalizeChecklist();
                }else{
                    alert("Por favor, preencher todos os itens obrigatórios")
                }
                break;
            default:
                console.error("Invalid data-function");
        }
    }

    navPages(element){
        localStorage.setItem("router_sisyphus",element.getAttribute("data-pages"));
        this.navRouter.router(localStorage.getItem("router_sisyphus"));
        this.closeElement(document.querySelector("#headerMenu nav"));
    }

    validateElement(element){
        let reponse = false;
        let arrayExceptions = ["BUTTON","LI"]
        arrayExceptions.forEach(exception=>{
            if(element.tagName == exception)  reponse= true;
        })
        return reponse;
    } 

    openOrCloseElement(local){
        let displayElement = document.querySelector(local);       
        if(displayElement.style.display == "none"){
            this.openElement(displayElement)
        }else{
            this.closeElement(displayElement)
        }
    }
    openElement(displayElement){
        displayElement.style.display = 'flex';
    }
    closeElement(displayElement){
        displayElement.style.display = 'none'
    }
}