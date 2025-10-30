import { describe, it, expect, beforeEach } from 'vitest';
import '../src/components/main-component/main-component.js';

describe('MainComponent', () => {
    let el;
    beforeEach(async () => {
        el = document.createElement('main-component');
        document.body.appendChild(el);
    });
    
    it('sCorrect Component Render', () => {
        expect(el.shadowRoot).not.toBeNull();
        const nav = el.shadowRoot.querySelector('nav-component');
        const modal = el.shadowRoot.querySelector('modal-component');
        expect(nav).not.toBeNull();
        expect(modal).not.toBeNull();
    });

    it('Event Change Page State Pokedex', async () => {
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

    it('Event Change Page State Party', async () => {
        const event = new CustomEvent('page-state', {
            bubbles: true,
            composed: true,
            detail: { page: 'party' },
        });

        const nav = el.shadowRoot.querySelector('nav-component');
        expect(nav).not.toBeNull();
        nav.dispatchEvent(event);

        await el.updateComplete;

        expect(el.pageLoc).toBe('party');
        const pokedex = el.shadowRoot.querySelector('party-component');
        expect(pokedex).not.toBeNull();
    });

        it('Event Change Page State Form', async () => {
        const event = new CustomEvent('page-state', {
            bubbles: true,
            composed: true,
            detail: { page: 'form' },
        });

        const nav = el.shadowRoot.querySelector('nav-component');
        expect(nav).not.toBeNull();
        nav.dispatchEvent(event);

        await el.updateComplete;

        expect(el.pageLoc).toBe('form');
        const pokedex = el.shadowRoot.querySelector('form-component');
        expect(pokedex).not.toBeNull();
    });

    it('Show Modal Delete Action', () => {
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

    it('Close Modal', () => {
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
