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
                <button @click=${this._pageState} data-page="party" type="button" class="btn-general btn-nav btn-active d-flexx d-row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-party-popper-icon lucide-party-popper"><path d="M5.8 11.3 2 22l10.7-3.79"/><path d="M4 3h.01"/><path d="M22 8h.01"/><path d="M15 2h.01"/><path d="M22 20h.01"/><path d="m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10"/><path d="m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17"/><path d="m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7"/><path d="M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z"/></svg>
                    <small>Party</small>
                </button>
                <button @click=${this._pageState} data-page="pokedex" type="button" class="btn-general btn-nav d-flexx d-row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-marked-icon lucide-book-marked"><path d="M10 2v8l3-3 3 3V2"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>    
                    <small>Pokedex</small>
                </button>
            </nav>
        `;
    }

    _pageState(e){
        const btn = e.target.closest('button');
        const btns = this.renderRoot.querySelectorAll('.btn-nav');
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