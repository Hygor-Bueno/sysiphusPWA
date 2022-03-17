export class BodyApp{
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
    }
}