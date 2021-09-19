import React from 'react';
// import data from "../data/customers.json";
// import data2 from "../data/customers2.json";
// import data3 from "../data/customers3.json";

import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import TableChartOutlinedIcon from "@material-ui/icons/TableChartOutlined";
import { useState, useContext } from "react";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ViewColumnIcon from "@material-ui/icons/ViewColumn";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";

import { SQLContext } from "../Context";

export default function NavigationData({listItem}) {

    const {setTableColumns} = useContext(SQLContext);
    const [isOpen, setIsOpen] = useState(false);
  //  const classes = useStyles();
    const toggleListItem = () => {
    setIsOpen((value) => !value);
      setTableColumns(listItem[0]);

  };
  return (
      <>
      <ListItem button component="li" onClick={()=>toggleListItem()}>
        <ListItemIcon>
          {<TableChartOutlinedIcon fontSize="small" />}
        </ListItemIcon>
        <ListItemText>
          <Typography variant="body1">
            <Box
              component="span"
              fontWeight={isOpen ? "fontWeightBold" : "fontWeightRegular"}
            >
              {listItem[0]}
            </Box>
          </Typography>
        </ListItemText>
        {isOpen ? <ExpandMoreIcon /> : <ChevronLeftIcon />}
      </ListItem>
      <Collapse component="li" in={isOpen} timeout="auto" unmountOnExit>
        <List
          component="ul"
          disablePadding
          // subheader={
          //   <ListSubheader>
          //     {subtitle || DEFAULT_STRINGS.HEADING_COLUMNS}
          //   </ListSubheader>
          // }
        >
          {listItem.map((columnName) => (
            <ListItem dense key={2}>
              <ViewColumnIcon />
              <Tooltip
                title={`${columnName}`}
              >
                <ListItemText>
                  <Typography variant="subtitle2" component="span">
                    {columnName}
                  </Typography>
                  
                </ListItemText>
              </Tooltip>
            </ListItem>
          ))}
        </List>
      </Collapse>
      </>
  )
};
