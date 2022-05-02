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
        console.log(this.#point);
    }
    reloadPoint(){ 
        document.querySelector('#divPoint h1').innerText = this.#point;
        localStorage.setItem('point_sisyphus',this.#point);
    }
    rescuePoint(){ 
        let point = parseInt(localStorage.getItem('point_sisyphus')) || 0
        if(document.getElementById('inputPoint').value < point){     
            this.setPoint(point - parseInt(document.getElementById('inputPoint').value));
        }else{
            alert('Atenção! pontos insuficientes');
        }
        document.getElementById('inputPoint').value = ""
    }
}