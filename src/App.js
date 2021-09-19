import React, { useEffect, useState, useContext, lazy, Suspense } from "react";
import { Switch as Switching, Route } from "react-router-dom";
import styled from "styled-components";
import Landing from "./pages/Landing";
// import Brightness4Icon from "@material-ui/icons/Brightness4";
import Switch from "@material-ui/core/Switch";
import { SQLContext } from "./Context";
import Loading from "./components/Editor/Loading";
import Sidebar from "./components/Sidebar";

const EditorPage = lazy(() => import("./pages/EditorPage"));

function App() {
  const { theme, setTheme, setEditorTheme, navToggle } = useContext(SQLContext);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  const themeToggler = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
      setChecked(false);
      setEditorTheme("material-palenight");
    } else {
      setTheme("light-theme");
      setChecked(true);
      setEditorTheme("neo");
    }
  };

  return (
    <AppContentStyled>
      <div>
        <div className="theme">
          <div className="light-dark-mode">
            <div className="left-content">
              {/* <Brightness4Icon /> */}
              <img src="something.com" alt="hehe"/>
            </div>
            <div className="right-content">
              <Switch
                value=""
                checked={checked}
                inputProps={{ "aria-label": "Theme Switch" }}
                size="medium"
                onClick={themeToggler}
                className="theme-switch"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lines">
        <div className="line-1"></div>
        <div className="line-2"></div>
        <div className="line-3"></div>
        <div className="line-4"></div>
      </div>

      <Switching>
        <Route exact path="/" component={Landing} />
        <>
          <Sidebar navToggle={navToggle} />
          <Route exact path="/editor">
            <Suspense fallback={<Loading />}>
              <EditorPage />
            </Suspense>
          </Route>
        </>
      </Switching>
    </AppContentStyled>
  );
}

const AppContentStyled = styled.main`
  .light-dark-mode {
    position: fixed;
    top: 12vh;
    right: 2rem;
    border-radius:24px;
    padding:10px;
  }
  .theme-switch span {
    color: var(--primary-color);
  }
  .lines {
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;
    .line-1,
    .line-2,
    .line-3,
    .line-4 {
      width: 2px;
      min-height: 100vh;
      background-color: var(--border-color);
    }
  }
`;

export default App;