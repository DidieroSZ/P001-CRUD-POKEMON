import { LitElement, html, css } from "lit-element";
import pokedexStyles from "./pokedex-component-styles.js"; // <---- NAV STYLES
import generalStyles from "../../css/genera.css.js"; // <---- GLOBAL STYLES

export class PokeComponent extends LitElement {

    static properties = {
        pokemones: { type: Array },
        loading: { type: Boolean }
    };

    constructor() {
        super();
        this.pokemones = [];
        this.loading = true;
    }

    async firstUpdated() {
        try {
            // Petición inicial
            const res = await fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=20');
            const data = await res.json();

            // Peticiones por cada Pokémon
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
        return html`
            <section class="pokedex--container">
                <h2>Lista de Pokémon</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Imagen</th>
                            <th>Nombre</th>
                            <th>Tipo(s)</th>
                            <th>Peso</th>
                            <th>Altura</th>
                            <th>Editar</th>
                            <th>Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${this.pokemones.map((poke, index) =>  {
                            const id = poke.id;
                            const img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
                            const nombre = poke.name;
                            const tipos = poke.types;
                            const peso = poke.weight * 0.1;
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
                                </tr>
                            `;
                        })}
                    </tbody>
                </table>
            </section>
        `;
    }
}
customElements.define('pokedex-component', PokeComponent);