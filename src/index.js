import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { ProductProvider } from "./components/context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ProductProvider>
      <App />
    </ProductProvider>
  </StrictMode>,
  rootElement
);
