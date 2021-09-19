import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-palenight.css";
import "codemirror/theme/neo.css";
import "codemirror/mode/sql/sql";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/keymap/sublime";
import "codemirror/addon/hint/sql-hint.js";
// import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
// import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import { SQLContext } from "../../Context";

const Editor = () => {
  const [open, setOpen] = useState(true);
  const { editorTheme, query, setQuery } = useContext(SQLContext);

  return (
    <EditorStyled>
      <div className={`editor-pane ${open ? "" : "collapsed"}`}>
        <div className="editor-container">
          <div className="editor-title">
            Enter Queries Here
            <button
              type="button"
              className="expand-collapse-btn"
              onClick={() => setOpen((prevOpen) => !prevOpen)}
              aria-label="expand-collapse-btn"
            >
              {open ? <img src="dummy.com" alt="expand less"/> : <img src="dummy.com" alt="expand more" />}
            </button>
          </div>
          <CodeMirror
            onBeforeChange={(editor, data, value) => {
              setQuery(value);
            }}
            name="Editor"
            value={query}
            className="code-mirror-wrapper"
            options={{
              lint: true,
              mode: "sql",
              theme: editorTheme,
              lineNumbers: true,
              keyMap: "sublime",
              matchBrackets: true,
              addModeClass: true,
              showHint: true,
            }}
            aria-label="code-editor"
          />
        </div>
      </div>
    </EditorStyled>
  );
};

const EditorStyled = styled.div`
  margin: 0 1rem 1rem 1rem;
  .editor-pane {
    display: flex;
    height: 100%;
  }
  .editor-container {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .collapsed .code-mirror-wrapper {
    flex-grow: 0;
    height: 0;
  }
  .collapsed .CodeMirror-scroll {
    position: absolute;
    overflow: hidden !important;
  }
  .collapsed .editor-title {
    border-radius: 0.2rem;
  }
  .CodeMirror {
    height: 100%;
  }
  .CodeMirror span {
    font-family: Inconsolata, monospace;
    font-size: 1rem;
  }
  .CodeMirror-lines {
    padding: 1rem 0.5rem;
  }
  .expand-collapse-btn {
    margin-left: 0.5rem;
    background: none;
    border: none;
    cursor: pointer;
    color: var(--font-light-color);
  }
  .editor-title {
    display: flex;
    justify-content: space-between;
    background-color: var(--sidebar-dark-color);
    padding: 1rem 1rem 0.5rem 1rem;
    border-top-right-radius: 0.2rem;
    border-top-left-radius: 0.2rem;
  }
  .code-mirror-wrapper {
    height: 30vh;
    flex-grow: 1;
    border-bottom-right-radius: 0.2rem;
    border-bottom-left-radius: 0.2rem;
    overflow: hidden;
    transition: all 0.3s ease;
  }
`;

export default Editor;