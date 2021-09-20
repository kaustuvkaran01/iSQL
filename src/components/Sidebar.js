import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import Dataset from "./Dataset";

function Sidebar({ navToggle }) {
  return (
    <SidebarStyled className={`${navToggle ? "nav-toggle" : ""}`}>
      <Navigation />
      <Dataset />
    </SidebarStyled>
  );
}

const SidebarStyled = styled.div`
  width:30vw;
  /* margin-top:10vh; */
  height:90vh;
  bottom:0;
  /* position:sticky; */
  display:flex;
  flex-direction:row;
  background-color: var(--sidebar-dark-color);
  overflow: hidden;
  transition: all 0.4s ease-in-out;
  @media screen and (max-width: 1200px) {
    transform: translateX(-100%);
  }
  @media screen and (max-width: 1280px) {
    width: 12rem;
  }
`;

export default Sidebar;