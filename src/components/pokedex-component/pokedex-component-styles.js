import { css } from "lit-element";

export default css`

table {
  border-collapse: collapse;
  width: 100%;
}
    th, td {
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid  var(--Gris2);
    }

    tr:hover {background-color:  var(--Gris2);}
`;