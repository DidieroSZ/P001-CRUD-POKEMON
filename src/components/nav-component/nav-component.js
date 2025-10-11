import { LitElement, html, css } from "lit-element";
import { createIcons, icons } from 'lucide'; // LUCIDE ICONS
import navStyles from "./nav-component-styles.js"; // <---- NAV STYLES
import generalStyles from "../../css/genera.css.js"; // <---- GLOBAL STYLES

export class NavComponent extends LitElement {

    firstUpdated() {
        createIcons({ 
            icons, 
            attrs: { width: 24, height: 24 },
            nameAttr: 'data-lucide',
            element: this.renderRoot
        });
    }

    static styles = [generalStyles, navStyles];

    render(){
        return html`
            <nav class="nav--container d-flexx d-row general--sections">
                <button type="button" class="btn-general btn-nav d-flexx d-col">
                    <i data-lucide="party-popper"></i>
                    <small>Party</small>
                </button>
                <button type="button" class="btn-general btn-nav btn-active d-flexx d-col">
                    <i data-lucide="card-sim"></i>
                    <small>Pokedex</small>
                </button>
                <button type="button" class="btn-general btn-nav d-flexx d-col">
                    <i data-lucide="card-sim"></i>
                    <small>Nuevo</small>
                </button>
            </nav>
        `;
    }
}
customElements.define('nav-component', NavComponent);