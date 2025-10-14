import { LitElement, html, css } from "lit-element";
import pokedexStyles from "./pokedex-component-styles.js"; // <---- NAV STYLES
import generalStyles from "../../css/genera.css.js"; // <---- GLOBAL STYLES

export class PokeComponent extends LitElement {

  //USO DE DOOM GLOBAL (MOMENTANEO)
  createRenderRoot() {
    return this;
  }
  static properties = {
    pokemones: { type: Array },
    localespokemones: { type: Array },
  };
  constructor() {
    super();
    this.pokemones = [];
    this.localespokemones = [];
  }
  async firstUpdated() {
    try {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=40"
      );
      const data = await res.json();

      const detalles = await Promise.all(
        data.results.map((poke) => fetch(poke.url).then((r) => r.json()))
      );

      this.pokemones = detalles;
    } catch (err) {
      console.error(err);
    }
  }

  /* static styles = [generalStyles, pokedexStyles]; */

  render() {
    return html`
      <section class="general--sections list--container api--container">
        <h2>Lista de Pokémones:</h2>
        <br />
        <div class="container--list d-flexx d-row">
          ${this._templateTable()}
        </div>    
      </section>
    `;
  }

  _templateTable() {
    if (this.pokemones && this.pokemones.length > 0) {
      return this.pokemones.map((p, i) =>
              html`
                <div class="card--list d-flexx d-col">
                    <span class="types">
                            <span class="d-flexx">#${p.id}</span>
                           ${p.types.map(ti => html`<small>${ti.type.name}</small>`)}
                        </span>
                    <figure class="">
                    <!-- <img alt="${p.name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png"> -->
                    <!-- <img alt="${p.name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${p.id}.png"> -->
                    <!-- <img alt="${p.name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${p.id}.gif"> -->
                        <img alt="${p.name}" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${p.id}.png">
                    </figure>
                    <span class="name">
                        <p class="d-flexx d-row">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot-icon lucide-dot"><circle cx="12.1" cy="12.1" r="1"/></svg>
                        ${p.name}
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot-icon lucide-dot"><circle cx="12.1" cy="12.1" r="1"/></svg>
                        </p>
                    </span>
                    
                    <span class="metrics">
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-weight-icon lucide-weight"><circle cx="12" cy="5" r="3"/><path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"/></svg>
                            ${ (p.weight * 0.1).toFixed(1) } kg
                        </p>
                        <p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ruler-icon lucide-ruler"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg>
                            ${ (p.height * 0.1).toFixed(1) } m
                        </p>
                    </span>
                </div>
            `
      );
    } else {
      return html`
        <p colspan="6">No hay pokemones guardados.</p>
      `;
    }
  }

}
customElements.define('pokedex-component', PokeComponent);