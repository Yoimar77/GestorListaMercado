import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/index.css"; // Estilos globales con Tailwind
import { BrowserRouter } from "react-router-dom";
import { StoreProvider } from "./context/StoreContext";
import { CategoryProvider } from "./context/CategoryContext";
import { ProductProvider } from "./context/ProductContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <StoreProvider>
        <CategoryProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </CategoryProvider>
      </StoreProvider>
    </BrowserRouter>
  </React.StrictMode>
);
