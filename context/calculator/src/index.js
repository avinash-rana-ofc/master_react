import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CalculatorContextProvider } from "./store/CalculatorContext";
import ThemeContextProvider from "./store/ThemeContext";
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./store/themeSlice";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeContextProvider>
        <CalculatorContextProvider>
          <App />
        </CalculatorContextProvider>
      </ThemeContextProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
