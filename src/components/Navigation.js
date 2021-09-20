import React, { useContext } from "react";
import { SQLContext } from "../Context";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
// import { SvgIcon } from "@material-ui/core";
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ListAltIcon from '@material-ui/icons/ListAlt';

// import LogoSvg from "../assets/logo.png";
// import DashboardIcon from "@material-ui/icons/Dashboard";
// import BuildIcon from "@material-ui/icons/Build";
// import CodeIcon from "@material-ui/icons/Code";
// import HomeIcon from "@material-ui/icons/Home";
// import ListAltIcon from "@material-ui/icons/ListAlt";

function Navigation() {
  const { setNavToggle } = useContext(SQLContext);
  
  return (
    <NavigationStyled>
      {/* <footer className="footer">
        <p>
          <span>Made for <br /></span>
          <a
            href="https://atlan.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="atlan-link2"
          >
            <img
              src={LogoSvg}
              alt="atlan"
              width="150"
              className="footer-logo"
            />
          </a>
        </p>
      </footer> */}
        {/* <div className="nav-logo">
          <NavLink to="/">
            <div className="navbar-brand">
              <SvgIcon className="brand-icon">
                <path
                  fill="currentColor"
                  d="M12,3C7.58,3 4,4.79 4,7C4,9.21 7.58,11 12,11C16.42,11 20,9.21 20,7C20,4.79 16.42,3 12,3M4,9V12C4,14.21 7.58,16 12,16C16.42,16 20,14.21 20,12V9C20,11.21 16.42,13 12,13C7.58,13 4,11.21 4,9M4,14V17C4,19.21 7.58,21 12,21C16.42,21 20,19.21 20,17V14C20,16.21 16.42,18 12,18C7.58,18 4,16.21 4,14Z"
                />
              </SvgIcon>

              <p className="navbar-text">iSQL</p>
            </div>
          </NavLink>
        </div> */}
      <ul className="nav-items">
        <li className="nav-item">
          <NavLink
            to="/"
            activeClassName="active-class"
            exact
            onClick={() => setNavToggle(false)}
          >
            <span className="nav-span">
              {" "}
              <HomeIcon className="nav-item-icon"/>
              <span>Home</span>
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/editor"
            activeClassName="active-class"
            exact
            onClick={() => setNavToggle(false)}
          >
            <span className="nav-span">
              {" "}
              <CodeIcon className="nav-item-icon" /> 
              <span>Editor</span>
            </span>
            
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/editor" onClick={() => setNavToggle(false)}>
            <span className="nav-span">
              {" "}
              <DashboardIcon className="nav-item-icon" /> 
              <span>Workspaces</span>
            </span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/editor" onClick={() => setNavToggle(false)}>
            <span className="nav-span">
              {" "}
              <ListAltIcon className="nav-item-icon" /> 
              <span>Stats</span>
            </span>
          </NavLink>
        </li>
      </ul>
    </NavigationStyled>
  );
}

const NavigationStyled = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  min-width:10rem;
  border-right: 1px solid var(--border-color);
  .nav-logo {
    height: 10vh;
    width: 100%;
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
    .navbar-brand {
      display: flex;
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
  }

  .nav-span{
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
  }
  .nav-items {
    display:flex;
    flex-direction:column;
    width: 100%;
    .active-class {
      background-color: var(--primary-color-light);
      color: white;
      box-shadow: 1rem 0px 0px 0px var(--navigation-link-color) inset;
    }
    .nav-item-icon {
      margin-right: 0.2rem;
      margin-bottom:0.3rem;
      font-size: 2rem;
    }
    li {
      display: block;
      span {
        margin-left: 2%;
        font-size: 1rem;
        @media screen and (max-width: 576px) {
          margin-left: 15%;
        }
      }
      a {
        display: block;
        padding: 0.45rem 0;
        position: relative;
        z-index: 10;
        transition: all 0.4s ease-in-out;
        font-weight: 200;
        letter-spacing: 1px;
        color: var(--white-color);
        &:hover {
          cursor: pointer;
        }
        &::before {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 50%;
          background-color: var(--primary-color);
          transition: All 0.4s cubic-bezier(1, -0.2, 0.25, 0.95);
          opacity: 0.21;
          z-index: -1;
        }
      }
      a:hover::before {
        width: 100%;
        height: 100%;
      }
    }
  }
  footer {
    border-top: 1px solid var(--border-color);
    width: 100%;
    p {
      padding: 1.3rem 0;
      font-size: 1rem;
      display: block;
      text-align: center;
      span {
        vertical-align: middle;
        font-size: 1rem;
      }
    }
    .footer-logo {
      vertical-align: middle;
      margin-left: 0.2rem;
      width:10rem;
    }
  }
`;
export default Navigation;