import { Routers } from "../Routers/router.js";

export class Modal {
    routers = new Routers;
    config = {
        alert: {
            title: 'Atenção !',
            footer: false
        },
        confirm: {
            title: "Você tem certeza?",
            footer: true
        }
    }

    modalAlert(message, type, object,key) {
        let response = `
        <div id="modalSysiphus">                            
            <section>
                <div class="title">
                    ${!this.config[type].footer ? '<button type="button" data-function="closeModal">X</button>':""}
                    <h3>${this.config[type].title}</h3>
                </div>
                <div class="message">
                    <p>${message}</p>
                </div>
                ${this.config[type].footer ? `
                <div class="footer">
                    <button type="button" title="Confirmar" value="1">confirmar</button>
                    <button type="button" title="Cancelar"> cancelar </button>
                </div>`: ''
            }
                
            </section>
        </div>`
        document.querySelector('body').insertAdjacentHTML('beforeend', response);
        if (type == 'confirm') this.confirmButton(object,key);
    }
    close() {
        document.getElementById('modalSysiphus').remove();
    }
    confirmButton(object,key) {
        document.querySelector('#modalSysiphus .footer').addEventListener('click', (value) => {
            if (value.target.value == "1") {
                object[key]();
            }else{
                this.routers.router()
            }
            this.close();
        })
    }
}