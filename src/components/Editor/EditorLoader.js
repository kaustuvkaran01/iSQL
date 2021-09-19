import React from 'react'

import { Typography } from '@material-ui/core/TypoGraphy';
import Box from "@mui/material/Box";


export default function EditorLoader() {
  return (
    <Box
    display="flex"
    height="140px"
    alignItems="center"
    justifyContent="center"
    >
      <Typography>Setting up the Editor... Please wait</Typography>
    </Box>
  )
}
