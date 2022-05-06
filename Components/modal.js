export class Modal{

    config = {
        alert:{
            title:'Atenção !',
            footer:false
        },
        confirm:{
            title:"Você tem certeza?",
            footer:true
        }
    }

    modalAlert(message,type){
        let response = `
        <div id="modalSysiphus">                            
            <section>
                <div class="title">
                    <button type="button" data-function="closeModal">X</button>
                    <h3>${this.config[type].title}</h3>
                </div>
                <div class="message">
                    <p>${message}</p>
                </div>
                ${this.config[type].footer ? `
                <div class="footer">
                    <button type="button" data-function="confirmModal">confirmar</button>
                    <button type="button" data-function="cancelModal">cancelar</button>
                </div>`:''
                }
                
            </section>
        </div>
                        `
        document.querySelector('body').insertAdjacentHTML('beforeend',response);
    }
    close(){
        document.getElementById('modalSysiphus').remove();
    }
}