import { BodyApp } from "../Components/Body/body.js";
import { Pages } from "../Pages/pages.js";

export class Routers{
    router(){
        let pages = new Pages;
        let content = new BodyApp;
        if(document.getElementById("contentDefault")) document.getElementById("contentDefault").innerHTML = "" // Limpa a sessão de conteúdo ante de inserir o novo elemento.
        content.loadContent(pages[localStorage.getItem("router_sisyphus")]()) 
    }
}