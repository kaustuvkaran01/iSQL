import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { SvgIcon } from "@material-ui/core";


const Navbar = () => {
  return (
    <NavbarStyled>
      <Link to="/">
        <div className="navbar-brand">
          <SvgIcon className="brand-icon">
            <path
              fill="currentColor"
              d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"
            />
          </SvgIcon>
          <p className="navbar-text">iSQL</p>
        </div>
      </Link>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/">Reports</Link>
        <Link to="/">API Network</Link>
        <Link to="/">Workspaces</Link>
      </div>
    </NavbarStyled>
  );
};

export default Navbar;

const NavbarStyled = styled.div`
  height: 10vh;
  padding: 1rem;
  background-color: var(--sidebar-dark-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
  color:var(--font-light-color);
  padding:0 2rem;
  .nav-links{
    color:var(--font-light-color);
    display:flex;
    flex-direction:row;
    gap:2rem;
  }
  .navbar-brand {
    display: flex;
    margin-left:3rem;
    justify-content: center;
    align-items: center;
    .brand-icon {
      font-size: 1.5rem;
      margin-right: 0.4rem;
      @media screen and (max-width: 576px) {
        font-size: 1.4rem;
        margin-right: 0.3rem;
      }
    }
    .navbar-text {
      font-size: 1.2rem;
      @media screen and (max-width: 576px) {
        font-size: 1.1rem;
      }
    }
  }
  .navbar-buttons {
    display: flex;
    .navbar-item {
      font-size: 1rem;
      text-transform: none;
      color: var(--font-color);
      margin: 0 0.4rem;
      @media screen and (max-width: 576px) {
        font-size: 0.8rem;
      }
    }
    .navbar-item-color {
      color: var(--font-light-color);
    }
  }
`;

// const StyledMenu = styled(Menu)`
//   & > div {
//     background-color: var(--editor-color);
//     box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
//     .navbar-menu-items {
//       color: var(--font-light-color) !important;
//       font-size: 0.8rem;
//       &:hover {
//         color: var(--primary-color) !important;
//       }
//       span {
//         margin: 0 0.3rem;
//         font-size: 0.8rem;
//       }
//     }
//   }
// `;