import { LitElement, html } from "lit-element";
import generalStyles from "../../css/genera.css.js"; // <---- GLOBAL STYLES
import logo from '../../img/logo.png';

export class NavComponent extends LitElement {
    static properties = {
        pageState: {type: String},
    }
    constructor(){
        super();
        this.pageState = '';
    }

    static styles = [generalStyles];

    render(){
        return html`
            <nav class="nav--container d-flexx d-row general--sections">
                <figure>
                    <img src="${logo}">
                </figure>
                <button @click=${this._pageState} data-page="form" type="button" class="btn-general btn-nav btn-nav-left d-flexx d-row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-todo-icon lucide-list-todo"><path d="M13 5h8"/><path d="M13 12h8"/><path d="M13 19h8"/><path d="m3 17 2 2 4-4"/><rect x="3" y="4" width="6" height="6" rx="1"/></svg>    
                    <p>Form</p>
                </button>
                <button @click=${this._pageState} data-page="party" type="button" class="btn-general btn-nav btn-nav-middle btn-active d-flexx d-row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-half-icon lucide-shield-half"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 22V2"/></svg>
                    <p>Team</p>
                </button>
                <button @click=${this._pageState} data-page="pokedex" type="button" class="btn-general btn-nav btn-nav-rigth d-flexx d-row">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-marked-icon lucide-book-marked"><path d="M10 2v8l3-3 3 3V2"/><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"/></svg>    
                    <p>Pokedex</p>
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