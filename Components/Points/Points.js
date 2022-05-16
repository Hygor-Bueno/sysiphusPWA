import { Utils } from "../../Utils/utils.js";
import { Modal } from "../modal.js";

export class Points{
    utils = new Utils;
    modal = new Modal;
    #point = parseInt(localStorage.getItem('point_sisyphus')) || 0  ;
    template(){ 
        return `
        <div id="divPoint">
            <header>
                <h1>Pontos Acúmulados: </h1>
            </header>
            <section>
                <article>                    
                    <input step="1" type="number" id="inputPoint" min="0" placeholder="0"/> 
                    <button type="button" data-function="rescuePoint"> - </button>
                </article>
                <div><h1>${this.#point}</h1><i>/ ${this.utils.minutesForHour(this.#point)}${this.utils.minutesForHour(this.#point).split(':')[0] > 0? 'hrs':'min'} </i></div>
            </section>
        </div>
        `
    }
    getPoint(){
        return this.#point;
    }
    setPoint(point){        
        this.#point = point;
        this.reloadPoint();
    }
    reloadPoint(){ 
        document.querySelector('#divPoint section h1').innerText = this.#point;
        document.querySelector('#divPoint section i').innerText = `/ ${this.utils.minutesForHour(this.#point)}${this.utils.minutesForHour(this.#point).split(':')[0] > 0? 'hrs':'min'}`;
        localStorage.setItem('point_sisyphus',this.#point);
    }
    rescuePoint(){ 
        let balance = parseInt(localStorage.getItem('point_sisyphus')) || 0;
        let debt = document.getElementById('inputPoint').value || 0;
        let methods = [{method:this.balanceValue,params:[balance,debt]},{method:this.valueInteger,params:debt}];
        let response = this.validationMultiple(methods);
        if(!response.error){     
            this.setPoint(balance - parseInt(debt) );
        }else{
            this.modal.modalAlert(response.message,'alert');
        }
        document.getElementById('inputPoint').value = ""
    }
    validationMultiple(validation){ 
        let reponse = {
            error:false,
            message: ''
        };
        validation.forEach( element =>{
            let validateElement = element.method(element.params);
            if(validateElement.error){
                reponse.error = validateElement.error;
                reponse.message += validateElement.message + " \n ";
            }
        })
        return reponse;
    }
    balanceValue(balanceDebt){ 
        let value = [...balanceDebt];
        let response={
            error: false,
            message: 'sucess'
        };
        if(parseInt(value[1]) > parseInt(value[0])){ 
            response = {
                error:true,
                message: 'Atenção! pontos insuficientes.'
            }
        }
        return response;
    }
    valueInteger(debt){
        let response={
            error: false,
            message: 'sucess'
        };
        let analyze = () =>{
            let ignore = ['.',','], resp = false
            ignore.forEach(element =>{debt.replace(element,()=>{resp = true})})
            return resp;
        };
        if(analyze()) response =  {
            error:true,
            message:"Por favor, digite apenas números inteiros (sem '.' ou ',')."
        };
        return response;
    }
}