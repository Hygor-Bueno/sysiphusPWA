export class HeaderApp{
    template(){
        return`
            <header id="headerMenu">  
                <div id="divHeader">
                    <button data-function="menuViewSwitch" title="Botão que abre ou fecha o menu">&#9776;</button>
                    <div id="divTitleApp">
                        <img src="./Assets/Images/ImageSisifu/Sisifu.png" title="Logo Sisiphus System"/>
                        <h1> Sisyphus System </h1>
                    </div>
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
                    <li data-function="navPages" data-pages="newChecklist">Nova Lista de Tarefas</li>
                    <li data-function="navPages" data-pages="points">Gerenciar Pontos</li>
                </ul>
            </nav>
        `
    }
}