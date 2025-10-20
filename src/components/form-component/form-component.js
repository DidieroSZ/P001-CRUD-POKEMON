import { LitElement, html, css } from "lit-element";
import generalStyles from "../../css/genera.css.js"; // <---- GLOBAL STYLES
import { getLocal, setLocal, reloadPage, objectTypes, arrayTypes } from "../../utils/common.js"; // <---- COMMON FUNCTIONS
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'

/**
 * @class FormComponent
 * @extends {LitElement}
 * @description
 * Permite agregar un nuevo Pokémon con nombre, peso, altura y tipos seleccionados, guardándolos en localStorage.
 *
 * @example
 * <form-component></form-component>
 */
export class FormComponent extends LitElement {
    static properties = {
        pokemonesObject: {type: Object},
        tiposSeleccionados: {type: Array},
    }
    constructor(){
        super();
        this.pokemonesObject = {
            id: '',
            nombre: '',
            peso: '',
            altura: '',
            tipos: [],
        };
        this.tiposSeleccionados = [];
    }

    static styles = [generalStyles];

    render(){
        return html`
            <form class="general--sections form--container d-flexx d-row" @submit=${this._validateForm}>
                <div class="form--sides left--form d-flexx d-col">
                    <p>Agregar un nuevo Pokemon:</p>
                    <input type="text" class="input-general" id="nombre" placeholder="Nombre">
                    <input type="number" class="input-general" id="peso" placeholder="Peso (kg)" step="0.1">
                    <input type="number" class="input-general" id="altura" placeholder="Altura (m)" step="0.1">
                </div>
                <div class="form--sides rigth--form d-flexx d-col">
                    ${this._multipleTypes()}
                </div>
                <button type="submit" class="btn-general d-flexx d-col">Guardar</button>
            </form>
        `;
    }


    /* -------------------------- FUNCIONES FORMS -------------------------- */
        _validateForm(e){
            e.preventDefault();
            const nombre = this.renderRoot.querySelector('#nombre').value.trim();
            const peso = parseFloat(this.renderRoot.querySelector('#peso').value);
            const altura = parseFloat(this.renderRoot.querySelector('#altura').value);

            const long = this.tiposSeleccionados.length;
            if ((!nombre) || (isNaN(peso)) || (isNaN(altura)) || (long === 0) || (long >= 3) || (altura <= 0) || (peso <= 0)) {
                this._alertForm('error');
                return;
            }
            this._setPokem(nombre, peso, altura, this.tiposSeleccionados);
            reloadPage();
        }
        _alertForm(t){
                this.dispatchEvent(
                new CustomEvent('alert-modal', {
                    bubbles: true,
                    composed: true,
                    detail: { type: t }
                })
            );
        }
    /* -------------------------- FUNCIONES FORMS -------------------------- */


    /* -------------------------- FUNCIONES TIPOS POKEMONES -------------------------- */
        _multipleTypes(){
            return html`
            <p>Máximo 2 tipos por pokemon:</p>
            <div class="tipos--container d-flexx d-row">
                ${arrayTypes.map((nombre) => {
                    return html` 
                        
                        <div class="check--container d-flexx">
                            <input class="input--check" type="checkbox" id="${nombre}" value="${nombre}" @change=${this._handleCheckboxChange}>
                            <label class="label--check d-flexx" for="${nombre}" style="--color-type: ${objectTypes[nombre].color};">
                                ${unsafeHTML(objectTypes[nombre].icon)}
                                <small>${nombre}</small>
                            </label>
                        </div>
                    `;
                })}
            </div>
            `;
        }
        _handleCheckboxChange(e) {
            const { value, checked } = e.target;
            if (checked) {
                this.tiposSeleccionados = [...this.tiposSeleccionados, value];
            } else {
                this.tiposSeleccionados = this.tiposSeleccionados.filter(v => v !== value);
            }
        }
    /* -------------------------- FUNCIONES TIPOS POKEMONES -------------------------- */


    /* -------------------------- FUNCIONES LOCALSTORAGE -------------------------- */
        _setPokem(n, p, a, ts){ 
            let arrayPokemones = [];
            const id = Math.floor(Math.random() * (1302 - 1 + 1)) + 1;
            const pokemones = getLocal('pokemones');
            if (pokemones) {
                arrayPokemones = pokemones;
            }
            this.pokemonesObject = {
                id: id,
                nombre: n,
                peso: p,
                altura: a,
                tipos: ts,
            };
            arrayPokemones.push(this.pokemonesObject);
            setLocal('pokemones', arrayPokemones);
        }
    /* -------------------------- FUNCIONES LOCALSTORAGE -------------------------- */
    
}
customElements.define('form-component', FormComponent);