import { describe, it, expect, beforeEach, vi } from 'vitest';
import { FormComponent } from '../src/components/form-component/form-component.js';

// --- MOCK DE DEPENDENCIAS --- //
vi.mock('../src/utils/common.js', () => ({
  getLocal: vi.fn(),
  setLocal: vi.fn(),
  reloadPage: vi.fn(),
  objectTypes: {
    fuego: { color: '#f00', icon: '<svg></svg>', name: 'Fuego' },
    agua: { color: '#00f', icon: '<svg></svg>', name: 'Agua' },
  },
  arrayTypes: ['fuego', 'agua'],
}));

import { getLocal, setLocal, reloadPage } from '../src/utils/common.js';

describe('FormComponent', () => {
  let el;

  beforeEach(() => {
    document.body.innerHTML = '';
    vi.clearAllMocks();
    el = document.createElement('form-component');
    document.body.appendChild(el);
  });

  it('Debe renderizar correctamente el formulario', () => {
    expect(el).toBeInstanceOf(HTMLElement);

    const form = el.shadowRoot.querySelector('form');
    expect(form).not.toBeNull();

    const inputs = el.shadowRoot.querySelectorAll('.input-general');
    expect(inputs.length).toBe(3); // nombre, peso, altura
  });

  it('Debe renderizar los tipos de Pokémon dinámicamente', async () => {
    await el.updateComplete;
    const checks = el.shadowRoot.querySelectorAll('.input--check');
    expect(checks.length).toBe(2); // fuego y agua
    expect(checks[0].id).toBe('fuego');
  });

  it('Debe manejar correctamente la selección de tipos', async () => {
    await el.updateComplete;
    const checkboxes = el.shadowRoot.querySelectorAll('.input--check');

    // Selecciona fuego
    checkboxes[0].checked = true;
    checkboxes[0].dispatchEvent(new Event('change'));
    expect(el.tiposSeleccionados).toContain('fuego');

    // Selecciona agua
    checkboxes[1].checked = true;
    checkboxes[1].dispatchEvent(new Event('change'));
    expect(el.tiposSeleccionados).toEqual(['fuego', 'agua']);

    // Deselecciona fuego
    checkboxes[0].checked = false;
    checkboxes[0].dispatchEvent(new Event('change'));
    expect(el.tiposSeleccionados).toEqual(['agua']);
  });

  it('Debe disparar evento "alert-modal" si el formulario es inválido', async () => {
    const spy = vi.fn();
    el.addEventListener('alert-modal', spy);

    const form = el.shadowRoot.querySelector('form');
    form.dispatchEvent(new Event('submit'));

    expect(spy).toHaveBeenCalledTimes(1);
    const eventDetail = spy.mock.calls[0][0].detail;
    expect(eventDetail.type).toBe('error');
  });

  it('Debe guardar correctamente un nuevo Pokémon si los datos son válidos', async () => {
    // Mocks previos
    getLocal.mockReturnValueOnce([]);
    const spy = vi.fn();
    el.addEventListener('alert-modal', spy);

    // Simular datos válidos
    el.shadowRoot.querySelector('#nombre').value = 'Charmander';
    el.shadowRoot.querySelector('#peso').value = '8.5';
    el.shadowRoot.querySelector('#altura').value = '0.6';
    el.tiposSeleccionados = ['fuego'];

    // Enviar formulario
    const form = el.shadowRoot.querySelector('form');
    form.dispatchEvent(new Event('submit', { cancelable: true }));

    expect(setLocal).toHaveBeenCalledTimes(1);
    expect(setLocal).toHaveBeenCalledWith('pokemones', expect.any(Array));

    // Verifica que reloadPage se llamó
    expect(reloadPage).toHaveBeenCalledTimes(1);
  });

  it('Debe agregar correctamente a un array existente de pokemones', async () => {
    const existing = [
      { id: 1, nombre: 'Bulbasaur', peso: 6.9, altura: 0.7, tipos: ['planta'] },
    ];
    getLocal.mockReturnValueOnce(existing);

    el.shadowRoot.querySelector('#nombre').value = 'Squirtle';
    el.shadowRoot.querySelector('#peso').value = '9';
    el.shadowRoot.querySelector('#altura').value = '0.5';
    el.tiposSeleccionados = ['agua'];

    const form = el.shadowRoot.querySelector('form');
    form.dispatchEvent(new Event('submit', { cancelable: true }));

    const [key, value] = setLocal.mock.calls[0];
    expect(key).toBe('pokemones');
    expect(value.length).toBe(2);
    expect(value[1].nombre).toBe('Squirtle');
  });
});
