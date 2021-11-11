import React from "react";
import Routes from "./routes";
import styled from "styled-components";

const App = () => {
  return (
    <Main>
      <Routes />
    </Main>
  );
};

export default App;

const Main = styled.div`
  margin-top: 6rem;
`;
