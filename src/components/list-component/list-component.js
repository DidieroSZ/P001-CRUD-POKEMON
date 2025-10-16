import { LitElement, html, css } from "lit-element";
import generalStyles from "../../css/genera.css.js"; // <---- GLOBAL STYLES
import { getLocal, objectTypes, styleImage } from "../../utils/common.js"; // <---- COMMON FUNCTIONS
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'

/**
 * @class ListComponent
 * @extends {LitElement}
 * @description
 * Componente principal encargado de renderizar la lista de pokemones en localStorage.
 * Permite a su vez, editar y eliminar algun item.
 *
 * @example
 * <list-component></party-component>
 */
export class ListComponent extends LitElement {
    static properties = {
        styleImg: {type: String},
    }
    constructor(){
        super();
        this.styleImg = '';
    }

    static styles = [generalStyles];

    render(){
        return html`
            <section class="general--sections list--container">
                <div class="container--list d-flexx d-row">
                    ${this._renderLocal()}
                </div>
            </section>
        `;
    }

    /* -------------------------- FUNCIONES LOCALSTORAGE -------------------------- */
        _renderLocal() {
            const pokemones = getLocal('pokemones');
            if (pokemones && pokemones.length > 0) {
                return pokemones.map((p, i) => html`
                    <div class="card--list d-flexx d-col">
                        <div class="gradient-decorator" style="background: radial-gradient(circle, ${objectTypes[p.tipos[0]].color} 20%, rgba(255, 255, 255, 1) 30%);"></div>
                        <span class="types">
                            <span class="d-flexx">#${i+1}</span>
                            ${
                                p.tipos.map(ti => 
                                    html`
                                        <small class="d-flexx" style="background-color: ${objectTypes[ti].color};"> ${unsafeHTML(objectTypes[ti].icon)}  ${objectTypes[ti].name}</small>
                                    `
                                )
                            }
                        </span>
                        <figure class="cont--img d-flexx">
                            ${styleImage(this.styleImg, p.nombre, p.id)}
                        </figure>
                        <span class="name">
                            <p class="d-flexx d-row">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot-icon lucide-dot"><circle cx="12.1" cy="12.1" r="1"/></svg>
                            ${p.nombre}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot-icon lucide-dot"><circle cx="12.1" cy="12.1" r="1"/></svg>
                            </p>
                        </span>                        
                        <span class="metrics">
                            <small>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-weight-icon lucide-weight"><circle cx="12" cy="5" r="3"/><path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"/></svg>
                                ${p.peso} kg
                            </small>
                            <small>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ruler-icon lucide-ruler"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg>
                                ${p.altura} m
                            </small>
                        </span>
                        <span class="btns-interact">
                            <button @click=${this._editPoke} class="btn-general btn-card btn-edit d-flexx d-row" data-id="${i}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-line-icon lucide-pencil-line"><path d="M13 21h8"/><path d="m15 5 4 4"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>
                                Editar
                            </button>
                            <button @click=${this._deletePoke} class="btn-general btn-card btn-delete d-flexx d-row" data-id="${i}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"> <path d="M10 11v6" /> <path d="M14 11v6" /> <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /> <path d="M3 6h18" /> <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /> </svg> 
                                Eliminar
                            </button>
                        </span>
                    </div>
                `);
            } else {
                return html`
                    <p colspan="6">No hay Pokémones guardados.</p>
                `;
            }
        }
    /* -------------------------- FUNCIONES LOCALSTORAGE -------------------------- */


    /* -------------------------- FUNCIONES BTNS -------------------------- */
        _editPoke(e) {
            const btn = e.target.closest("button");
            const idPoke = btn.dataset.id;
            this._alertForm('edit', idPoke);
        }
        _deletePoke(e) {
            const btn = e.target.closest("button");
            const idPoke = btn.dataset.id;
            this._alertForm('delete', idPoke);
        }
    /* -------------------------- FUNCIONES BTNS -------------------------- */


    /* -------------------------- FUNCIONES ALERT MODAL -------------------------- */
        _alertForm(t, id){
                this.dispatchEvent(
                new CustomEvent('alert-modal', {
                    bubbles: true,
                    composed: true,
                    detail: { type: t, id: id},
                })
            );
        }
    /* -------------------------- FUNCIONES ALERT MODAL -------------------------- */
}
customElements.define('list-component', ListComponent);