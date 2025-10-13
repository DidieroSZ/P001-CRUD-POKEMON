import { LitElement, html, css } from "lit-element";
import pokedexStyles from "./pokedex-component-styles.js"; // <---- NAV STYLES
import generalStyles from "../../css/genera.css.js"; // <---- GLOBAL STYLES

export class PokeComponent extends LitElement {
  static properties = {
    pokemones: { type: Array },
    localespokemones: { type: Array },
    loading: { type: Boolean },
  };

  constructor() {
    super();
    this.pokemones = [];
    this.localespokemones = [];
    this.loading = false;
  }

  async firstUpdated() {
    try {
      const res = await fetch(
        "https://pokeapi.co/api/v2/pokemon?offset=0&limit=400"
      );
      /* const res = ''; */
      const data = await res.json();

      const detalles = await Promise.all(
        data.results.map((poke) => fetch(poke.url).then((r) => r.json()))
      );

      this.pokemones = detalles;
    } catch (err) {
      console.error(err);
    }
  }

  static styles = [generalStyles, pokedexStyles];

  render() {
    const deletedPokemones = this._getLocal("deleted") || [];
    return html`
      <section class="pokedex--container">
        <h2>Lista de Pokémones:</h2>
        <br />
        <table class="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Tipo(s)</th>
              <th>Peso</th>
              <th>Altura</th>
              <th style="width: 10%">Eliminar</th>
            </tr>
          </thead>
          <tbody>
            ${this.pokemones
              .filter((poke) => !deletedPokemones.includes(poke.name))
              .map((poke) => this._templateTable(poke))}
          </tbody>
        </table>
      </section>
    `;
  }

  _templateTable(poke) {
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
        <td><img alt="${poke.name}" src="${img}" /></td>
        <td>${nombre}</td>
        <td>
          ${tipos.map((ti, i) => {
            return html` <p>${ti.type.name}</p> `;
          })}
        </td>
        <td>${peso} kg</td>
        <td>${altura} m</td>
        <td>
          <button
            @click=${this._deletePoke}
            class="btn-general btn-delete"
            data-id="${nombre}"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-trash2-icon lucide-trash-2"
            >
              <path d="M10 11v6" />
              <path d="M14 11v6" />
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" />
              <path d="M3 6h18" />
              <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
          </button>
        </td>
      </tr>
    `;
  }

  /* ---- FUNCIONES BTNS ---- */
  _deletePoke(e) {
    const btn = e.target.closest("button");
    const idPoke = btn.dataset.id;
    this._setLocal("deleted", idPoke);

    this.requestUpdate();
  }
  /* ---- FUNCIONES BTNS ---- */

  /* ---- FUNCIONES LocalStorage ---- */
  _setLocal(nombre, info) {
    let infoArray = [];
    const inf = this._getLocal(nombre);
    console.log(inf);
    if (inf) {
      infoArray = inf;
    }

    infoArray.push(info);
    localStorage.setItem(nombre, JSON.stringify(infoArray));
    console.log(infoArray);
    return;
  }

  _getLocal(nombre) {
    const informacion = localStorage.getItem(nombre);
    return informacion ? JSON.parse(informacion) : null;
  }
  /* ---- FUNCIONES LocalStorage ---- */
}
customElements.define('pokedex-component', PokeComponent);