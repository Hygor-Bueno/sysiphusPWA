export class Utils{
    selectUniqueButton(elementClass,elementException){        
        document.querySelectorAll(`.${elementClass}`).forEach(eClass =>{
            eClass.getAttribute("id") == elementException.getAttribute("id") ? eClass.setAttribute("style","opacity:1"):eClass.setAttribute("style","opacity:.5")
        })
    }
    itemsMandatory(elements){ 
        let response = true;
        document.querySelectorAll(elements).forEach(element =>{
            if(document.querySelector(`#${element.getAttribute("id")} :nth-child(2)`).value == ""){ 
                response = false
            }
        })
        return response;
    }
    highestValue(items){ 
        let aux = 0;
        items.forEach(item => {
            if(item > aux){
                aux = item;
            }
        })
        return aux;
    }
    minutesForHour(minutes) {
        const hour = Math.floor(minutes / 60);
        const min = minutes % 60;
        const textHour = (`00${hour}`).slice(-2);
        const textMinutes = (`00${min}`).slice(-2);

        return `${textHour}:${textMinutes}`;
    }
    hourForMinutes(hour) {
        let HHmm = hour.split(":");
        let validHour = HHmm[0] == '00' ? 24 : HHmm[0]
        let reponse = (( Number(validHour) * 60 ) + Number(HHmm[1]));
        return reponse;
    }
}