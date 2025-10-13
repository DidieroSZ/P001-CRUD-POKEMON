import { LitElement, html, css } from "lit-element";
import listStyles from "./list-component-styles.js"; // <---- LIST STYLES
import generalStyles from "../../css/genera.css.js"; // <---- GLOBAL STYLES

export class ListComponent extends LitElement {

    static properties = {
        pageState: {type: String},
    }

    constructor(){
        super();
        this.pageState = '';
    }

    firstUpdated() {

    }

    static styles = [generalStyles, listStyles];

    render(){
        return html`
            <section class="list--container">
                <h2>Lista de Pokémones:</h2>
                <br />
                <table class="table">
                <thead>
                    <tr>
                    <th>Nombre</th>
                    <th>Peso</th>
                    <th>Altura</th>
                    <th>Tipo(s)</th>
                    <th style="width: 10%">Editar</th>
                    <th style="width: 10%">Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    ${this._renderLocal()}
                </tbody>
                </table>
            </section>
        `;
    }


    /* ---- FUNCIONES LocalStorage ---- */
    _renderLocal() {
        const pokemones = this._getLocal('pokemones');
        if (pokemones && pokemones.length > 0) {
            return pokemones.map((p, i) => html`
                <tr>
                    <td>${p.nombre}</td>
                    <td>${p.peso} kg</td>
                    <td>${p.altura} m</td>
                    <td>
                        ${p.tipos.map(ti => html`<p>${ti}</p>`)}
                    </td>
                    <td>
                        <button @click=${this._deletePoke} class="btn-general btn-edit" data-id="${i}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-line-icon lucide-pencil-line"><path d="M13 21h8"/><path d="m15 5 4 4"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>
                        </button>
                    </td>
                    <td>
                        <button @click=${this._deletePoke} class="btn-general btn-delete" data-id="${i}">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"> <path d="M10 11v6" /> <path d="M14 11v6" /> <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /> <path d="M3 6h18" /> <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /> </svg> 
                        </button>
                    </td>
                </tr>
            `);
        } else {
            return html`
                <tr>
                    <td colspan="6">No hay pokemones guardados.</td>
                </tr>
            `;
        }
    }

    _getLocal(nombre) {
        const data = localStorage.getItem(nombre);
        return data ? JSON.parse(data) : null;
    }
    /* ---- FUNCIONES LocalStorage ---- */


    /* ---- FUNCIONES BTNS ---- */
    _deletePoke(e) {
        const btn = e.target.closest("button");
        const idPoke = btn.dataset.id;
        const pokemones = this._getLocal('pokemones');
        pokemones.splice(idPoke,1);
        localStorage.setItem('pokemones', JSON.stringify(pokemones));

        this.requestUpdate();
    }
  /* ---- FUNCIONES BTNS ---- */


}
customElements.define('list-component', ListComponent);