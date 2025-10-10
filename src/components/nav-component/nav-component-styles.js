import { css } from "lit-element";

export default css`
.nav--container{
    width: fit-content;
    padding: var(--PaddingButtons);
    gap: var(--PaddingButtons);
    border-radius: var(--PaddingButtons);
    border: solid 1px var(--Gris2);
}
    .btn-nav{
        width: 4rem;
        height: auto;
        min-height: 2rem;
        aspect-ratio: 1/1;
        padding: var(--PaddingButtons);
        border: none;
        border-radius: var(--PaddingButtons);
        cursor: pointer;
    }
`;