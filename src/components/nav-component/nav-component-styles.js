import { css } from "lit-element";

export default css`
.nav--container{
    width: fit-content;
    padding: 1.5rem;
    gap: 1rem;
    border-radius: 2rem;
    margin: 0 auto;
}
    .btn-nav{
        width: fit-content;
        height: auto;
        min-height: 2rem;
        text-transform: uppercase;
        padding: 1rem 1.5rem;
        border: none;
        border-radius: 2rem;
        cursor: pointer;
    }
    .btn-nav small{
        font-size: 1rem;
    }
`;