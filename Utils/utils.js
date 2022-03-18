export class Utils{
    selectUniqueButton(elementClass,elementException){
        
        document.querySelectorAll(`.${elementClass}`).forEach(eClass =>{
            console.log(eClass.getAttribute("id")==elementException.getAttribute("id"))
            eClass.getAttribute("id") == elementException.getAttribute("id") ? eClass.setAttribute("style","opacity:1"):eClass.setAttribute("style","opacity:.5")
        })
    }
}