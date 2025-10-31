import { describe, it, expect, beforeEach, vi } from 'vitest';
import '../src/components/layout-component/layout-component.js';

describe('LayoutComponent', () => {
    let el;

    beforeEach(() => {
      localStorage.clear();
      el = document.createElement('layout-component');
      document.body.appendChild(el);
    });

    it('Correct Component Render', () => {
      expect(el).toBeInstanceOf(HTMLElement);
    });

    it('Correct Buttons Render', async () => {
      const btns = el.shadowRoot.querySelectorAll('.btn-nav');
      expect(btns.length).toBe(5);
    });

    it('Change Image Style', async () => {
      const btns = el.shadowRoot.querySelectorAll('.btn-nav');
      const firstBtn = btns[0];

      firstBtn.click();

      expect(el.styleImg).toBe('1');
      expect(firstBtn.classList.contains('btn-active')).toBe(true);
      let estilo = localStorage.getItem('estilo');
      expect(estilo).toBe('1');
    });


    it('Activate Button LocalSorage Change', async () => {
      localStorage.setItem('estilo', '3');
      document.body.removeChild(el);
      el = document.createElement('layout-component');
      document.body.appendChild(el);

      await el.updateComplete;

      const btns = el.shadowRoot.querySelectorAll('.btn-nav');
      expect(btns[2].classList.contains('btn-active')).toBe(true);
      expect(el.styleImg).toBe('3');
    });


    it('Debe emitir el evento "style-state" al cambiar el estilo', async () => {
      const spy = vi.fn();
      el.addEventListener('style-state', spy);

      const btns = el.shadowRoot.querySelectorAll('.btn-nav');
      btns[4].click();

      expect(spy).toHaveBeenCalledTimes(1);

      const eventDetail = spy.mock.calls[0][0].detail;
      expect(eventDetail.styleimg).toBe('5');
    });
});
