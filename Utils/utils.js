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
}