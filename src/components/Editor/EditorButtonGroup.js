import React,{useContext, useState} from 'react'
import styled from 'styled-components';
import { SQLContext } from '../../Context';
import EditorButton from './EditorButton';

import { format } from "sql-formatter";

export default function EditorButtonGroup() {
  const { setModalOpen,
    searchFilterValue,
    setSearchFilterValue} = useContext(SQLContext);
    const {
      // dataOption,
      setDataOption,
      query,
      setQuery,
      // modalOpen,
      searchFilterDisabled,
      setSearchFilterDisabled
    } = useContext(SQLContext);

    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [searchSnackbarOpen, setSearchSnackbarOpen] = useState(false);
    
  const handleClearClick = () => {
    setQuery("");
    setDataOption("");
    setSearchFilterDisabled(true);
    setSnackbarOpen(true);
    setInterval(() => {
      setSnackbarOpen(false);
    }, 5000);
  };

  const handleFormatClick = () => {
    console.log(snackbarOpen);
    console.log(searchSnackbarOpen);
    setQuery(
      format(query, {
        uppercase: true,
      })
    );
  };

  const handleSearchDisabled = () => {
    if (searchFilterDisabled) {
      setSearchSnackbarOpen(true);
      setInterval(() => {
        setSearchSnackbarOpen(false);
      }, 5000);
    }
  };

  const handleRunClick = () => {
    setSearchFilterDisabled(true);
    if (
      format(query.toUpperCase()) === format("SELECT * FROM CUSTOMERS") ||
      format(query.toUpperCase()) === format("SELECT * FROM CUSTOMERS;")
    ) {
      setDataOption("data");
    } else if (
      format(query.toUpperCase()) ===
        format("SELECT CONTACT NAME, CITY, COUNTRY FROM CUSTOMERS") ||
      format(query.toUpperCase()) ===
        format("SELECT CONTACT NAME, CITY, COUNTRY FROM CUSTOMERS;")
    ) {
      setDataOption("data2");
    } else if (
      format(query.toUpperCase()) ===
        format(`SELECT * FROM CUSTOMERS WHERE COUNTRY="GERMANY"`) ||
      format(query.toUpperCase()) ===
        format(`SELECT * FROM CUSTOMERS WHERE COUNTRY="GERMANY";`)
    ) {
      setDataOption("data3");
    } else {
      setDataOption("noQuery");
    }
    setSnackbarOpen(true);
    setInterval(() => {
      setSnackbarOpen(false);
    }, 5000);
  };
  return (
    <EditorGroupContainer>

    <div className="editor-buttons">
          <EditorButton title={"Run"} onClick={handleRunClick}>
            {/* <PlayArrowOutlinedIcon className="editor-buttons-icon" /> */}
          </EditorButton>
          <EditorButton title={"Clear"} onClick={handleClearClick}>
            {/* <ClearAllOutlinedIcon className="editor-buttons-icon" /> */}
          </EditorButton>
          <EditorButton title={"Format"} onClick={handleFormatClick}>
            {/* <BrushIcon className="editor-buttons-icon" /> */}
          </EditorButton>

          <EditorButton title={"+"} onClick={() => setModalOpen(true)}>
            {/* <InfoOutlinedIcon className="editor-buttons-icon" /> */}
          </EditorButton>
          <div
            className="editor-search-bar"
            onClick={() => handleSearchDisabled()}
            >
            <input
              type="search"
              name="search"
              placeholder="Search"
              value={searchFilterValue}
              onChange={(e) => setSearchFilterValue(e.target.value)}
              disabled={searchFilterDisabled}
              />
            {/* <SearchOutlinedIcon className="editor-buttons-icon" /> */}
          </div>
        </div>
</EditorGroupContainer>
  )
}


const EditorGroupContainer = styled.div`
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
`