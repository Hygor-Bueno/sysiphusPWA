export class HeaderApp{
    template(){
        return`
            <header id="headerMenu">  
                <div id="divHeader">
                    <div id="divTitleApp">
                        <img src="./Assets/Images/ImageSisifu/Sisifu.png" title="Logo Sisiphus System"/>
                        <h1> Sisyphus System </h1>
                    </div>
                    <button data-function="menuViewSwitch" title="Botão que abre ou fecha o menu">&#9776;</button>
                </div>     
                ${this.menu()}         
            </header>
        `
    }
    menu(){
        return`
            <nav style="display:none">
                <ul>
                    <li data-function="navPages" data-pages="home">Página Inicial</li>
                    <li data-function="navPages" data-pages="newChecklist">Adicionar Checklist</li>
                </ul>
            </nav>
        `
    }
}