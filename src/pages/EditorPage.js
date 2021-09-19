import React, { useContext, useState } from "react";
import styled from "styled-components";
// import Navbar from "../components/Navbar";
import { SQLContext } from "../Context";
import Editor from "../components/Editor/Editor";
import Output from "../components/Output";
// import EditorButton from "../components/Editor/EditorButton";
import EditorButtonGroup from '../components/Editor/EditorButtonGroup'
import TableDetails from "../components/TableDetails";
import Snackbar from "@material-ui/core/Snackbar";
import DataTable from '../components/DataTable';
// import Sidebar from '../components/Sidebar';
// import { SQLContext } from "../Context";
// import PlayArrowOutlinedIcon from "@material-ui/icons/PlayArrowOutlined";
// import ClearAllOutlinedIcon from "@material-ui/icons/ClearAllOutlined";
// import BrushIcon from "@material-ui/icons/Brush";
// import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
// import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
// import { format } from "sql-formatter";

const EditorPage = () => {
  const {
    dataOption,
    // setDataOption,
    // query,
    // setQuery,
    modalOpen,
    // searchFilterDisabled,
    // setSearchFilterDisabled
  } = useContext(SQLContext);

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [searchSnackbarOpen, setSearchSnackbarOpen] = useState(false);

  const [direction] = useState({
    vertical: "bottom",
    horizontal: "right",
  });
  const { vertical, horizontal } = direction;
  return (
    <div style={{display:"flex", flexDirection:"row"}}>
      <EditorPageStyled>
        <EditorButtonGroup />
        <div className="pane">
          <Editor />
          <Output />
        <DataTable />
        </div>
        {modalOpen && <TableDetails />}
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={snackbarOpen}
          message={
            dataOption === "data" ||
            dataOption === "data2" ||
            dataOption === "data3"
              ? "Query Executed"
              : dataOption === "noQuery"
              ? "Enter valid queries"
              : dataOption === ""
              ? "Editor Cleared"
              : null
          }
          key={vertical + horizontal}
        />
        <Snackbar
          anchorOrigin={{ vertical, horizontal }}
          open={searchSnackbarOpen}
          message={"No table present to filter"}
          key={`topright`}
        />
      </EditorPageStyled>
    </div>
  );
};
export default EditorPage;

const EditorPageStyled = styled.div`
  display:flex;
  flex-direction:column;
  position: relative;
  height: 90vh;
  background-color: var(--background-dark-color);
  /* overflow:scroll; */
  .editor-buttons {
    min-height: 10vh;
    display: flex;
    align-items: center;
    @media screen and (max-width: 900px) {
      flex-direction: column;
      align-items: flex-start;
    }
    .editor-buttons-icon {
      font-size: 1.3rem;
      vertical-align: bottom;
    }
    .editor-search-bar {
      margin-left: 1rem;
      background-color: var(--sidebar-dark-color);
      padding: 0.5rem 1rem;
      border: none;
      border-radius: 2px;
      color: var(--font-light-color);
      font-size: 1rem;
      @media screen and (max-width: 900px) {
        margin: 1rem;
      }
      input {
        height: 100%;
        background: none;
        border: none;
        color: var(--font-light-color);
        &::placeholder {
          color: var(--font-light-color);
          font-size: 1rem;
        }
        &:focus {
          outline: 0;
        }
      }
    }
  }
  .pane {
    height: 80vh;
    /* margin-left:10%; */
    /* width: 100%; */
    /* position:right; */
    overflow: scroll;
    display: flex;
    flex-direction: column;
    &::-webkit-scrollbar {
      width: 0.8rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #2a2d3e;
    }
    &::-webkit-scrollbar-track {
      background-color: var(--font-light-color);
    }
  }
  @media screen and (max-width: 1280px) {
    /* margin-left: 12rem; */
  }
  @media screen and (max-width: 1200px) {
    margin-left: 0;
  }
`;