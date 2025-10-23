import { fixture, html, expect } from '@open-wc/testing';
import '../src/components/nav-component/nav-component.js';

describe('MyElement', () => {
  it('Render Nav Component', async () => {
    const el = await fixture(html`<nav-component></nav-component>`);
  });
});
