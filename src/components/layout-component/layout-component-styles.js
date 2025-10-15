import { css } from "lit-element";

export default css`

.list--container{
    width: 100%;
    height: auto;
    padding: var(--PaddingSections);
    /* display: grid;
    grid-template-columns: repeat(4, 1fr); */
}

h2{
    text-align: center;
  }
  table {
    border-collapse: collapse;
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
  }
    table img{
      width: 60px;
      aspect-ratio: 1/1;
    }
    table SVG{
      width: 18px;
      height: 18px;
      aspect-ratio: 1 / 1;
    }
    tr {
      overflow: hidden;
    }
      tr:hover {
        background-color: var(--Gris2);
      }
      th, td {
        padding: 0px 1rem;
        text-align: center;
        overflow: hidden;
        
        box-shadow: 2px 2px 5px var(--Gris2);
        padding: 0.5rem 1rem;
      }

    .btn-edit{

      padding: 1rem;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      display: flex;
      background-color: blue;
      color: white;
    }
    .btn-delete{
    
      padding: 1rem;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      display: flex;
      background-color: red;
      color: white;

    }
    
`;