import React from 'react'
import Navbar from "../components/Navbar";
import EditorPage from './EditorPage';
import styled from 'styled-components';

export default function Editor() {
  return (
    <EditorContainer>
      <Navbar />
      <EditorPage />
    </EditorContainer>
  )
}


const EditorContainer = styled.div`
  display:flex;
  flex-direction:column;
`
