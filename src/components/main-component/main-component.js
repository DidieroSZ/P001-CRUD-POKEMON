import { LitElement, html, css } from "lit-element";
import mainStyles from "./main-component-styles.js"; // <---- NAV STYLES
import generalStyles from "../../css/genera.css.js"; // <---- GLOBAL STYLES
import "../nav-component/nav-component.js" // <---- NAV COMPONENT
import "../pokedex-component/pokedex-component.js" // <---- POKEDEX COMPONENT
import "../party-component/party-component.js" // <---- PARTY COMPONENT


export class MainComponent extends LitElement {

    static properties = {
        pageLoc: { type: String },
    }

    constructor(){
        super();
        this.pageLoc = 'party';
    }

    firstUpdated() {

    }

    static styles = [generalStyles, mainStyles];

    render(){

        return html`
            <main class="general--sections">
                <nav-component @page-state=${this._changePage}></nav-component>
                ${this._renderPages()}
            </main>
        `;
    }

    _changePage(e){
        this.pageLoc = e.detail.page;
    }

    _renderPages(){
        switch (this.pageLoc) {
            case 'party':
            return html`<party-component></party-component>`;
            case 'pokedex':
            return html`<pokedex-component></pokedex-component>`;
            default:
            return html`<new-component></new-component>`;
        }
    }
}
customElements.define('main-component', MainComponent);