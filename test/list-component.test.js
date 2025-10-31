import { describe, it, expect, beforeEach, vi } from 'vitest';
import '../src/components/list-component/list-component.js';
import { objectTypes, mockPokemones } from "../mocks/mockPokemon.js"

// --- MOCK DE DEPENDENCIAS --- //
/* vi.mock('../src/utils/common.js', () => ({
  getLocal: vi.fn(),
  objectTypes: {
    fuego: { color: '#f00', icon: '<svg></svg>', name: 'Fuego' },
    agua: { color: '#00f', icon: '<svg></svg>', name: 'Agua' },
  },
  styleImage: vi.fn(() => '<img src="test.png" alt="poke"/>'),
}));

import { getLocal, styleImage } from '../src/utils/common.js'; */

describe('ListComponent', () => {
    let el;
    beforeEach(() => {
        document.body.innerHTML = '';
        /* vi.clearAllMocks(); */
        el = document.createElement('list-component');
        document.body.appendChild(el);
    });

    it('Correct Component Render', () => {
        expect(el).toBeInstanceOf(HTMLElement);
    });

    it('No Pokemon Data ', async () => {
        let pokemonotes = localStorage.getItem('pokemonotes');
        await el.updateComplete;
        expect(pokemonotes).toBeNull();
    });

    /* it('Render Data if Exist', async () => {
        getLocal.mockReturnValueOnce([
        { nombre: 'Charmander', tipos: ['fuego'], peso: 8.5, altura: 0.6, id: 4 },
        { nombre: 'Squirtle', tipos: ['agua'], peso: 9.0, altura: 0.5, id: 7 },
        ]);

        // Forzamos re-render
        el.requestUpdate();
        await el.updateComplete;

        const cards = el.shadowRoot.querySelectorAll('.card--list');
        expect(cards.length).toBe(2);
    });

    it('Debe disparar el evento "alert-modal" al hacer click en Editar', async () => {
        getLocal.mockReturnValueOnce([
        { nombre: 'Charmander', tipos: ['fuego'], peso: 8.5, altura: 0.6, id: 4 },
        ]);
        el.requestUpdate();
        await el.updateComplete;

        const spy = vi.fn();
        el.addEventListener('alert-modal', spy);

        const editBtn = el.shadowRoot.querySelector('.btn-edit');
        editBtn.click();

        expect(spy).toHaveBeenCalledTimes(1);

        const eventDetail = spy.mock.calls[0][0].detail;
        expect(eventDetail).toEqual({ type: 'edit', id: '0' });
    });

    it('Debe disparar el evento "alert-modal" al hacer click en Eliminar', async () => {
        getLocal.mockReturnValueOnce([
        { nombre: 'Charmander', tipos: ['fuego'], peso: 8.5, altura: 0.6, id: 4 },
        ]);
        el.requestUpdate();
        await el.updateComplete;

        const spy = vi.fn();
        el.addEventListener('alert-modal', spy);

        const deleteBtn = el.shadowRoot.querySelector('.btn-delete');
        deleteBtn.click();

        expect(spy).toHaveBeenCalledTimes(1);

        const eventDetail = spy.mock.calls[0][0].detail;
        expect(eventDetail).toEqual({ type: 'delete', id: '0' });
    }); */
});
