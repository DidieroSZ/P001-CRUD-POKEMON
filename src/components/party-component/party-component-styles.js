import { css } from "lit-element";

export default css`
    .form{
        gap: var(--PaddingButtons);
    }
    .input-general{
        padding: var(--PaddingButtons);
        border: solid 1px var(--Gris2);
        border-radius: 2rem;
    }
    .tipos--container{
        width: 40%;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: var(--PaddingButtons);
    }
`;