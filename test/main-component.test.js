import { describe, it, expect, beforeEach } from 'vitest';
import '../src/components/main-component/main-component.js';

describe('MainComponent', () => {
    let el;
    beforeEach(async () => {
        el = document.createElement('main-component');
        document.body.appendChild(el);
    });

    
    it('se renderiza correctamente', () => {
        expect(el.shadowRoot).not.toBeNull();
        const nav = el.shadowRoot.querySelector('nav-component');
        const modal = el.shadowRoot.querySelector('modal-component');
        expect(nav).not.toBeNull();
        expect(modal).not.toBeNull();
    });


    it('cambia el contenido cuando recibe page-state', async () => {
        const event = new CustomEvent('page-state', {
            bubbles: true,
            composed: true,
            detail: { page: 'pokedex' },
        });

        const nav = el.shadowRoot.querySelector('nav-component');
        expect(nav).not.toBeNull();
        nav.dispatchEvent(event);

        await el.updateComplete;

        expect(el.pageLoc).toBe('pokedex');
        const pokedex = el.shadowRoot.querySelector('pokedex-component');
        expect(pokedex).not.toBeNull();
    });


    it('muestra el modal con el tipo e id correctos', () => {
        const event = new CustomEvent('alert-modal', {
            bubbles: true,
            composed: true,
            detail: { type: 'delete', id: '1' },
        });

        const main = el.shadowRoot.querySelector('main');
        main.dispatchEvent(event);

        expect(el.type).toBe('delete');
        expect(el.item).toBe('1');
        expect(el.mostrar).toBe(true);
    });


    it('oculta el modal cuando se emite close-modal', () => {
        el.mostrar = true;
        const event = new CustomEvent('close-modal', { 
            bubbles: true, 
            composed: true 
        });
        const main = el.shadowRoot.querySelector('main');
        main.dispatchEvent(event);

        expect(el.mostrar).toBe(false);
    });
});
