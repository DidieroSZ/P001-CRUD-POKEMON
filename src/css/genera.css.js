import { css } from "lit-element";

export default css`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: "Open Sans", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
  font-variation-settings:
    "wdth" 100;
}

:host{
    --Gris1: #f8f9fa;
    --Gris2: #dee2e6;
    --Negro: #232323;
    --PaddingSections: 2rem;
    --PaddingButtons: 0.5rem;
}
.general--sections{
    width: 100%;
    height: auto;
    overflow: hidden;
    position: relative;
    padding: var(--PaddingSections);
}

.d-flexx{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
}
.d-row{
    flex-direction: row;
}
.d-col{
    flex-direction: column;
}

.btn-general{
    background-color: var(--Gris2);
    color: var(--Negro);
    transition: ease-out 0.4s;
    cursor: pointer;
    
}   
.btn-active{
    background-color: var(--Negro);
    color: var(--Gris2);
}  
`;