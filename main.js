


import { PageApp } from "./Components/Page/page.js";
import { Routers } from "./Routers/router.js";
import { SisyphusTools } from "./tools/tools .js";

var pageApp = new PageApp;
var tools= new SisyphusTools;
var router = new Routers;

(function app() {
    document.querySelector('body').innerHTML ="";
    document.querySelector('body').insertAdjacentHTML("beforeend", pageApp.template());
    !localStorage.getItem("router_sisyphus") && localStorage.setItem("router_sisyphus","home");
    router.router();
    tools.pageClick()
})();