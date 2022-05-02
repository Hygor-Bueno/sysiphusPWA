export class Points{
    #point = parseInt(localStorage.getItem('point_sisyphus')) || 0  ;
    template(){ 
        return `
            <div id="divPoint">
                <section>
                    <input type="number" id="inputPoint" min="0"/> 
                    <button type="button" data-function="rescuePoint"> - </button>
                </section>
                <h1>${this.#point}</h1>
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
        document.querySelector('#divPoint h1').innerText = this.#point;
        localStorage.point_sisyphus = this.#point;
    }
    rescuePoint(){ 
        if(document.getElementById('inputPoint').value < this.#point){             
            this.setPoint(this.#point - parseInt(document.getElementById('inputPoint').value));
        }else{
            alert('Atenção! pontos insuficientes');
        }
        document.getElementById('inputPoint').value = ""
    }
}