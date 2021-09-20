import React, {Suspense} from 'react'

import EditorControls from './EditorControls';
import EditorLoader from './EditorLoader';

import Box from 'material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles'

import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/mode-sql";
import "ace-builds/src-noconflict/theme-github";

import {v4 as uuid} from 'uuid'
import {DEFAULT_STRINGS, noop} from 'utils/constants/common';


const useStyles = makeStyles((theme) => ({
  editorStyles: {
    border: `1px solid ${theme.palette.divider}`,
    borderRight: "0",
  },
}));


export default function EditorPanel({ onRunQuery = noop }) {
    const classes = useStyles();
  
  return (
    <Box>
      <EditorControls />
    <Suspense fallback={EditorLoader}>

    <div className="h-1/4">
      <AceEditor 
      mode="mysql"
      theme="tomorrow"
      name={uuid()}
      fontSize={16}
      maxLines={6}
      minLines={6}
      width="100%"
      showPrintMargin={false}
      showGutter
      highlightActiveLine={false}
      placeholder={DEFAULT_STRINGS.QUERY_EDITOR_PLACEHOLDER}
      editorProps={{ $blockScrolling: true }}
      setOptions={{
        enableBasicAutocompletion: true,
        enableLiveAutocompletion: true,
        enableSnippets: true,
      }}
      className={classes.editorStyles}
      showLineNumbers
      />
    </div>
      </Suspense>
      </Box>
  );
}