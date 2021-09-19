import React,{useContext} from 'react'
import Navbar from "../components/Navbar";
import EditorPage from './EditorPage';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar';
import {SQLContext} from '../Context';

export default function Editor() {
  const {navToggle} = useContext(SQLContext);
  return (
    <EditorContainer>
      <Navbar />
      <div className="down">
      <Sidebar navToggle={navToggle} />
      <EditorPage />
      </div>
    </EditorContainer>
  )
}


const EditorContainer = styled.div`
  display:flex;
  width:100vw;
  flex-direction:column;
  .down{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    /* width:100vw; */
  }
`
