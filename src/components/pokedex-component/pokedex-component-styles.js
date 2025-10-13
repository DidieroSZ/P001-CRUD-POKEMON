import { css } from "lit-element";

export default css`
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
      border: none;
      padding: 1rem;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      display: flex;
      background-color: blue;
      color: white;
    }
    .btn-delete{
      border: none;
      padding: 1rem;
      aspect-ratio: 1 / 1;
      border-radius: 50%;
      display: flex;
      background-color: red;
      color: white;

    }

  /* SPINNER */
  .loader {
    width: 48px;
    height: 48px;
    border: 3px dotted #fff;
    border-style: solid solid dotted dotted;
    border-radius: 50%;
    display: inline-block;
    position: relative;
    box-sizing: border-box;
    animation: rotation 2s linear infinite;
  }
  .loader::after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 3px dotted #ff3d00;
    border-style: solid solid dotted;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    animation: rotationBack 1s linear infinite;
    transform-origin: center center;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes rotationBack {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(-360deg);
    }
  }
`;