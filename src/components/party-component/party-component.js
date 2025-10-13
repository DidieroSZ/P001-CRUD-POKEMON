import { LitElement, html, css } from "lit-element";
import partyStyles from "./party-component-styles.js"; // <---- NAV STYLES
import generalStyles from "../../css/genera.css.js"; // <---- GLOBAL STYLES
import "../list-component/list-component.js" // <---- LIST COMPONENT 

export class PartyComponent extends LitElement {

    //USO DE DOOM GLOBAL (MOMENTANEO)
    createRenderRoot() {
        return this;
    }

    static properties = {
        pokemonesObject: {type: Object},
        arrayTypes: {type: Array},
        objectTypes: {type: Object},
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
        this.objectTypes = {
            Water: {
                name: 'Water',
                color: '#39f',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bubbles-icon lucide-bubbles"><path d="M7.2 14.8a2 2 0 0 1 2 2"/><circle cx="18.5" cy="8.5" r="3.5"/><circle cx="7.5" cy="16.5" r="5.5"/><circle cx="7.5" cy="4.5" r="2.5"/></svg>',
            },
            Fire: {
                name: 'Fire',
                color: '#f63',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flame-icon lucide-flame"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"/></svg>',
            },
            Bug: {
                name: 'Bug',
                color: '#9c3',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bug-icon lucide-bug"><path d="M12 20v-9"/><path d="M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z"/><path d="M14.12 3.88 16 2"/><path d="M21 21a4 4 0 0 0-3.81-4"/><path d="M21 5a4 4 0 0 1-3.55 3.97"/><path d="M22 13h-4"/><path d="M3 21a4 4 0 0 1 3.81-4"/><path d="M3 5a4 4 0 0 0 3.55 3.97"/><path d="M6 13H2"/><path d="m8 2 1.88 1.88"/><path d="M9 7.13V6a3 3 0 1 1 6 0v1.13"/></svg>',
            },
            Grass: {
                name: 'Grass',
                color: '#6c3',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-leafy-green-icon lucide-leafy-green"><path d="M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22"/><path d="M2 22 17 7"/></svg>',
            },
            Electric: {
                name: 'Electric',
                color: '#fc6',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-zap-icon lucide-zap"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>',
            },
            Rock: {
                name: 'Rock',
                color: '#c96',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mountain-icon lucide-mountain"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>',
            },
            Ground: {
                name: 'Ground',
                color: '#fc6',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shovel-icon lucide-shovel"><path d="M21.56 4.56a1.5 1.5 0 0 1 0 2.122l-.47.47a3 3 0 0 1-4.212-.03 3 3 0 0 1 0-4.243l.44-.44a1.5 1.5 0 0 1 2.121 0z"/><path d="M3 22a1 1 0 0 1-1-1v-3.586a1 1 0 0 1 .293-.707l3.355-3.355a1.205 1.205 0 0 1 1.704 0l3.296 3.296a1.205 1.205 0 0 1 0 1.704l-3.355 3.355a1 1 0 0 1-.707.293z"/><path d="m9 15 7.879-7.878"/></svg>',
            },
            Normal: {
                name: 'Normal',
                color: '#fc9',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-icon lucide-circle"><circle cx="12" cy="12" r="10"/></svg>',
            },
            Fighting: {
                name: 'Fighting',
                color: '#69f',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-wind-icon lucide-wind"><path d="M12.8 19.6A2 2 0 1 0 14 16H2"/><path d="M17.5 8a2.5 2.5 0 1 1 2 4H2"/><path d="M9.8 4.4A2 2 0 1 1 11 8H2"/></svg>',
            },
            Dark: {
                name: 'Dark',
                color: 'ssss',
                icon: 'ssss',
            },
            Steel: {
                name: 'Steel',
                color: '#ccc',
                icon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bolt-icon lucide-bolt"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><circle cx="12" cy="12" r="4"/></svg>',
            },
            Psychic: {
                name: 'Psychic',
                color: 'ssss',
                icon: 'ssss',
            },
            Ghost: {
                name: 'Ghost',
                color: 'ssss',
                icon: 'ssss',
            },
            Poison: {
                name: 'Poison',
                color: 'ssss',
                icon: 'ssss',
            },
            Flying: {
                name: 'Flying',
                color: 'ssss',
                icon: 'ssss',
            },
            Fairy: {
                name: 'Fairy',
                color: 'ssss',
                icon: 'ssss',
            },
            Ice: {
                name: 'Ice',
                color: 'ssss',
                icon: 'ssss',
            },
            Dragon: {
                name: 'Dragon',
                color: 'ssss',
                icon: 'ssss',
            },
        };
        this.arrayTypes = [
            'Water', 'Fire', 'Grass', 'Electric', 'Rock', 'Ground', 'Normal', 
            'Fighting', 'Dark', 'Steel', 'Psychic', 'Ghost', 'Bug', 
            'Poison', 'Flying', 'Fairy', 'Ice', 'Dragon'
        ];
    }

    firstUpdated() {

    }

    /* static styles = [generalStyles, partyStyles]; */

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
            <br>
            <list-component></list-component>
        `;
    }

    

    /* ---- FUNCIONES FORMS ---- */
        _validateForm(e){
            e.preventDefault();
            const nombre = this.renderRoot.querySelector('#nombre').value.trim();
            const peso = parseFloat(this.renderRoot.querySelector('#peso').value);
            const altura = parseFloat(this.renderRoot.querySelector('#altura').value);

            const long = this.tiposSeleccionados.length;
            if ((!nombre) || (isNaN(peso)) || (isNaN(altura)) || (long === 0) || (long >= 3)) {
                this._alertForm('error');
                return;
            }
            this._setPokem(nombre, peso, altura, this.tiposSeleccionados);
            this._resetForm();
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
        _resetForm(){
            window.location.reload();
        }
    /* ---- FUNCIONES FORMS ---- */


    /* ---- FUNCIONES TIPOS ---- */
        _multipleTypes(){
            return html`
            <p>Máximo 2 tipos por pokemon:</p>
            <div class="tipos--container d-flexx d-row">
                ${this.arrayTypes.map((nombre) => {
                    return html` 
                        <div class="check--container">
                            <input type="checkbox" id="${nombre}" value="${nombre}" @change=${this._handleCheckboxChange}>
                            <label for="${nombre}">${nombre}</label>
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
    /* ---- FUNCIONES TIPOS ---- */


    /* ---- FUNCIONES LocalStorage ---- */
        _setPokem(n, p, a, ts){ 1302
            let arrayPokemones = [];
            const id = Math.floor(Math.random() * (1302 - 1 + 1)) + 1;
            const pokemones = this._getLocal('pokemones');
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
            localStorage.setItem('pokemones', JSON.stringify(arrayPokemones));
        }
        _getLocal(nombre) {
            const informacion = localStorage.getItem(nombre);
            return informacion ? JSON.parse(informacion) : null;
        }
    /* ---- FUNCIONES LocalStorage ---- */
}
customElements.define('party-component', PartyComponent);