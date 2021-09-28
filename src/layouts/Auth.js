import React from "react";
import styled, { createGlobalStyle } from "styled-components/macro";
import { CssBaseline } from "@material-ui/core";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  #root {
    height: 100%;
  }
  body {
    /* background: ${(props) => props.theme.palette.background.default}; */
    background-color: #6320EE;
  }
`;

const Root = styled.div`
  max-width: 520px;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  display: flex;
  min-height: 100%;
`;

const Auth = ({ children }) => {
  return (
    <>
      <img
        src="/static/img/logo/white.svg"
        alt="lgo"
        style={{ width: "14rem", marginTop: "2rem", marginLeft: "51rem" }}
      />
      <Root>
        <CssBaseline />
        <GlobalStyle />
        {children}
      </Root>
    </>
  );
};

export default Auth;
