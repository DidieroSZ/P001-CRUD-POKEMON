import { LitElement, html, css } from "lit-element";
import modalStyles from "./nav-component-styles.js"; // <---- NAV STYLES
import generalStyles from "../../css/genera.css.js"; // <---- GLOBAL STYLES


export class ModalComponent extends LitElement {

    static properties = {
        msg: {type: String},
        type: {type: String},
    }

    constructor(){
        super();
        this.msg = ';'
        this.type = ';'
    }

    firstUpdated() {

    }

    static styles = [generalStyles, modalStyles];

    render(){
        return html`
            <modal class="modal">
                <div>
                    <button Qclick=${this._closeModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                    </button>
                </div>
                <hr>
                ${this._renderType()}
            </modal>

        `;
    }


    _closeModal(){

    }

    _renderPages(){
        switch (this.pageLoc) {
            case 'error':
            return html`
            <div></div>
            
            `;
            
            case 'edit':
            return html``;

            case 'delete':
            return html``;
        }
    }
}
customElements.define('modal-component', ModalComponent);