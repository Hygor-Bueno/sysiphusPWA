import { BodyApp } from "../Body/body.js";
import { HeaderApp } from "../Header/header.js";

export class PageApp{
    #headerApp = new HeaderApp;
    #bodyApp = new BodyApp;

    template() {
        return`
            ${this.#headerApp.template() + this.#bodyApp.template()}
        `
    }

}