import { describe, it, expect, vi, beforeEach } from "vitest";
/* import { fixture, html } from '@open-wc/testing'; */
import { getLocal, setLocal, reloadPage } from '../src/utils/common.js';
import "../src/components/modal-component/modal-component.js";
import { mockPokemon } from "../mocks/mockPokemon.js"


describe('ModalComponent', () => {
    let modal; 
    beforeEach(async () => {
        modal = document.createElement('modal-component');
        document.body.appendChild(modal);
    });

    it('Modal Open', async () => {
        modal.type = 'error';
        modal.mostrar = true;
        await modal.updateComplete;

        expect(modal.shadowRoot.querySelector('.modal--container')).not.toBeNull();
    });

    it('Modal Close', async () => {
        modal.type = 'error';
        modal.mostrar = true;
        await modal.updateComplete;

        const closeBtn = modal.shadowRoot.querySelector('.close .btn-general');
        closeBtn.click();
        await modal.updateComplete;

        expect(modal.mostrar).toBe(false);
    });


    it('Mondal Type Error', async () => {
        modal.type = 'error';
        modal.mostrar = true;
        await modal.updateComplete;

        const textInner = modal.shadowRoot.querySelector('.text-msg.error--msg');
        expect(textInner).not.toBeNull();
    });

    it('Mondal Type Edit', async () => {
        localStorage.setItem('pokemones', JSON.stringify([mockPokemon]));
        modal.type = 'edit';
        modal.item = '0';
        modal.mostrar = true;
        await modal.updateComplete;

        const textInner = modal.shadowRoot.querySelector('.text-msg.edit--msg');
        expect(textInner).not.toBeNull();
    });

    it('muestra error si el formulario está incompleto', async () => {
        modal.type = 'edit';
        modal.item = '0';
        modal.mostrar = true;
        await modal.updateComplete;

        const form = modal.shadowRoot.querySelector('form');
        form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));
        await modal.updateComplete;

        const errorMsg = modal.shadowRoot.querySelector('.form--container > .error--msg');
        expect(errorMsg).not.toBeNull();
    });
});