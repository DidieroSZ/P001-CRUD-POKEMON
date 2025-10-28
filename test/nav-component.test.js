import { describe, it, expect, beforeEach } from 'vitest';
import '../src/components/nav-component/nav-component.js';

describe('NavComponent', () => {
  let el;
  
  beforeEach(() => {
    el = document.createElement('nav-component');
    document.body.appendChild(el);
  });
  
  it('Correct Component Render', () => {
    expect(el).toBeInstanceOf(HTMLElement);
  });

  it('Image Render', () =>{
    const img = el.shadowRoot.querySelectorAll('figure');
    expect(img.length).toBe(1);
  });

  it('Buttons Render', () =>{
    const btns = el.shadowRoot.querySelectorAll('.btn-nav');
    expect(btns.length).toBe(3);
  });

  it('Buttons Click', async () => {
    const btns = el.shadowRoot.querySelectorAll('.btn-nav');

    btns.forEach((btn, i) => {
        btn.click();
        expect(btn.classList.contains('btn-active')).toBe(true);
    });
  });
});