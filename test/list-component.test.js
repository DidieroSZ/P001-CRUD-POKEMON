import { describe, it, expect, beforeEach, vi } from 'vitest';
import '../src/components/list-component/list-component.js';

vi.mock('../src/utils/common.js', () => ({
  getLocal: vi.fn(),
  objectTypes: {
    fuego: { color: '#f00', icon: '<svg></svg>', name: 'Fuego' },
    agua: { color: '#00f', icon: '<svg></svg>', name: 'Agua' },
  },
  styleImage: vi.fn((styleImg, nombre, id) => `<img src="${nombre}-${id}-${styleImg}.png">`),
}));

import { getLocal } from '../src/utils/common.js';

describe('ListComponent', () => {
  let el;

  beforeEach(() => {
    document.body.innerHTML = '';
    el = document.createElement('list-component');
    document.body.appendChild(el);
  });

  it('Correct Component Render', () => {
    expect(el).toBeInstanceOf(HTMLElement);
    expect(el.tagName.toLowerCase()).toBe('list-component');
  });

  it('No Pokemon Information', async () => {
    getLocal.mockReturnValueOnce(null);
    el.requestUpdate();
    await el.updateComplete;

    const msg = el.shadowRoot.querySelector('p');
    expect(msg.textContent.trim()).toBe('No hay Pokémones guardados.');
  });

  it('Renderiza correctamente la lista de pokémones', async () => {
    getLocal.mockReturnValueOnce([
      {
        nombre: 'Charmander',
        id: 1,
        tipos: ['fuego'],
        peso: 8.5,
        altura: 0.6,
      },
      {
        nombre: 'Squirtle',
        id: 2,
        tipos: ['agua'],
        peso: 9.0,
        altura: 0.5,
      },
    ]);

    el.requestUpdate();
    await el.updateComplete;

    const cards = el.shadowRoot.querySelectorAll('.card--list');
    expect(cards.length).toBe(2);
  });

  it('Wdit Modal Event', async () => {
    getLocal.mockReturnValueOnce([
      {
        nombre: 'Charmander',
        id: 1,
        tipos: ['fuego'],
        peso: 8.5,
        altura: 0.6,
      },
    ]);

    el.requestUpdate();
    await el.updateComplete;

    const mockHandler = vi.fn();
    el.addEventListener('alert-modal', mockHandler);

    const editBtn = el.shadowRoot.querySelector('.btn-edit');
    editBtn.click();

    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
