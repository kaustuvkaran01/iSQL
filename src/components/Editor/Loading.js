import React from "react";
import styled from "styled-components";
import LoopIcon from "@material-ui/icons/Loop";

const Loading = () => {
  return (
    <LoadingStyled>
      <LoopIcon className="svgLoader" />
    </LoadingStyled>
  );
};

const LoadingStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  .svgLoader {
    height: 6rem;
    width: 5rem;
    animation: spin 0.5s linear infinite;
    margin: auto;
    color: var(--primary-color);
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Loading;