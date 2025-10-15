import { LitElement, html, css } from "lit-element";
import generalStyles from "../../css/genera.css.js"; // <---- GLOBAL STYLES

export class LayoutComponent extends LitElement {
    static properties = {
        styleImg: {type: String},
    }
    constructor(){
        super();
        this.styleImg = '';
    }
    firstUpdated() {
        const valorActual = localStorage.getItem('estilo');
        if (valorActual) {
            this.styleImg = valorActual;
            this._changeImageStyle();
        }
        else{
           localStorage.setItem('estilo', this.styleImg);
        }
    }

    static styles = [generalStyles];

    render(){
        return html`
            <div class="layout--container d-flexx d-row general--sections">
                <p>Estilos de imágenes pokemon.</p>
                <button @click=${this._changeImageStyle} data-style="1" type="button" class="btn-general btn-nav btn-active d-flexx d-row">
                    <small>ESTILO #1</small>
                </button>
                <button @click=${this._changeImageStyle} data-style="2" type="button" class="btn-general btn-nav d-flexx d-row">
                    <small>ESTILO #2</small>
                </button>
                <button @click=${this._changeImageStyle} data-style="3" type="button" class="btn-general btn-nav d-flexx d-row">
                    <small>ESTILO #3</small>
                </button>
                <button @click=${this._changeImageStyle} data-style="4" type="button" class="btn-general btn-nav d-flexx d-row">
                    <small>ESTILO #4</small>
                </button>
                <button @click=${this._changeImageStyle} data-style="5" type="button" class="btn-general btn-nav d-flexx d-row">
                    <small>ESTILO #5</small>
                </button>
            </div>
        `;
    }

    _changeImageStyle(e){
        const btns = this.renderRoot.querySelectorAll('.btn-nav');
        btns.forEach(b => {
            b.classList.remove('btn-active');
        });

        if (e) {
            const btn = e.target.closest('button');
            btn.classList.add('btn-active');
            this.styleImg = btn.dataset.style;
            localStorage.setItem('estilo', this.styleImg);
        }
        else{
            let pos = parseInt(this.styleImg);
            btns[pos-1].classList.add('btn-active');
            /* localStorage.setItem('estilo', this.styleImg); */
        }
        
        this.dispatchEvent(
            new CustomEvent('style-state', {
                bubbles: true,
                composed: true,
                detail: { styleimg: this.styleImg },
            })
        );
    }
}
customElements.define('layout-component', LayoutComponent);