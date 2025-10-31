import { describe, it, expect, beforeEach, vi } from 'vitest';
import '../src/components/form-component/form-component.js';

vi.mock('../src/utils/common.js', () => ({
    getLocal: vi.fn(),
    setLocal: vi.fn(),
    reloadPage: vi.fn(),
    objectTypes: {
      Fire: { color: '#f00', icon: '<svg></svg>', name: 'Fire' },
      Water: { color: '#00f', icon: '<svg></svg>', name: 'Water' },
    },
    arrayTypes: ['Fire', 'Water'],
}));
import { setLocal } from '../src/utils/common.js';

describe('FormComponent', () => {
    let el;
    beforeEach(() => {
      document.body.innerHTML = '';
      el = document.createElement('form-component');
      document.body.appendChild(el);
    });


    it('Correct Component Render', () => {
      expect(el).toBeInstanceOf(HTMLElement);

      const form = el.shadowRoot.querySelector('form');
      expect(form).not.toBeNull();

      const inputs = el.shadowRoot.querySelectorAll('.input-general');
      expect(inputs.length).toBe(3);
    });

    
    it('Dynamic Pokemon Render', async () => {
      await el.updateComplete;
      const checks = el.shadowRoot.querySelectorAll('.input--check');
      expect(checks.length).toBe(2);
    });

    
    it('Manage Selected Pokemon Types', async () => {
      await el.updateComplete;
      const checkboxes = el.shadowRoot.querySelectorAll('.input--check');

      checkboxes[0].checked = true;
      checkboxes[0].dispatchEvent(new Event('change'));
      expect(el.tiposSeleccionados).toContain('Fire');

      checkboxes[1].checked = true;
      checkboxes[1].dispatchEvent(new Event('change'));
      expect(el.tiposSeleccionados).toEqual(['Fire', 'Water']);
    });


    it('Invalid Form Modal', async () => {
      const spy = vi.fn();
      el.addEventListener('alert-modal', spy);

      const form = el.shadowRoot.querySelector('form');
      form.dispatchEvent(new Event('submit'));

      expect(spy).toHaveBeenCalledTimes(1);
    });


    it('Save Pokemon Information', async () => {
      el.shadowRoot.querySelector('#nombre').value = 'Charmander';
      el.shadowRoot.querySelector('#peso').value = '8.5';
      el.shadowRoot.querySelector('#altura').value = '0.6';
      el.tiposSeleccionados = ['Fire'];

      const form = el.shadowRoot.querySelector('form');
      form.dispatchEvent(new Event('submit', { cancelable: true }));

      expect(setLocal).toHaveBeenCalledTimes(1);
      expect(setLocal).toHaveBeenCalledWith('pokemones', expect.any(Array));
    });
});
