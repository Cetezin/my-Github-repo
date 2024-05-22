import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";

const colors = {
  brand: {
    900: "#1a3565",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <HelmetProvider>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </HelmetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
