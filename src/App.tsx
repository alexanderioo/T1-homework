import { useState } from "react";
import styled from "styled-components";
import { RouterProvider } from "react-router-dom";
import { router } from "./router";

import "./App.css";

import reactLogo from "./assets/react.svg";
import { T, Link } from "@admiral-ds/react-ui";

const Divider = styled.div`
  width: 10px;
  height: 12px;
`;

function App() {
  return <RouterProvider router={router} />;
}
export default App;
