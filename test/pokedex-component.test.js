import { describe, it, expect, beforeEach, vi } from 'vitest';
import '../src/components/pokedex-component/pokedex-component.js';

vi.mock('../src/utils/common.js', () => ({
    getLocal: vi.fn(),
    objectTypes: {
        Fuego: { color: '#f00', icon: '<svg></svg>', name: 'Fuego' },
        Agua: { color: '#00f', icon: '<svg></svg>', name: 'Agua' },
    },
    styleImage: vi.fn((styleImg, nombre, id) => `<img src="${nombre}-${id}-${styleImg}.png">`),
}));
import { getLocal } from '../src/utils/common.js';

describe('PokeComponent (pokedex-component)', () => {
    let el;
    beforeEach(() => {
        document.body.innerHTML = '';
        el = document.createElement('pokedex-component');
        document.body.appendChild(el);
        vi.clearAllMocks();
    });

    it('Correct Component Render', () => {
        expect(el).toBeInstanceOf(HTMLElement);
        expect(el.tagName.toLowerCase()).toBe('pokedex-component');
    });

    it('No Pokemon Data', async () => {
        el.pokemones = [];
        el.requestUpdate();
        await el.updateComplete;

        const msg = el.shadowRoot.querySelector('p');
        expect(msg.textContent.trim()).toBe('---- OBTENIENDO INFORMACIÓN ----');
    });

    it('renderiza correctamente los pokémones simulados', async () => {
        el.pokemones = [
        {
            id: 1,
            name: 'charmander',
            types: [{ type: { name: 'fuego' } }],
            weight: 85,
            height: 6,
        },
        {
            id: 2,
            name: 'squirtle',
            types: [{ type: { name: 'agua' } }],
            weight: 90,
            height: 5,
        },
        ];
        el.requestUpdate();
        await el.updateComplete;

        const cards = el.shadowRoot.querySelectorAll('.card--list');
        expect(cards.length).toBe(2);

        expect(cards[0].innerHTML).toContain('charmander');
    });
});
