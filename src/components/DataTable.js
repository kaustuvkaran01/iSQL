import React, { useContext} from "react";
import styled from "styled-components";
import { SQLContext } from "../Context";
import data from "../data/customers.json";
import data2 from "../data/customers2.json";
import data3 from "../data/customers3.json";

const OutputTable = () => {
  const { tableColumns } = useContext(SQLContext);

  console.log(tableColumns);
  console.log(data);
    let columns;
  if(tableColumns === 'customerID'){
    columns = Object.keys(data[0]);
    console.log(columns);
  }
  else if(tableColumns === 'contactName'){
    columns=Object.keys(data2[0]);
  } else if(tableColumns === 'companyID'){
    columns=Object.keys(data3[0]);
  }
  

  return (
    <OutputTableStyled>
        {/* {tableColumns} */}
        <p>Active Table:</p>
      <table>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column}>
                <p>{column.toUpperCase()}</p>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((col, index) => (
                <td key={index}>
                  <p>{row[col]}</p>
                </td>
              ))}
            </tr> 
          ))} 
        </tbody>
      </table>
    </OutputTableStyled>
  );
};

const OutputTableStyled = styled.div`
  min-width: 72rem;
  padding-left:1rem;
  /* overflow: scroll; */
  table{
    min-width:72rem;
    margin-bottom:5rem;
  }
  table,
  th,
  td {
    border: 2px solid var(--border-color);
  }
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th {
    padding: 0.5rem 1rem;
  }
  th p {
    font-size: 0.9rem;
    color: var(--primary-color);
  }
  td {
    padding: 0.5rem 1rem;
    text-align: center;
    width: 11.11%;
  }
  td p {
    font-size: 0.9rem;
    color: var(--white-color);
  }
  &::-webkit-scrollbar {
    width: 0.8rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #2a2d3e;
  }
  &::-webkit-scrollbar-track {
    background-color: var(--font-light-color);
  }
  @media screen and (max-width: 1800px) {
  }
`;

export default OutputTable;
