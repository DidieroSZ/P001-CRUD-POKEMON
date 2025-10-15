import { LitElement, html, css } from "lit-element";
import generalStyles from "../../css/genera.css.js"; // <---- GLOBAL STYLES
import { objectTypes, styleImage } from "../../utils/common.js"; // <---- COMMON FUNCTIONS
import { unsafeHTML } from 'lit-html/directives/unsafe-html.js'

export class PokeComponent extends LitElement {
  static properties = {
    pokemones: { type: Array },
    localespokemones: { type: Array },
    styleImg: {type: String},
  };
  constructor() {
    super();
    this.pokemones = [];
    this.localespokemones = [];
    this.styleImg = '';
  }
  async firstUpdated() {
    const offset = Math.floor(Math.random() * (1280 - 1 + 1)) + 1;
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`
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

  static styles = [generalStyles];

  render() {
    return html`
      <layout-component @style-state=${this._changeStyle}></layout-component>
      <section class="general--sections list--container api--container">
        <div class="container--list d-flexx d-row">
          ${this._templateTable()}
        </div>    
      </section>
    `;
  }

  _changeStyle(e){
    this.styleImg = e.detail.styleimg;
  }

  _templateTable() {
    if (this.pokemones && this.pokemones.length > 0) {
      return this.pokemones.map((p) =>
        html`
          <div class="card--list d-flexx d-col">
            <div class="gradient-decorator" style="background: radial-gradient(circle,  ${(() => {
                  const t = p.types[0]?.type.name;
                  const key = t.charAt(0).toUpperCase() + t.slice(1);
                  return objectTypes[key]?.color;
                })()} 20%, rgba(255, 255, 255, 1) 30%);"></div>
            <span class="types">
              <span class="d-flexx">#${p.id}</span>
                ${
                  p.types.map(ti => {
                    let key = ti.type.name;
                    let letter = key.charAt(0).toUpperCase();
                    let joinn = letter.concat((key.slice(1)));
                    const op = objectTypes[joinn];
                    return html`
                    <small class="d-flexx" style="background-color: ${op.color};"> ${unsafeHTML(op.icon)}  ${op.name}</small>
                    `
                  })
                }
            </span>
            <figure class="cont--img  d-flexx">
                ${styleImage(this.styleImg, p.nombre, p.id)}
            </figure>
            <span class="name">
              <p class="d-flexx d-row">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot-icon lucide-dot"><circle cx="12.1" cy="12.1" r="1"/></svg>
                ${p.name}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dot-icon lucide-dot"><circle cx="12.1" cy="12.1" r="1"/></svg>
              </p>
            </span> 
            <span class="metrics">
              <small>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-weight-icon lucide-weight"><circle cx="12" cy="5" r="3"/><path d="M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z"/></svg>
                  ${ (p.weight * 0.1).toFixed(1) } kg
              </small>
              <small>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ruler-icon lucide-ruler"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg>
                  ${ (p.height * 0.1).toFixed(1) } m
              </small>
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