import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";
import NavigationData from "./NavigationData";

function Sidebar({ navToggle }) {
  return (
    <SidebarStyled className={`${navToggle ? "nav-toggle" : ""}`}>
      <Navigation />
      <NavigationData />
    </SidebarStyled>
  );
}

const SidebarStyled = styled.div`
  /* width: 16.3rem; */
  width:30rem;
  position: fixed;
  /* z-index: -1; */
  height: 90vh;
  bottom:0;
  display:flex;
  flex-direction:"row";
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