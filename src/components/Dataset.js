import Box from "@material-ui/core/Box";

import List from "@material-ui/core/List";
import NavigationData from './NavigationData'

import Typography from "@material-ui/core/Typography";
import styled from 'styled-components';

import data from "../data/customers.json";
import data2 from "../data/customers2.json";
import data3 from "../data/customers3.json";

const table = Object.keys(data[0]);
const table2 = Object.keys(data2[0]);
const table3 = Object.keys(data3[0]);

const tableHeaders = []
tableHeaders.push(table);
tableHeaders.push(table2);
tableHeaders.push(table3);

// SideBar Component
const SideBar = () => {

    console.log(tableHeaders);

  return (
      <NavigationContainer>
      <Box p={2}>
        <Typography variant="h6">Tables</Typography>
      </Box>
        <List>
          {tableHeaders.map((item, index) => (
            <NavigationData
              key={index}
              listItem={item}
            />
          ))}
        </List>

    </NavigationContainer>
  );
};

export default SideBar;

const NavigationContainer = styled.div`
  display: flex;
  flex-direction:column;
  width:20rem;
  height:90vh;
  background: var(--editor-color);
  bottom:0;
`
