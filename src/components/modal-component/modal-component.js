import { LitElement, html, css } from "lit-element";
import modalStyles from "./modal-component-styles.js"; // <---- NAV STYLES
import generalStyles from "../../css/genera.css.js"; // <---- GLOBAL STYLES
import { getLocal, setLocal, reloadPage } from "../../utils/common.js";

export class ModalComponent extends LitElement {

    createRenderRoot() {
        return this;
    }

    static properties = {
        type: {type: String},
        item: {type: String},
        
        mostrar: {type: Boolean},
        tiposSeleccionados: {type: Array},
        arrayTypes: {type: Array},

        nombre2: {type: String},
    }
    constructor(){
        super();
        this.type = '';
        this.nombre2 = '';
        this.item = '';
        this.mostrar = false;
        this.tiposSeleccionados = [];
         this.arrayTypes = [
            'Water', 'Fire', 'Grass', 'Electric', 'Rock', 'Ground', 'Normal', 
            'Fighting', 'Dark', 'Steel', 'Psychic', 'Ghost', 'Bug', 
            'Poison', 'Flying', 'Fairy', 'Ice', 'Dragon'
        ];
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


    /* ---- FUNCIONES ITEMS ---- */
        _deleteItem(){
            const pokemones = getLocal('pokemones');
            pokemones.splice(this.item, 1);
            setLocal('pokemones', pokemones);
            this._closeModal();
            reloadPage();
        }
        _loadInformation(data){
            const pokemones = getLocal('pokemones');
            const pI = pokemones[this.item];
            return pI[data];
        }
        _validateForm(e){
            e.preventDefault();
            const id = this.renderRoot.querySelector('#id').value;
            const pos = this.renderRoot.querySelector('#pos').value;
            const nombre = this.renderRoot.querySelector('#nombre').value.trim();
            const peso = parseFloat(this.renderRoot.querySelector('#peso').value);
            const altura = parseFloat(this.renderRoot.querySelector('#altura').value);
            const alerta = this.renderRoot.querySelector('.form--container > .error--msg');

            this._handleCheckboxChange();
            const long = this.tiposSeleccionados.length;
            if ((!nombre) || (isNaN(peso)) || (isNaN(altura)) || (long === 0) || (long >= 3) || (altura < 0) || (peso < 0)) {
                alerta.style.display = 'flex';
                return;
            } 
            this._editItem(pos, id, nombre, peso, altura, this.tiposSeleccionados);
        }
        _editItem(pos, id, n, p, a, ts){           
            const pokemones = getLocal('pokemones');
            const pokemonesObject = {
                id: id,
                nombre: n,
                peso: p,
                altura: a,
                tipos: ts,
            };
            pokemones[pos] = pokemonesObject
            
            setLocal('pokemones', pokemones);
            this._closeModal();
            reloadPage();
        }
    /* ---- FUNCIONES ITEMS ---- */


    /* ---- FUNCIONES TIPOS ---- */
        _multipleTypes(tipos){
            return html`
            <p>Máximo 2 tipos por pokemon:</p>
            <div class="tipos--container d-flexx d-row">
                ${this.arrayTypes.map((nombre) => {
                    const checked = tipos.includes(nombre);
                    return html` 
                        <div class="check--container">
                            <input type="checkbox" id="${nombre}" value="${nombre}" ?checked=${checked} @change=${this._handleCheckboxChange}>
                            <label for="${nombre}">${nombre}</label>
                        </div>
                    `;
                    
                })}
            </div>
            `;
        }
        _handleCheckboxChange(e) {
            if (e) {
                const { value, checked } = e.target;
                this._cehckeds(checked, value);
            }
            else{
                const checks = this.renderRoot.querySelectorAll('input[type="checkbox"]');
                this.tiposSeleccionados = [];
                checks.forEach(c => {
                    const { value, checked } = c;
                    this._cehckeds(checked, value);
                });
            }
        }
        _cehckeds(checked, value){
            if (checked) {
                this.tiposSeleccionados = [...this.tiposSeleccionados, value];
            } else {
                this.tiposSeleccionados = this.tiposSeleccionados.filter(v => v !== value);
            }
        }
    /* ---- FUNCIONES TIPOS ---- */


    /* ---- FUNCIONES MODAL ---- */
        _closeModal(){
            this.mostrar = false;
            this.dispatchEvent(
                new CustomEvent('close-modal', {
                    bubbles: true,
                    composed: true
                })
            );
        }
        _renderType(){
            switch (this.type) {
                case 'error':
                    return html`
                        <p class="text-msg error--msg d-flexx">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                            ¡Verifica la información ingresada!
                        </p>
                    `;
                
                case 'edit':
                    
                    return html`
                    
                        <p class="text-msg edit--msg d-flexx">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-line-icon lucide-pencil-line"><path d="M13 21h8"/><path d="m15 5 4 4"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>
                            Editar información de Pokémon
                        </p>
                        <form class="general--sections form--edit form--container d-flexx" @submit=${this._validateForm}>
                            <div class="form--sides left--form d-flexx d-col">
                                <p>Agregar un nuevo Pokemon:</p>
                                <input type="hidden"  id="id" value="${this._loadInformation('id')}">
                                <input type="hidden"  id="pos" value="${this.item}">
                                <input type="text" class="input-general" id="nombre" placeholder="Nombre" value="${this._loadInformation('nombre')}">
                                <input type="number" class="input-general" id="peso" placeholder="Peso (kg)" value="${this._loadInformation('peso')}" step="0.1">
                                <input type="number" class="input-general" id="altura" placeholder="Altura (m)" value="${this._loadInformation('altura')}" step="0.1">
                            </div>
                             
                            <div class="form--sides rigth--form d-flexx d-col">
                                ${this._multipleTypes(this._loadInformation('tipos'))}
                            </div>

                            <p class="text-msg error--msg d-flexx">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-x-icon lucide-circle-x"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
                                ¡Verifica la información ingresada!
                            </p>
                            <button type="submit" class="btn-modal btn-general btn-editar">Editar</button>
                        </form>
                    `;

                case 'delete':
                    return html`
                        <p class="text-msg war--msg d-flexx">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-alert-icon lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>
                            ¿Confirmas la acción de eliminar?
                        </p>
                        <button class="btn-modal btn-general" @click=${this._closeModal}>Cancelar</button>
                        <button class="btn-modal btn-general btn-eliminar" @click=${this._deleteItem}>Eliminar</button>
                    `;
            }
        }
    /* ---- FUNCIONES MODAL ---- */
}
customElements.define('modal-component', ModalComponent);