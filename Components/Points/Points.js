import { Utils } from "../../Utils/utils.js";

export class Points{
    utils = new Utils;
    #point = parseInt(localStorage.getItem('point_sisyphus')) || 0  ;
    template(){ 
        return `
        <div id="divPoint">
            <header>
                <h1>Pontos Acúmulados: </h1>
            </header>
            <section>
                <article>                    
                    <input type="number" id="inputPoint" min="0" placeholder="0"/> 
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
        let point = parseInt(localStorage.getItem('point_sisyphus')) || 0
        if(document.getElementById('inputPoint').value <= point){     
            this.setPoint(point - parseInt(document.getElementById('inputPoint').value || 0));
        }else{
            alert('Atenção! pontos insuficientes');
        }
        document.getElementById('inputPoint').value = ""
    }
}