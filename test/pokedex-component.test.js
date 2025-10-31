import { describe, it, expect, beforeEach, vi } from 'vitest';
import '../src/components/pokedex-component/pokedex-component.js';


describe('PokeComponent', () => {
    let el;
    beforeEach(() => {
        document.body.innerHTML = '';
        el = document.createElement('pokedex-component');
        document.body.appendChild(el);
        vi.clearAllMocks();
    });

    it('Correct Component Render', () => {
        expect(el).toBeInstanceOf(HTMLElement);
        expect(el.shadowRoot).toBeTruthy();
    });

    it('No Pokemon Found', () => {
        const message = el.shadowRoot.querySelector('p');
        expect(message.textContent).toContain('OBTENIENDO INFORMACIÓN');
    });
});
