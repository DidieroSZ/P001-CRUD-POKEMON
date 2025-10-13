import { LitElement, html, css } from "lit-element";
import modalStyles from "./modal-component-styles.js"; // <---- NAV STYLES
import generalStyles from "../../css/genera.css.js"; // <---- GLOBAL STYLES


export class ModalComponent extends LitElement {

    createRenderRoot() {
        return this;
    }

    static properties = {
        type: {type: String},
        item: {type: String},
        mostrar: {type: Boolean},
    }
    constructor(){
        super();
        this.type = '';
        this.item = '';
        this.mostrar = false;
    }
    firstUpdated() {

    }

    /* static styles = [generalStyles, modalStyles]; */

    render(){
        if (this.mostrar) {
            return html`
                <section class="modal--container d-flexx" id="modal">
                    <modal class="modal d-flexx d-col">
                            <div class="close">
                                <button @click=${this._closeModal} class="btn-general d-flexx d-col">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                                </button>
                            </div>
                            <div class="mensaje--container d-flexx d-row">
                                ${this._renderType()}
                            </div>
                            
                        </modal>
                </section>
            `;
        }
    }


    _closeModal(){
        this.mostrar = false;
        this.dispatchEvent(
            new CustomEvent('close-modal', {
                bubbles: true,
                composed: true
            })
        );
    }
    _deleteItem(){
        const pokemones = this._getLocal('pokemones');
        pokemones.splice(this.item, 1);
        localStorage.setItem('pokemones', JSON.stringify(pokemones));
        this._closeModal();
        window.location.reload();
    }

        _getLocal(nombre) {
            const data = localStorage.getItem(nombre);
            return data ? JSON.parse(data) : null;
        }

    _renderType(){
        console.log('MODAL');
        switch (this.type) {
            case 'error':
                return html`
                    <p class="text-msg error--msg d-flexx">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                        ¡Verifica la información ingresada en los campos!
                    </p>
                
                `;
            
            case 'edit':
            return html`<div></div>`;

            case 'delete':
                return html`
                    <p class="text-msg war--msg d-flexx">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert-icon lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                        ¿Confirmas la accion de eliminar?
                    </p>
                    <button class="btn-modal btn-general" @click=${this._closeModal}>Cancelar</button>
                    <button class="btn-modal btn-general btn-eliminar" @click=${this._deleteItem}>Eliminar</button>
                `;
        }
    }
}
customElements.define('modal-component', ModalComponent);