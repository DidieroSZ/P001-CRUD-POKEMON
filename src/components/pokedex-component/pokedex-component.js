import { LitElement, html, css } from "lit-element";
import pokedexStyles from "./pokedex-component-styles.js"; // <---- NAV STYLES
import generalStyles from "../../css/genera.css.js"; // <---- GLOBAL STYLES

export class PokeComponent extends LitElement {

    static properties = {
        pokemones: { type: Array },
        localespokemones: { type: Array },
        loading: { type: Boolean }
    };

    constructor() {
        super();
        this.pokemones = [];
        this.localespokemones = [];
        this.loading = false;
    }

    async firstUpdated() {
        try {

            const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=400');
            /* const res = ''; */
            const data = await res.json();

            const detalles = await Promise.all(
                data.results.map(poke => fetch(poke.url).then(r => r.json()))
            );

            this.pokemones = detalles;
        } catch (err) {
            console.error(err);
        } finally {
            this.loading = false;
        }
    }

    static styles = [generalStyles, pokedexStyles];

    render(){

        if (this.loading) {
            return html`
                <span class="loader"></span>
            `;
        }
        else{
            return html`
            <section class="pokedex--container">
                <h2>Lista de Pokémon</h2>
                <br>
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Tipo(s)</th>
                            <th>Peso</th>
                            <th>Altura</th>
                            <th style="width: 10%">Editar</th>
                            <th style="width: 10%">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${this.pokemones.map((poke, index) =>  {
                            const id = poke.id;
                            const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
                            const nombre = poke.name;
                            const tipos = poke.types;
                            let peso = poke.weight * 0.1;
                            peso = peso.toFixed(1);
                            let altura = poke.height * 0.1;
                            altura = altura.toFixed(1);
                            return html`
                                <tr>
                                    <td>${id}</td>
                                    <td><img alt="${poke.name}" src="${img}"></td>
                                    <td>${nombre}</td>
                                    <td>
                                        ${tipos.map((ti, i) => {
                                            return html`
                                            <p>${ti.type.name}</p>
                                            
                                            `;
                                        })}
                                    </td>
                                    <td>${peso} kg</td>
                                    <td>${altura} m</td>
                                    <td>
                                        <button class="btn-general btn-edit">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-line-icon lucide-pencil-line"><path d="M13 21h8"/><path d="m15 5 4 4"/><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/></svg>
                                        </button>
                                    </td>
                                    <td>
                                        <button class="btn-general btn-delete">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash2-icon lucide-trash-2"><path d="M10 11v6"/><path d="M14 11v6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
                                        </button>
                                    </td>
                                    
                                </tr>
                            `;
                        })}
                    </tbody>
                </table>
            </section>
        `;
        }
        
    }
}
customElements.define('pokedex-component', PokeComponent);