import { LitElement, html, css } from "lit-element";
import { createIcons, icons } from 'lucide'; // LUCIDE ICONS 
import mainStyles from "./main-component-styles.js"; // <---- NAV STYLES
import generalStyles from "../../css/genera.css.js"; // <---- GLOBAL STYLES
import "../nav-component/nav-component.js" // <---- NAV COMPONENT
import "../pokedex-component/pokedex-component.js" // <---- POKEDEX COMPONENT


export class MainComponent extends LitElement {

    firstUpdated() {
        createIcons({ 
            icons, 
            attrs: { width: 24, height: 24 },
            nameAttr: 'data-lucide',
            element: this.renderRoot
        });
    }

    static styles = [generalStyles, mainStyles];

    static properties = {

    }

    constructor(){
        super();
    }

    render(){
        return html`
        <main class="general--sections  ">
            <nav-component></nav-component>

            <pokedex-component></pokedex-component>
        </main>
            
        `;
    }
}
customElements.define('main-component', MainComponent);