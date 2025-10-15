import { LitElement, html, css } from "lit-element";
import mainStyles from "./main-component-styles.js"; // <---- MAIN STYLES
import generalStyles from "../../css/genera.css.js"; // <---- GLOBAL STYLES

import "../nav-component/nav-component.js" // <---- NAV COMPONENT
import "../pokedex-component/pokedex-component.js" // <---- POKEDEX COMPONENT
import "../party-component/party-component.js" // <---- PARTY COMPONENT
import "../modal-component/modal-component.js" // <---- MODAL COMPONENT


export class MainComponent extends LitElement {
    static properties = {
        pageLoc: { type: String },
        type: { type: String },
        item: { type: String },
        mostrar: {type: Boolean},
    }
    constructor(){
        super();
        this.pageLoc = 'party';
        this.type = 'error';
        this.item = '';
        this.mostrar = false;
    }
    firstUpdated() {

    }

    static styles = [generalStyles];

    render(){
        return html`
            <main class="general--sections" @alert-modal=${this._changeType} @close-modal=${this._closeModal}>
                <nav-component @page-state=${this._changePage}></nav-component>

                <modal-component .type=${this.type} .mostrar=${this.mostrar} .item=${this.item}></modal-component>

                ${this._renderPages()}
            </main>
            
        `;
    }

    /* ---- FUNCIONES PAGE CHANGE ---- */
        _changePage(e){
            this.pageLoc = e.detail.page;
        }
        _renderPages(){
            switch (this.pageLoc) {
                case 'party':
                    return html`<party-component @delete-item=${this._closeModal}></party-component>`;
                case 'pokedex':
                    return html`<pokedex-component></pokedex-component>`;
            }
        }
    /* ---- FUNCIONES PAGE CHANGE ---- */


    /* ---- FUNCIONES TYPE CHANGE ---- */
        _closeModal(){
            this.mostrar = false;
        }
        _changeType(e){
            this.type = e.detail.type;
            this.mostrar = true;
            this.item = e.detail.id;
        }
    /* ---- FUNCIONES TYPE CHANGE ---- */
}
customElements.define('main-component', MainComponent);