import React from "react";
import { hot } from "react-hot-loader";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import ContentWrapper from "./components/ContentWrapper";

function App() {
  return (
    <BrowserRouter>
      <ContentWrapper>
        <Routes />
      </ContentWrapper>
    </BrowserRouter>
  );
}

export default hot(module)(App);
