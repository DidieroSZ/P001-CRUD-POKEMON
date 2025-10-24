import { LitElement, html } from "lit-element";
import generalStyles from "../../css/genera.css.js"; // <---- GLOBAL STYLES
import "../layout-component/layout-component.js" // <---- LAYOUT COMPONENT 
import "../list-component/list-component.js" // <---- LIST COMPONENT 

/**
 * @class PartyComponent
 * @extends {LitElement}
 * @description
 * Componente principal encargado de mostrar y gestionar Pokémones dentro del sistema.
 *
 * @example
 * <party-component></party-component>
 */
export class PartyComponent extends LitElement {
    static properties = {
        styleImg: {type: String},
    }
    constructor(){
        super();
        this.styleImg = '';
    }

    static styles = [generalStyles];

    render(){
        return html`           
            <layout-component @style-state=${this._changeStyle}></layout-component>
            
            <list-component .styleImg=${this.styleImg}></list-component>
        `;
    }

    _changeStyle(e){
        this.styleImg = e.detail.styleimg;
    }
}
customElements.define('party-component', PartyComponent);