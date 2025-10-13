import { LitElement, html, css } from "lit-element";
import navStyles from "./nav-component-styles.js"; // <---- NAV STYLES
import generalStyles from "../../css/genera.css.js"; // <---- GLOBAL STYLES

export class NavComponent extends LitElement {

    static properties = {
        pageState: {type: String},
    }

    constructor(){
        super();
        this.pageState = '';
    }

    firstUpdated() {

    }

    static styles = [generalStyles, navStyles];

    render(){
        return html`
            <nav class="nav--container d-flexx d-row general--sections">
                <button @click=${this._pageState} data-page="party" type="button" class="btn-general btn-nav btn-active d-flexx d-col">
                    <small>Party</small>
                </button>
                <button @click=${this._pageState} data-page="pokedex" type="button" class="btn-general btn-nav d-flexx d-col">
                    <small>Pokedex</small>
                </button>
                <button @click=${this._pageState} data-page="new" type="button" class="btn-general btn-nav d-flexx d-col">
                    <small>Nuevo</small>
                </button>
            </nav>
        `;
    }

    _pageState(e){
        const btn = e.target.closest('button');
        const btns = document.querySelectorAll('.btn-nav');
        btns.forEach(b => {
            b.classList.remove('btn-active');
        });
        btn.classList.add('btn-active');
        this.pageState = btn.dataset.page;
        this.dispatchEvent(
            new CustomEvent('page-state', {
                bubbles: true,
                composed: true,
                detail: { page: this.pageState },
            })
        );
    }
}
customElements.define('nav-component', NavComponent);