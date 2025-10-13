import { LitElement, html, css } from "lit-element";
import partyStyles from "./party-component-styles.js"; // <---- NAV STYLES
import generalStyles from "../../css/genera.css.js"; // <---- GLOBAL STYLES

export class PartyComponent extends LitElement {

    static properties = {
        pokemonesObject: {type: Object},
        arrayTypes: {type: Array},
        tiposSeleccionados: {type: Array},
    }

    constructor(){
        super();
        this.pokemonesObject = {
            nombre: '',
            peso: '',
            altura: '',
            tipos: [],
        };
        this.tiposSeleccionados = [];
        this.arrayTypes = ['Agua', 'Fuego', 'Planta', 'Eléctrico', 'Roca', 'Tierra', 'Lucha', 'Siniestro', 'Acero', 'Psíquico', 'Fantasma', 'Bicho', 'Veneno', 'Volador', 'Hada', 'Hielo', 'Dragón'];
    }

    firstUpdated() {

    }

    static styles = [generalStyles, partyStyles];

    render(){
        return html`
            <form class="d-flexx d-col form" @submit=${this._validateForm}>
                <input type="text" class="input-general" id="nombre" placeholder="Nombre">
                <input type="number" class="input-general" id="peso" placeholder="Peso" step="0.1">
                <input type="number" class="input-general" id="altura" placeholder="Altura" step="0.1">
                
                ${this._multipleTypes()}

                <button type="submit" class="btn-general d-flexx d-col">Guardar</button>
            </form>
        `;
    }

    _multipleTypes(){
        return html`
        <div class="tipos--container">
            ${this.arrayTypes.map((nombre) => {
                return html` 
                    <div class="">
                    <input type="checkbox" id="${nombre}" value="${nombre}" @change=${this._handleCheckboxChange}>
                    <label for="${nombre}">${nombre}</label>
                     </div>
                `;
            })}
        </div>
            
        `;
    }

    _validateForm(e){
        e.preventDefault();
        const nombre = this.renderRoot.querySelector('#nombre').value.trim();
        const peso = parseFloat(this.renderRoot.querySelector('#peso').value);
        const altura = parseFloat(this.renderRoot.querySelector('#altura').value);

        const long = this.tiposSeleccionados.length;
        if ((!nombre) || (isNaN(peso)) || (isNaN(altura)) || (long === 0)) {
            alert('Por favor completa todos los campos correctamente');
            return;
        }
        this._setPokem(nombre, peso, altura, this.tiposSeleccionados);
    }

    _handleCheckboxChange(e) {
        const { value, checked } = e.target;
        if (checked) {
            this.tiposSeleccionados = [...this.tiposSeleccionados, value];
        } else {
            this.tiposSeleccionados = this.tiposSeleccionados.filter(v => v !== value);
        }
    }

    _setPokem(n, p, a, ts){
        let arrayPokemones = [];
        const pokemones = this._getLocal('pokemones');
        if (pokemones) {
            arrayPokemones = pokemones;
        }
        this.pokemonesObject = {
            nombre: n,
            peso: p,
            altura: a,
            tipos: ts,
        };
        arrayPokemones.push(this.pokemonesObject);
        localStorage.setItem('pokemones', JSON.stringify(arrayPokemones));
    }

    _getLocal(nombre) {
        const informacion = localStorage.getItem(nombre);
        return informacion ? JSON.parse(informacion) : null;
    }

    
}
customElements.define('party-component', PartyComponent);